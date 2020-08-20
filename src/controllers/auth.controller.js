const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const config = require('../config');
import { sendEmail } from '../middlewares/email';

/*-----------------------------Registro---------------------------------*/
export async function signup(req, res, next) {
    const { correoElectronico, contrasenia } = req.body;
    const userCheck = await User.findOne({correoElectronico: correoElectronico});
    if(!userCheck){
        const codigoVerificacion = Math.floor(Math.random() * (9999-1000) + 1000).toString();
        const user = new User({
            verificada: '0',
            claveSeguridad: '',
            codigoVerificacion: codigoVerificacion,
            correoElectronico,
            contrasenia,
            nombres: '', 
            apellidos: '',
            numeroIdentidad: '', 
            fechaNacimiento: '', 
            genero: '', 
            telefonoFijo: '', 
            telefonoMovil: '', 
            departamento: '', 
            ciudad: '', 
            direccion: '', 
            numeroCasa: '',
            latitud: 0,
            longitud: 0
        });
        user.contrasenia = await user.encryptPassword(user.contrasenia);
        await user.save();
        const userInserted = await User.findOne({correoElectronico: correoElectronico});
        const token = jwt.sign({id: userInserted._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        });
        res.json({
            auth: true,
            token: token,
            id: userInserted._id,
            codigoVerificacion: codigoVerificacion,
            verificada: userInserted.verificada
        });
        sendEmail(correoElectronico, codigoVerificacion);
    }else{
        res.json({
            auth: false,
            token: null
        })
    }
}

/*---------------------------Inicio de Sesión--------------------------*/
export async function login(req, res, next) {
    const { correoElectronico, contrasenia } = req.body;
    const user = await User.findOne({correoElectronico: correoElectronico});
    if(!user){
        res.json({
            auth: false,
            token: null
        })
    }else {
        const validPassword = await user.validatePassword(contrasenia);
        if(!validPassword){
            res.json({
                auth: false,
                token: null
            })
        }else {    
            const token = jwt.sign({id: user._id}, config.secret, {
                expiresIn: 60 * 60 * 24
            });
            if (user.verificada === '0') {
                res.json({
                    auth: true,
                    token: token,
                    id: user._id,
                    verificada: user.verificada,
                    codigoVerificacion: user.codigoVerificacion
                });
            } else {
                res.json({
                    auth: true,
                    token: token,
                    id: user._id,
                    verificada: user.verificada
                });
            }
        }
    }

}

/*---------------------------Perfil de Usuario-------------------------*/
export async function setProfile(req, res, next) {
    const { id, nombres, apellidos, numeroIdentidad, fechaNacimiento, genero, telefonoFijo, telefonoMovil } = req.body;
    await User.updateOne({_id: id}, {nombres: nombres,
        apellidos: apellidos, 
        numeroIdentidad: numeroIdentidad, 
        fechaNacimiento: fechaNacimiento, 
        genero: genero, 
        telefonoFijo: telefonoFijo, 
        telefonoMovil: telefonoMovil});
    const user = await User.findOne({_id: id});
    res.json(user);
}

export async function getProfile(req, res, next) {
 const { id } = req.body;
 const user = await User.findOne({_id: id}, {contrasenia: 0});
 res.json(user)
}

/*---------------------------Seguridad del Usuario-------------------------*/
export async function setSecurity(req, res, next){
    const { id, correoElectronico, contraseniaActual, contraseniaNueva, contraseniaConfirmar } = req.body;
    const user = await User.findOne({_id: id});
    const validPassword = await user.validatePassword(contraseniaActual);
    const pass = await user.encryptPassword(contraseniaNueva)
    if (validPassword) {
        if ((contraseniaNueva === contraseniaConfirmar) && contraseniaNueva !== '' && contraseniaConfirmar !== '') {
            await User.updateOne({_id: id}, {contrasenia: pass});
            const user = await User.findOne({_id: id});
            res.json(user)
        } else {
            res.json('1')
        }
    } else{
        res.json('0')
    }
}

