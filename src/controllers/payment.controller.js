const User = require('../models/Users');
const OrdenPedido = require('../models/OrdenPedidos');
const CoordenadasEnvio = require('../models/CoordenadasEnvios')
const CarritoCompraDetalle = require('../models/CarritoCompraDetalle');
const CarritoCompraMayoreo = require('../models/CarritoCompraMayoreo');
const OrdenPedidoDetalle = require('../models/OrdenPedidoDetalle');
const OrdenPedidoMayoreo = require('../models/OrdenPedidoMayoreo');
const Producto = require('../models/Producto');
import { depositPaymentEmail } from '../middlewares/depositPaymentEmail';
import { cardPaymentEmail } from '../middlewares/cardPaymentEmail';
import { notificationEmailDepositPayment } from '../middlewares/notificationEmailDepositPayment';
import { notificationEmailCardPayment } from '../middlewares/notificationEmailCardPayment';

export async function cardPayment(req, res) {
    var lugarEnvio;
    const { idUser, orderPay, metodoEnvio, tienda, tazaCambio, subtotalLempiras, costoEnvioLempiras, totalLempiras, subtotal, costoEnvio, total } = req.body;
    const user = await User.findOne({ _id: idUser }, { contrasenia: 0 });
    if (metodoEnvio === 'tienda') {
        lugarEnvio = tienda;
    }
    if (metodoEnvio === 'casa') {
        const { direccionEnvio } = req.body;
        if (direccionEnvio === 'alterna') {
            const { departamentoAlterno, ciudadAlterna, direccionAlterna, numeroCasaAlterna, latitudAlter, longitudAlter } = req.body;
            lugarEnvio = departamentoAlterno + ', ' + ciudadAlterna + ', ' + direccionAlterna + ', Casa: ' + numeroCasaAlterna + `, Ubicación: https://www.google.com/maps/@${latitudAlter},${longitudAlter},17.25z`;
        } else {
            lugarEnvio = user.departamento + ', ' + user.ciudad + ', ' + user.direccion + ', Casa: ' + user.numeroCasa + `, Ubicación: https://www.google.com/maps/@${user.latitud},${user.longitud},17.25z`;
        }
    }
    var f = new Date();
    var d = f.getDate();
    var m = f.getMonth() + 1;
    var a = f.getFullYear();
    if (d < 10) {
        d = '0' + d;
    }
    if (m < 10) {
        m = '0' + m;
    }
    var fecha = d + "/" + m + "/" + a;
    const numeroPedido = Math.floor(Math.random() * (99999 - 10000) + 10000).toString();
    const numeroReferencia = a + "" + m + "" + d + Math.floor(Math.random() * (99999 - 1000) + 1000).toString();
    const ordenPedido = new OrdenPedido({
        fecha: new Date(),
        ordenPago :orderPay,
        numeroPedido,
        numeroReferencia,
        idUser,
        nombre: user.nombres + ' ' + user.apellidos,
        numeroIdentidad: user.numeroIdentidad,
        telefonoMovil: user.telefonoMovil,
        metodoPago: 'Tarjeta de crédito/débito',
        subtotal,
        costoEnvio,
        total,
        estadoPedido: false
    })
    await ordenPedido.save();
    const ordenPedidoInserted = await OrdenPedido.findOne({ numeroPedido: numeroPedido, numeroReferencia: numeroReferencia })

    if (metodoEnvio === 'casa') {
        const { direccionEnvio } = req.body;
        if (direccionEnvio === 'alterna') {
            const { latitudAlter, longitudAlter } = req.body;
            const coordenadaEnvio = new CoordenadasEnvio({
                idPedido: ordenPedidoInserted._id,
                latitud: latitudAlter,
                longitud: longitudAlter
            })
            await coordenadaEnvio.save();
        } else {
            const coordenadaEnvio = new CoordenadasEnvio({
                idPedido: ordenPedidoInserted._id,
                latitud: user.latitud,
                longitud: user.longitud
            })
            await coordenadaEnvio.save();
        }
    }
    
    const itemsDetalle = await CarritoCompraDetalle.find({ idUser: idUser });
    const itemsMayoreo = await CarritoCompraMayoreo.find({ idUser: idUser });
    const items = itemsDetalle.concat(itemsMayoreo);
    for (let i = 0; i < items.length; i++) {
        if (items[i].sucursal === 'HNR036') {
            const ordenPedidoDetalle = new OrdenPedidoDetalle({
                idPedido: ordenPedidoInserted._id,
                direccionEnvio: lugarEnvio,
                cantidad: items[i].cantidadCarritoCompra,
                etiqueta: items[i].etiqueta,
                referencia: items[i].referencia,
                lote: items[i].lote,
                producto: items[i].producto,
                nombreProducto: items[i].nombreProducto,
                marca: items[i].marca,
                talla: items[i].talla,
                precioVenta: items[i].precioVenta,
                subtotal: items[i].precioVenta * items[i].cantidadCarritoCompra,
                categoriaProducto: items[i].categoriaProducto,
                nombreCategoriaProducto: items[i].nombreCategoriaProducto,
                subCategoriaProducto: items[i].subCategoriaProducto,
                nombreSubCategoriaProducto: items[i].nombreSubCategoriaProducto,
                tipoNivelProducto: items[i].tipoNivelProducto,
                nombreNivelTipoProducto: items[i].nombreNivelTipoProducto,
                sucursal: items[i].sucursal
            })
            await ordenPedidoDetalle.save();
            await Producto.updateOne({ referencia: items[i].referencia }, {
                estado: true
            });
            const itemsRemoveCarritoCompraDetalle = await CarritoCompraDetalle.find({ referencia: items[i].referencia });
            for (let j = 0; j < itemsRemoveCarritoCompraDetalle.length; j++) {
                if (itemsRemoveCarritoCompraDetalle[j].cantidadDisponible === 1) {
                    const userItem = itemsRemoveCarritoCompraDetalle[j].idUser;
                    const referenciaItem = itemsRemoveCarritoCompraDetalle[j].referencia;
                    const itemRemove = await CarritoCompraDetalle.findOne({ idUser: userItem, referencia: referenciaItem });
                    await CarritoCompraDetalle.remove({ _id: itemRemove._id });
                }
            }
        }
        if (items[i].sucursal === 'HNCD01') {
            const ordenPedidoMayoreo = new OrdenPedidoMayoreo({
                idPedido: ordenPedidoInserted._id,
                direccionEnvio: tienda,
                cantidad: items[i].cantidadCarritoCompra,
                producto: items[i].producto,
                nombreProducto: items[i].nombreProducto,
                precioVenta: items[i].precioVenta,
                subtotal: items[i].precioVenta * items[i].cantidadCarritoCompra,
                categoriaProducto: items[i].categoriaProducto,
                nombreCategoriaProducto: items[i].nombreCategoriaProducto,
                subCategoriaProducto: items[i].subCategoriaProducto,
                nombreSubCategoriaProducto: items[i].nombreSubCategoriaProducto,
                sucursal: items[i].sucursal
            })
            await ordenPedidoMayoreo.save();
            const itemsRemoveCarritoCompraMayoreo = await CarritoCompraMayoreo.find({ producto: items[i].producto })
            for (let j = 0; j < itemsRemoveCarritoCompraMayoreo.length; j++) {
                if (itemsRemoveCarritoCompraMayoreo[j].cantidadDisponible - items[i].cantidadCarritoCompra <= 0) {
                    const userItem = itemsRemoveCarritoCompraMayoreo[j].idUser;
                    const productoItem = itemsRemoveCarritoCompraMayoreo[j].producto;
                    const itemRemove = await CarritoCompraMayoreo.findOne({ idUser: userItem, producto: productoItem });
                    await CarritoCompraMayoreo.remove({ _id: itemRemove._id });
                } else {
                    const newQuantity = itemsRemoveCarritoCompraMayoreo[j].cantidadDisponible - items[i].cantidadCarritoCompra
                    const userItem = itemsRemoveCarritoCompraMayoreo[j].idUser;
                    const productoItem = itemsRemoveCarritoCompraMayoreo[j].producto;
                    await CarritoCompraMayoreo.updateOne({
                        $and: [
                            { producto: productoItem },
                            { idUser: userItem }
                        ]
                    }, {
                        cantidadDisponible: newQuantity
                    });
                    if (itemsRemoveCarritoCompraMayoreo[j].cantidadCarritoCompra > newQuantity) {
                        var newCantidadCarritoCompra = itemsRemoveCarritoCompraMayoreo[j].cantidadCarritoCompra
                        do {
                            newCantidadCarritoCompra = newCantidadCarritoCompra - 1
                        } while (newCantidadCarritoCompra > newQuantity); //Ejecuta hasta que se falsa
                        await CarritoCompraMayoreo.updateOne({
                            $and: [
                                { producto: productoItem },
                                { idUser: userItem }
                            ]
                        }, {
                            cantidadCarritoCompra: newCantidadCarritoCompra
                        });
                    }
                }
            }
        }
    }
    if (ordenPedidoInserted !== null) {
        cardPaymentEmail(user, orderPay, subtotalLempiras, costoEnvioLempiras, totalLempiras, numeroPedido, numeroReferencia, items, tazaCambio, fecha, tienda, metodoEnvio, lugarEnvio);
        notificationEmailCardPayment( 'zamir.uchida@gmail.com' ,user, orderPay, subtotalLempiras, costoEnvioLempiras, totalLempiras, numeroPedido, numeroReferencia, items, tazaCambio, fecha, tienda, metodoEnvio, lugarEnvio);
        res.json(true);
    } else {
        res.json(false);
    }
}

