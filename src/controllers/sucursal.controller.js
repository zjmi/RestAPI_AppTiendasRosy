import Sucursal from '../models/Sucursales';


export async function getSucursales(req, res){
    try {
        const Sucursales = await Sucursal.findAll();
        res.json({
            data: Sucursales
        });
    } catch (error) {
        console.log(error)
    }
}