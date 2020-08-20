import TipoNivelProducto from '../models/TipoNivelProductos';


export async function getTipoNivelProductos(req, res){
    try {
        const tipoNivelProductos = await TipoNivelProducto.findAll();
        res.json({
            data: tipoNivelProductos
        });
    } catch (error) {
        console.log(error)
    }
}