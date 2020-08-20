import tipoNivelProductoClase from '../models/TipoNivelProductosClases';
import Clases from '../models/Clases';
import TipoNivelProductos from '../models/TipoNivelProductos';

export async function getTipoNivelProductosClases(req, res){
    try {
        const tipoNivelProductosClases = await tipoNivelProductoClase.findAll({
            include: [{
                model: Clases,
                required: true
            },
            {
                model: TipoNivelProductos,
                required: true
            }
            ]
        });
        res.json({
            data: tipoNivelProductosClases
        });
    } catch (error) {
        console.log(error)
    }
}