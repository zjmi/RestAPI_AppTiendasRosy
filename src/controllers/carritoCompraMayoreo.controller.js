const carritoCompraMayoreo = require('../models/CarritoCompraMayoreo');
const CarritoCompraMayoreo = require('../models/CarritoCompraMayoreo');

export async function addItemMayoreoCarritoCompra(req, res, next) {
    const { idUser, cantidadCarritoCompra, cantidadDisponible, producto, nombreProducto, precioVenta, categoriaProducto, nombreCategoriaProducto, subCategoriaProducto, nombreSubCategoriaProducto, grupoProducto, nombreGrupoProducto, sucursal } = req.body;
    const searchItem = await CarritoCompraMayoreo.findOne({
        $and: [
            {producto: producto},
            {idUser: idUser}
        ]});
    if(!searchItem){
        if (cantidadCarritoCompra <= cantidadDisponible) {
            const itemMayoreo = new carritoCompraMayoreo ({
                idUser, 
                cantidadCarritoCompra, 
                cantidadDisponible, 
                producto, 
                nombreProducto, 
                precioVenta, 
                categoriaProducto, 
                nombreCategoriaProducto, 
                subCategoriaProducto, 
                nombreSubCategoriaProducto, 
                grupoProducto, 
                nombreGrupoProducto,
                sucursal
            });
            await itemMayoreo.save();
            const itemInserted = await CarritoCompraMayoreo.findOne({
                $and: [
                    {producto: producto},
                    {idUser: idUser}
                ]
            });
            res.json(itemInserted);
        } else {
            res.json(false);
        }
    } else {
        const newCantidadCarritoCompra = searchItem.cantidadCarritoCompra + cantidadCarritoCompra;
        if(newCantidadCarritoCompra <= searchItem.cantidadDisponible){
            await CarritoCompraMayoreo.updateOne({
                $and: [
                    {producto: producto},
                    {idUser: idUser}
                ]
            }, {
                cantidadCarritoCompra: newCantidadCarritoCompra
            });
            const itemUpdate = await CarritoCompraMayoreo.findOne({
                $and: [
                    {producto: producto},
                    {idUser: idUser}
                ]
            });
            res.json(itemUpdate);
        } else {
            res.json(false);
        }
    }
}

export async function removeItemMayoreoCarritoCompra(req, res, next) {
    res.json('Remover')
}

export async function getItemsMayoreoCarritoCompra(req, res, next) {
    const { idUser } = req.body;
    const itemsMayoreo = await CarritoCompraMayoreo.find({idUser: idUser});
    res.json(itemsMayoreo);
}