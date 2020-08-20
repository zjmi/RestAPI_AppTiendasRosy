import Region from '../models/Regiones';

export async function getRegiones(req, res){
    try {
        const regiones = await Region.findAll();
        res.json({
            data: regiones
        });
    } catch (error) {
        console.log(error);
    }
}