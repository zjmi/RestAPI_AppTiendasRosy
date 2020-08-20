import { paginatedResults } from '../middlewares/paginatedResults';

const CarritoCompraDetalle = require('../models/CarritoCompraDetalle');
const CarritoCompraMayoreo = require('../models/CarritoCompraMayoreo');

export async function getItemsCarritoCompra(req, res, next) {
    const { idUser } = req.body;
    const itemsDetalle = await CarritoCompraDetalle.find({idUser: idUser});
    const itemsMayoreo = await CarritoCompraMayoreo.find({idUser: idUser});
    const items = itemsDetalle.concat(itemsMayoreo);
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, items)
    });
}

export async function getListCarritoCompra(req, res, next) {
    const { idUser } = req.body;
    const itemsDetalle = await CarritoCompraDetalle.find({idUser: idUser});
    const itemsMayoreo = await CarritoCompraMayoreo.find({idUser: idUser});
    const items = itemsDetalle.concat(itemsMayoreo);
    res.json(items);
}

export async function getSubTotalCarritoCompra(req, res, next) {
    const { idUser, tazaCambio } = req.body;
    const itemsDetalle = await CarritoCompraDetalle.find({idUser: idUser});
    const itemsMayoreo = await CarritoCompraMayoreo.find({idUser: idUser});
    const items = itemsDetalle.concat(itemsMayoreo);
    let subTotalLempiras = 0;
    let subTotalDolar = 0;
    for (let i = 0; i < items.length; i++) {
        subTotalDolar = subTotalDolar + (items[i].precioVenta * items[i].cantidadCarritoCompra),
        subTotalLempiras = subTotalLempiras + Math.round(items[i].precioVenta * items[i].cantidadCarritoCompra * tazaCambio)
    }
    res.json({
        subTotalLempiras, 
        subTotalDolar
    });
}

export async function removeItemCarritoCompra(req, res, next) {
    const { id } = req.body;
    const itemCheckDetalle = await CarritoCompraDetalle.findOne({_id: id});
    const itemCheckMayoreo = await CarritoCompraMayoreo.findOne({_id: id});
    if(itemCheckDetalle !== null){
        await CarritoCompraDetalle.deleteOne({_id: id})
        res.json(true)
    }else{
        if (itemCheckMayoreo !== null) {
            await CarritoCompraMayoreo.deleteOne({_id: id})
            res.json(true)
        } else {
            res.json(false)
        }
    }
}

export async function clearCarritoCompra(req, res, next) {
    const { idUser } = req.body;
    await CarritoCompraDetalle.deleteMany({idUser: idUser})
    await CarritoCompraMayoreo.deleteMany({idUser: idUser})
    res.json(true)
}