const carritoCompraDetalle = require('../models/CarritoCompraDetalle');
const CarritoCompraDetalle = require('../models/CarritoCompraDetalle');

export async function addItemDetalleCarritoCompra(req, res, next) {
    const { idUser, cantidadCarritoCompra, cantidadDisponible, etiqueta, referencia, lote, producto, nombreProducto, marca, talla, precioVenta, categoriaProducto, nombreCategoriaProducto, subCategoriaProducto, nombreSubCategoriaProducto, tipoNivelProducto, nombreNivelTipoProducto, sucursal } = req.body;
    const searchItem = await CarritoCompraDetalle.findOne({
        $and: [
            {referencia: referencia},
            {idUser: idUser}
    ]});
    if (!searchItem) {
        if (cantidadCarritoCompra <= cantidadDisponible) {
            const itemDetalle = new carritoCompraDetalle({
                idUser, 
                cantidadCarritoCompra, 
                cantidadDisponible, 
                etiqueta, 
                referencia,
                lote, 
                producto, 
                nombreProducto, 
                marca,
                talla,
                precioVenta, 
                categoriaProducto, 
                nombreCategoriaProducto, 
                subCategoriaProducto, 
                nombreSubCategoriaProducto, 
                tipoNivelProducto, 
                nombreNivelTipoProducto,
                sucursal
            });
            await itemDetalle.save();
            const itemInserted = await CarritoCompraDetalle.findOne({
                $and: [
                    {referencia: referencia},
                    {idUser: idUser}
            ]
            });
            res.json(itemInserted);
        } else {
            res.json(false);
        }
    } else {
        const newCantidadCarritoCompra = searchItem.cantidadCarritoCompra + cantidadCarritoCompra;
        if (newCantidadCarritoCompra <= searchItem.cantidadDisponible) {
            await CarritoCompraDetalle.updateOne({
                $and: [
                    {referencia: referencia},
                    {idUser: idUser}
            ]
            }, {
                cantidadCarritoCompra: newCantidadCarritoCompra
            });
            const itemUpdate = await CarritoCompraDetalle.findOne({
                $and: [
                    {referencia: referencia},
                    {idUser: idUser}
            ]
            });
            res.json(itemUpdate);
        } else {
            res.json(false);
        }
    }
}

export async function removeItemDetalleCarritoCompra(req, res, next) {
    res.json('Remover')
}

export async function getItemsDetalleCarritoCompra(req, res, next) {
    const { idUser } = req.body;
    const itemsDetalle = await CarritoCompraDetalle.find({idUser: idUser});
    res.json(itemsDetalle);
}