export async function depositPayment(req, res) {
    var lugarEnvio;
    const { idUser, orderPay, metodoEnvio, tienda, tazaCambio, subtotalLempiras, costoEnvioLempiras, totalLempiras, subtotal, costoEnvio, total } = req.body;
    const user = await User.findOne({ _id: idUser }, { contrasenia: 0 });
    if (metodoEnvio === 'tienda') {
        lugarEnvio = tienda;
    }
    if (metodoEnvio === 'casa') {
        const { direccionEnvio } = req.body;
        if (direccionEnvio === 'alterna') {
            const { departamentoAlterno, ciudadAlterna, direccionAlterna, numeroCasaAlterna, latitudAlter, longitudAlter } = req.body;
            lugarEnvio = departamentoAlterno + ', ' + ciudadAlterna + ', ' + direccionAlterna + ', Casa: ' + numeroCasaAlterna + `, Ubicación: https://www.google.com/maps/@${latitudAlter},${longitudAlter},17.25z`;
        } else {
            lugarEnvio = user.departamento + ', ' + user.ciudad + ', ' + user.direccion + ', Casa: ' + user.numeroCasa + `, Ubicación: https://www.google.com/maps/@${user.latitud},${user.longitud},17.25z`;
        }
    }
    var f = new Date();
    var d = f.getDate();
    var m = f.getMonth() + 1;
    var a = f.getFullYear();
    if (d < 10) {
        d = '0' + d;
    }
    if (m < 10) {
        m = '0' + m;
    }
    var fecha = d + "/" + m + "/" + a;
    const numeroPedido = Math.floor(Math.random() * (99999 - 10000) + 10000).toString();
    const numeroReferencia = a + "" + m + "" + d + Math.floor(Math.random() * (99999 - 1000) + 1000).toString();
    const ordenPedido = new OrdenPedido({
        fecha: new Date(),
        ordenPago :orderPay,
        numeroPedido,
        numeroReferencia,
        idUser,
        nombre: user.nombres + ' ' + user.apellidos,
        numeroIdentidad: user.numeroIdentidad,
        telefonoMovil: user.telefonoMovil,
        metodoPago: 'Depósito/Transferencia Bancaria',
        subtotal,
        costoEnvio,
        total,
        estadoPedido: false
    })
    await ordenPedido.save();
    const ordenPedidoInserted = await OrdenPedido.findOne({ numeroPedido: numeroPedido, numeroReferencia: numeroReferencia })

    if (metodoEnvio === 'casa') {
        const { direccionEnvio } = req.body;
        if (direccionEnvio === 'alterna') {
            const { latitudAlter, longitudAlter } = req.body;
            const coordenadaEnvio = new CoordenadasEnvio({
                idPedido: ordenPedidoInserted._id,
                latitud: latitudAlter,
                longitud: longitudAlter
            })
            await coordenadaEnvio.save();
        } else {
            const coordenadaEnvio = new CoordenadasEnvio({
                idPedido: ordenPedidoInserted._id,
                latitud: user.latitud,
                longitud: user.longitud
            })
            await coordenadaEnvio.save();
        }
    }

    const itemsDetalle = await CarritoCompraDetalle.find({ idUser: idUser });
    const itemsMayoreo = await CarritoCompraMayoreo.find({ idUser: idUser });
    const items = itemsDetalle.concat(itemsMayoreo);
    for (let i = 0; i < items.length; i++) {
        if (items[i].sucursal === 'HNR036') {
            const ordenPedidoDetalle = new OrdenPedidoDetalle({
                idPedido: ordenPedidoInserted._id,
                direccionEnvio: lugarEnvio,
                cantidad: items[i].cantidadCarritoCompra,
                etiqueta: items[i].etiqueta,
                referencia: items[i].referencia,
                lote: items[i].lote,
                producto: items[i].producto,
                nombreProducto: items[i].nombreProducto,
                marca: items[i].marca,
                talla: items[i].talla,
                precioVenta: items[i].precioVenta,
                subtotal: items[i].precioVenta * items[i].cantidadCarritoCompra,
                categoriaProducto: items[i].categoriaProducto,
                nombreCategoriaProducto: items[i].nombreCategoriaProducto,
                subCategoriaProducto: items[i].subCategoriaProducto,
                nombreSubCategoriaProducto: items[i].nombreSubCategoriaProducto,
                tipoNivelProducto: items[i].tipoNivelProducto,
                nombreNivelTipoProducto: items[i].nombreNivelTipoProducto,
                sucursal: items[i].sucursal
            })
            await ordenPedidoDetalle.save();
            await Producto.updateOne({ referencia: items[i].referencia }, {
                estado: true
            });
            const itemsRemoveCarritoCompraDetalle = await CarritoCompraDetalle.find({ referencia: items[i].referencia });
            for (let j = 0; j < itemsRemoveCarritoCompraDetalle.length; j++) {
                if (itemsRemoveCarritoCompraDetalle[j].cantidadDisponible === 1) {
                    const userItem = itemsRemoveCarritoCompraDetalle[j].idUser;
                    const referenciaItem = itemsRemoveCarritoCompraDetalle[j].referencia;
                    const itemRemove = await CarritoCompraDetalle.findOne({ idUser: userItem, referencia: referenciaItem });
                    await CarritoCompraDetalle.remove({ _id: itemRemove._id });
                }
            }
        }
        if (items[i].sucursal === 'HNCD01') {
            const ordenPedidoMayoreo = new OrdenPedidoMayoreo({
                idPedido: ordenPedidoInserted._id,
                direccionEnvio: tienda,
                cantidad: items[i].cantidadCarritoCompra,
                producto: items[i].producto,
                nombreProducto: items[i].nombreProducto,
                precioVenta: items[i].precioVenta,
                subtotal: items[i].precioVenta * items[i].cantidadCarritoCompra,
                categoriaProducto: items[i].categoriaProducto,
                nombreCategoriaProducto: items[i].nombreCategoriaProducto,
                subCategoriaProducto: items[i].subCategoriaProducto,
                nombreSubCategoriaProducto: items[i].nombreSubCategoriaProducto,
                sucursal: items[i].sucursal
            })
            await ordenPedidoMayoreo.save();
            const itemsRemoveCarritoCompraMayoreo = await CarritoCompraMayoreo.find({ producto: items[i].producto })
            for (let j = 0; j < itemsRemoveCarritoCompraMayoreo.length; j++) {
                if (itemsRemoveCarritoCompraMayoreo[j].cantidadDisponible - items[i].cantidadCarritoCompra <= 0) {
                    const userItem = itemsRemoveCarritoCompraMayoreo[j].idUser;
                    const productoItem = itemsRemoveCarritoCompraMayoreo[j].producto;
                    const itemRemove = await CarritoCompraMayoreo.findOne({ idUser: userItem, producto: productoItem });
                    await CarritoCompraMayoreo.remove({ _id: itemRemove._id });
                } else {
                    const newQuantity = itemsRemoveCarritoCompraMayoreo[j].cantidadDisponible - items[i].cantidadCarritoCompra
                    const userItem = itemsRemoveCarritoCompraMayoreo[j].idUser;
                    const productoItem = itemsRemoveCarritoCompraMayoreo[j].producto;
                    await CarritoCompraMayoreo.updateOne({
                        $and: [
                            { producto: productoItem },
                            { idUser: userItem }
                        ]
                    }, {
                        cantidadDisponible: newQuantity
                    });
                    if (itemsRemoveCarritoCompraMayoreo[j].cantidadCarritoCompra > newQuantity) {
                        var newCantidadCarritoCompra = itemsRemoveCarritoCompraMayoreo[j].cantidadCarritoCompra
                        do {
                            newCantidadCarritoCompra = newCantidadCarritoCompra - 1
                        } while (newCantidadCarritoCompra > newQuantity); //Ejecuta hasta que se falsa
                        await CarritoCompraMayoreo.updateOne({
                            $and: [
                                { producto: productoItem },
                                { idUser: userItem }
                            ]
                        }, {
                            cantidadCarritoCompra: newCantidadCarritoCompra
                        });
                    }
                }
            }
        }
    }
    if (ordenPedidoInserted !== null) {
        depositPaymentEmail(user, orderPay, subtotalLempiras, costoEnvioLempiras, totalLempiras, numeroPedido, numeroReferencia, items, tazaCambio, fecha, tienda, metodoEnvio, lugarEnvio);
        notificationEmailDepositPayment( 'zamir.uchida@gmail.com' ,user, orderPay, subtotalLempiras, costoEnvioLempiras, totalLempiras, numeroPedido, numeroReferencia, items, tazaCambio, fecha, tienda, metodoEnvio, lugarEnvio);
        res.json(true);
    } else {
        res.json(false);
    }
}

export async function pixelPay(req, res) {

    const key_id = process.env.PIXELPAY_KEY_ID
    res.json(key_id)
 
}

export function success(req, res){
    res.render('success')
}

export function cancel(req, res){
    res.render('cancel')
}
