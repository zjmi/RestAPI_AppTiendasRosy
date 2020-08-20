import Pais from '../models/Paises';
import Regiones from '../models/Regiones';

export async function getPaises(req, res){
    try {
        const paises = await Pais.findAll({
            include: [{
                model: Regiones,
                required: true
            }]
        });
        res.json({
            data: paises
        });
    } catch (error) {
        console.log(error);
    }
}