const PortadaPicture = require('../models/PortadaPicture');
const CarruselPicture = require('../models/CarruselPicture');
const PictureProducto = require('../models/PictureProducto');
const Producto = require('../models/Producto');

export async function getPictures(req, res, next) {
    const { etiqueta } = req.body
    const portadaPicture = await PortadaPicture.findOne({ etiqueta: etiqueta });
    const carruselPicture = await CarruselPicture.find({ etiqueta: etiqueta });
    res.json({
        "portada": portadaPicture,
        "carrusel": carruselPicture
    });
}

export async function getPortadas(req, res, next) {
    const portadasPicture = await PictureProducto.find({ portada: true });
    res.json(portadasPicture);
}

export async function getPicturesItemsEtiqueta(req, res, next) {
    const { etiqueta } = req.body;
    var productoEstilos = [];
    const pictureStyles = await PictureProducto.find({ etiqueta: etiqueta, portada: true })
    for (var i = 0; i < pictureStyles.length; i++) {
        const producto = await Producto.findOne({ referencia: pictureStyles[i].referencia })
        if (!producto.estado) {
            productoEstilos.push(pictureStyles[i])
        }
    }
    res.json(productoEstilos);
}

export async function getPicturesByReferencia(req, res, next) {
    const { referencia } = req.body;
    const picturesItem = await PictureProducto.find({ referencia: referencia })
    res.json(picturesItem);
}