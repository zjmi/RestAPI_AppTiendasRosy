import Paises from '../models/Paises';
import Municipios from '../models/Municipios';
import Departamentos from '../models/Departamentos';
import { Op } from 'sequelize';

export async function getMunicipios(req, res) {
    const { departamento } = req.body;
    try {
        const municipios = await Municipios.findAll({
            attributes: ['Municipio', 'Nombre', 'Departamento'],
            raw: true,
            where: {
                [Op.and]: [{
                    '$TBLDepartamento.Pais$': '02'
                },{
                    Departamento: departamento
                }]
            },
            include: [{
                attributes: ['Nombre', 'Pais'],
                raw: true,
                model: Departamentos,
                required: true,
                include: [{
                    attributes: ['Nombre'],
                    raw: true,
                    model: Paises,
                    required: true, 
                }]
            }] 
        });
        res.json({
            data: municipios
        });
    } catch (error) {
        console.log(error);
    }
}