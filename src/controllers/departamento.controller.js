import Departamento from '../models/Departamentos';
import Paises from '../models/Paises';

// Funcion para obtener departamentos
export async function getDepartamentos(req, res) {
    try {
        const departamentos = await Departamento.findAll({
            attributes: ['Departamento','Nombre', 'Pais'],
            raw: true,
            where: {
                Pais: '02'
            },
            include: [{
                attributes: ['Nombre'],
                raw: true,
                model: Paises,
                required: true
            }]
        });
        res.json({
            data: departamentos
        });
    } catch (error) {
        console.log(error);
    }
}