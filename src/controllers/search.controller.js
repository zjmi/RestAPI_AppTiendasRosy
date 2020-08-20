import InventarioEtiquetaProductoDetalles from '../models/InventarioEtiquetaProductoDetalles';
import InventarioEtiquetaProductoMayoreos from '../models/InventarioEtiquetaProductoMayoreos';
import EtiquetaProductoMayoreos from '../models/EtiquetaProductoMayoreos';
import EtiquetaProductoDetalles from '../models/EtiquetaProductoDetalles';
import Productos from '../models/Productos';
import GrupoProductos from '../models/GrupoProductos';
import CategoriaProductos from '../models/CategoriaProductos';
import SubCategoriaProductos from '../models/SubCategoriaProductos';
import ProductoPrecioVentas from '../models/ProductoPrecioVentas';
import Sequelize, { Op } from 'sequelize';
import TipoNivelProductos from '../models/TipoNivelProductos';
import { paginatedResults } from '../middlewares/paginatedResults';

export async function getSearch(req, res) {
    const { filtro } = req.params;
    try {

        /*------------------------------------Busqueda en el inventario de Detalle-------------------------------------------------*/
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                },{
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%'+filtro+'%'
                        }
                    },{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%'+filtro+'%'
                        }
                    },{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%'+filtro+'%'
                        }
                    }]
                }]
            },
            include: [{
                attributes: ['Lote'],
                raw: true,
                model: EtiquetaProductoDetalles,
                required: true,
                include: [{
                    attributes: ['Producto', 'Nombre'],
                    raw: true,
                    model: Productos,
                    required:true,
                    include: [{
                        attributes: [],
                        raw: true,
                        model: GrupoProductos,
                        required: true
                    },
                    {
                        attributes: ['CategoriaProducto', 'Nombre'],
                        raw: true,
                        model: CategoriaProductos,
                        required: true
                    },
                    {
                        attributes: ['SubCategoriaProducto', 'Nombre'],
                        raw: true,
                        model: SubCategoriaProductos,
                        required: true
                    },
                    {
                        attributes: ['TipoNivelProducto', 'Nombre'],
                        raw: true,
                        model: TipoNivelProductos,
                        required: true
                    },
                    {
                        attributes: ['PrecioVenta'],
                        raw: true,
                        model: ProductoPrecioVentas,
                        required: true
                    }]
                }]
            }]
        });

        /*------------------------------------Busqueda en el inventario de Mayoreo-------------------------------------------------*/
        const inventarioEtiquetaMayoreo = await InventarioEtiquetaProductoMayoreos.findAll({
            attributes: [[Sequelize.fn('count', Sequelize.col('TBLEtiquetaProductoMayoreo.Producto')), 'Cantidad'],
            'Sucursal'],
            group: ['TBLEtiquetaProductoMayoreo.Producto',
            'TBLEtiquetaProductoMayoreo.TBLProducto.Nombre',
            'TBLEtiquetaProductoMayoreo.TBLProducto.TBLProductoPrecioVenta.PrecioVenta',
            'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.GrupoProducto',
            'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.Nombre',
            'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.CategoriaProducto',
            'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre',
            'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto',
            'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.Nombre',
            'TBLEtiquetaProductoMayoreo.TBLProducto.ConteoPromedio',
            'Sucursal'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNCD01'
                },{
                    [Op.or]: [{
                        '$TBLEtiquetaProductoMayoreo.TBLProducto.Nombre$': {
                            [Op.like]: '%'+filtro+'%'
                        }
                    },{
                        '$TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%'+filtro+'%'
                        }
                    }]
                }]
            },
            include: [{
                raw: true,
                attributes: ['Producto'],
                model: EtiquetaProductoMayoreos,
                required: true,
                include: [{
                    raw: true,
                    attributes: ['Nombre', 'ConteoPromedio'],
                    model: Productos,
                    required: true,
                    include: [{
                        raw: true,
                        attributes: ['GrupoProducto', 'Nombre'],
                        model: GrupoProductos,
                        required: true
                    },
                    {
                        raw: true,
                        attributes: ['CategoriaProducto', 'Nombre'],
                        model: CategoriaProductos,
                        required: true
                    },
                    {
                        raw: true,
                        attributes: ['SubCategoriaProducto', 'Nombre'],
                        model: SubCategoriaProductos,
                        required: true
                    },
                    {
                        raw: true,
                        attributes: ['PrecioVenta'],
                        model: ProductoPrecioVentas,
                        required: true,
                        where: {
                            Precio: '1'
                        }
                    }]
                }]
            }]
        });
        
        //Concatenar en una sola lista los resultado obtenidos en la busqueda
        var resultado = inventarioEtiquetaProductoDetalles.concat(inventarioEtiquetaMayoreo)
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, resultado)
        });
    } catch (error) {
        console.log(error)
    }
}