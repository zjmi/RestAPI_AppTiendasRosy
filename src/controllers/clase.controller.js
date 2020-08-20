import Clase from '../models/Clases';


export async function getClases(req, res){
    try {
        const clases = await Clase.findAll();
        res.json({
            data: clases
        });
    } catch (error) {
        console.log(error)
    }
}