export async function getSecurity(req, res, next){
    const { id } = req.body;
    const user = await User.findOne({_id: id}, {contrasenia: 0});
    res.json(user)
}

/*---------------------------Ubicacion del Usuario-------------------------*/
export async function setLocation(req, res, next){
    const { id, departamento, ciudad, direccion, numeroCasa } = req.body;
    await User.updateOne({_id: id}, {departamento: departamento, 
        ciudad: ciudad, 
        direccion: direccion, 
        numeroCasa: numeroCasa});
    const user = await User.findOne({_id: id});
    res.json(user);
}

export async function getLocation(req, res, next){
    const { id } = req.body;
    const user = await User.findOne({_id: id}, {contrasenia: 0});
    res.json(user)
}

/*---------------------------Verificacion del Email-------------------------*/
export async function setVerificada(req, res, next) {
    const { id, codigoVerificacion } = req.body;
    await User.updateOne({_id: id}, {verificada: '1'});
    await User.updateOne({_id: id}, {$unset: {codigoVerificacion: codigoVerificacion}});
    const user = await User.findOne({_id: id});
    res.json(user);
}

/*---------------------------Reenviar del Email (Confirmacion de Cuenta)-------------------------*/
export async function resendEmail(req, res, next) {
    const { id } = req.body;
    const codigoVerificacion = Math.floor(Math.random() * (9999-1000) + 1000).toString();
    await User.updateOne({_id: id}, {codigoVerificacion: codigoVerificacion});
    const user = await User.findOne({_id: id});
    sendEmail(user.correoElectronico, user.codigoVerificacion);
    res.json(user)
}

/*---------------------------Verificar Email-------------------------*/
export async function verifyEmail(req, res, next) {
    const { correoElectronico } = req.body;
    const user = await User.findOne({correoElectronico: correoElectronico});
    if(user !== null){
        const claveSeguridad = Math.floor(Math.random() * (9999-1000) + 1000).toString();
        await User.updateOne({correoElectronico: correoElectronico}, {claveSeguridad: claveSeguridad});
        const userUpdate = await User.findOne({correoElectronico: correoElectronico});
        sendEmail(userUpdate.correoElectronico, userUpdate.claveSeguridad)
        res.json(userUpdate)
    } else {
        res.json(null)
    }
}

/*---------------------------Cambiar Contraseña-------------------------*/
export async function changePassword(req, res, next) {
    const { correoElectronico, contrasenia } = req.body;
    const user = await User.findOne({correoElectronico: correoElectronico});
    user.contrasenia = await user.encryptPassword(contrasenia);
    await User.updateOne({correoElectronico: correoElectronico}, {contrasenia: user.contrasenia, claveSeguridad: ''});
    res.json(true)
}

/*---------------------------Reenviar del Email (Cambiar Contraseña)-------------------------*/
export async function resendEmailPass(req, res, next) {
    const { correoElectronico } = req.body;
    const claveSeguridad = Math.floor(Math.random() * (9999-1000) + 1000).toString();
    await User.updateOne({correoElectronico: correoElectronico}, {claveSeguridad: claveSeguridad});
    const user = await User.findOne({correoElectronico: correoElectronico});
    sendEmail(user.correoElectronico, user.claveSeguridad);
    res.json(user)
}

/*------------------------------Obtener Perfil------------------------------------------ */
export async function profile(req, res, next){
    const { id } = req.body;
    const user = await User.findOne({_id: id}, {contrasenia: 0});
    res.json(user)
}


/*--------------------------------Guardar Coordenadas---------------------------------------*/
export async function setCoordinates(req, res, next){
    const { id, latitud, longitud } = req.body;
    const user = await User.findOneAndUpdate({_id: id}, {latitud: latitud, longitud: longitud});
    if (user) {
        res.json(true)
    }else{
        res.json(false)
    }
}

/*--------------------------------Obtener Coordenadas---------------------------------------*/
export async function getCoordinates(req, res, next){
    const { id } = req.body;
    const user = await User.findOne({_id: id}, {contrasenia: 0});
    res.json(user)
}