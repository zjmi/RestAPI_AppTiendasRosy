import InventarioEtiquetaProductoMayoreos from '../models/InventarioEtiquetaProductoMayoreos';
import EtiquetaProductoMayoreos from '../models/EtiquetaProductoMayoreos';
import Productos from '../models/Productos';
import GrupoProductos from '../models/GrupoProductos';
import CategoriaProductos from '../models/CategoriaProductos';
import SubCategoriaProductos from '../models/SubCategoriaProductos';
import ProductoPrecioVentas from '../models/ProductoPrecioVentas';
import { Sequelize, Op } from 'sequelize';
import { paginatedResults } from '../middlewares/paginatedResults';

/*-------------------------------------------------------Mayoreo Economico--------------------------------------------------------------------*/

//Ruta para obtener todas las CategoriaProductos de mayoreo con la SubCategoriaProducto 02 (Economico)
export async function getCategoriaProductosEconomico(req, res){
    try {
        const categoriaProductosEconomico = await InventarioEtiquetaProductoMayoreos.findAll({
            attributes: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', [Sequelize.fn('count', Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto')), 'Cantidad']],
            group: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre'], 
            raw: true,
            where: {
                [Op.and]: [{
                    '$TBLEtiquetaProductoMayoreo.TBLProducto.SubCategoriaProducto$': '02'
                },
                {
                    Sucursal: 'HNCD01'
                }]
            },
            include: [{
                attributes: [],
                model: EtiquetaProductoMayoreos,
                required: true,
                include: [{
                    attributes: [],
                    model: Productos,
                    required: true,
                    include: [{
                        attributes: [],
                        model: GrupoProductos,
                        required: true
                    },
                    {
                        attributes: [],
                        model: CategoriaProductos,
                        required: true
                    },
                    {
                        attributes: [],
                        model: SubCategoriaProductos,
                        required: true
                    },
                    {
                        attributes: [],
                        model: ProductoPrecioVentas,
                        required: true,
                        where: {
                            Precio: '1'
                        }
                    }]
                }]
            }]
        });
        res.json({
            data: categoriaProductosEconomico
        });
    } catch (error) {
        console.log(error)
    }
}

//Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 02 (Economico)
export async function getInventarioEtiquetaMayoreoEconomico(req, res){
    try {
        const inventarioEtiquetaMayoreoEconomico = await InventarioEtiquetaProductoMayoreos.findAll({
            attributes: [[Sequelize.fn('count', Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.Producto')), 'Cantidad'],
            'Sucursal'],
            group: ['TBLEtiquetaProductoMayoreo.Producto',
            'TBLEtiquetaProductoMayoreo.TBLProducto.Producto',
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
                Sucursal: 'HNCD01'
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
                        required: true,
                        where: {
                            SubCategoriaProducto: '02'
                        }
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
      
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaMayoreoEconomico)
        });
    } catch (error) {
        console.log(error)
    }
}

//Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 02 (Economico), filtrados por el campo CategoriaProducto
export async function getInventarioEtiquetaMayoreoEconomicoByCategoriaProducto(req, res){
    const { CategoriaProducto } = req.params;
    try {
        const inventarioEtiquetaMayoreoEconomico = await InventarioEtiquetaProductoMayoreos.findAll({
            where: {
                Sucursal: 'HNCD01'
            },
            include: [{
                model: EtiquetaProductoMayoreos,
                required: true,
                include: [{
                    model: Productos,
                    required: true,
                    include: [{
                        model: GrupoProductos,
                        required: true
                    },
                    {
                        model: CategoriaProductos,
                        required: true,
                        where: {
                            CategoriaProducto
                        }
                    },
                    {
                        model: SubCategoriaProductos,
                        required: true,
                        where: {
                            SubCategoriaProducto: '02'
                        }
                    },
                    {
                        model: ProductoPrecioVentas,
                        required: true,
                        where: {
                            Precio: '1'
                        }
                    }]
                }]
            }]
        });
        res.json({
            data: inventarioEtiquetaMayoreoEconomico
        });
    } catch (error) {
        console.log(error)
    }
}

/*-------------------------------------------------------Mayoreo Regular----------------------------------------------------------------*/

//Ruta para obtener todas las CategoriaProductos de mayoreo con la SubCategoriaProducto 06 (Regular)
export async function getCategoriaProductosRegular(req, res){
    try {
        const categoriaProductosRegular = await InventarioEtiquetaProductoMayoreos.findAll({
            attributes: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', [Sequelize.fn('count', Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto')), 'Cantidad']],
            group: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre'], 
            raw: true,
            where: {
                [Op.and]: [{
                    '$TBLEtiquetaProductoMayoreo.TBLProducto.SubCategoriaProducto$': '06'
                },
                {
                    Sucursal: 'HNCD01'
                }]
            },
            include: [{
                attributes: [],
                model: EtiquetaProductoMayoreos,
                required: true,
                include: [{
                    attributes: [],
                    model: Productos,
                    required: true,
                    include: [{
                        attributes: [],
                        model: GrupoProductos,
                        required: true
                    },
                    {
                        attributes: [],
                        model: CategoriaProductos,
                        required: true
                    },
                    {
                        attributes: [],
                        model: SubCategoriaProductos,
                        required: true
                    },
                    {
                        attributes: [],
                        model: ProductoPrecioVentas,
                        required: true,
                        where: {
                            Precio: '1'
                        }
                    }]
                }]
            }]
        });
        res.json({
            data: categoriaProductosRegular
        });
    } catch (error) {
        console.log(error)
    }
}

//Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 06 (Regular)
export async function getInventarioEtiquetaMayoreoRegular(req, res){
    try {
        const inventarioEtiquetaMayoreoRegular = await InventarioEtiquetaProductoMayoreos.findAll({
            attributes: [[Sequelize.fn('count', Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.Producto')), 'Cantidad'],
            'Sucursal'],
            group: ['TBLEtiquetaProductoMayoreo.Producto',
            'TBLEtiquetaProductoMayoreo.TBLProducto.Producto',
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
                Sucursal: 'HNCD01'
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
                        required: true,
                        where: {
                            SubCategoriaProducto: '06'
                        }
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
      
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaMayoreoRegular)
        });
    } catch (error) {
        console.log(error)
    }
}

//Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 06 (Regular), filtrados por el campo CategoriaProducto
export async function getInventarioEtiquetaMayoreoRegularByCategoriaProducto(req, res){
    const { CategoriaProducto } = req.params;
    try {
        const inventarioEtiquetaMayoreoRegular = await InventarioEtiquetaProductoMayoreos.findAll({
            where: {
                Sucursal: 'HNCD01'
            },
            include: [{
                model: EtiquetaProductoMayoreos,
                required: true,
                include: [{
                    model: Productos,
                    required: true,
                    include: [{
                        model: GrupoProductos,
                        required: true
                    },
                    {
                        model: CategoriaProductos,
                        required: true,
                        where: {
                            CategoriaProducto
                        }
                    },
                    {
                        model: SubCategoriaProductos,
                        required: true,
                        where: {
                            SubCategoriaProducto: '06'
                        }
                    },
                    {
                        model: ProductoPrecioVentas,
                        required: true,
                        where: {
                            Precio: '1'
                        }
                    }]
                }]
            }]
        });
        res.json({
            data: inventarioEtiquetaMayoreoRegular
        });
    } catch (error) {
        console.log(error)
    }
}

/*-------------------------------------------------------Mayoreo Premiun----------------------------------------------------------------*/

//Ruta para obtener todas las CategoriaProductos de mayoreo con la SubCategoriaProducto 05 (Premiun)
export async function getCategoriaProductosPremiun(req, res){
    try {
        const categoriaProductosPremiun = await InventarioEtiquetaProductoMayoreos.findAll({
            attributes: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', [Sequelize.fn('count', Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto')), 'Cantidad']],
            group: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre'], 
            raw: true,
            where: {
                [Op.and]: [{
                    '$TBLEtiquetaProductoMayoreo.TBLProducto.SubCategoriaProducto$': '05'
                },
                {
                    Sucursal: 'HNCD01'
                }]
            },
            include: [{
                attributes: [],
                model: EtiquetaProductoMayoreos,
                required: true,
                include: [{
                    attributes: [],
                    model: Productos,
                    required: true,
                    include: [{
                        attributes: [],
                        model: GrupoProductos,
                        required: true
                    },
                    {
                        attributes: [],
                        model: CategoriaProductos,
                        required: true
                    },
                    {
                        attributes: [],
                        model: SubCategoriaProductos,
                        required: true
                    },
                    {
                        attributes: [],
                        model: ProductoPrecioVentas,
                        required: true,
                        where: {
                            Precio: '1'
                        }
                    }]
                }]
            }]
        });
        res.json({
            data: categoriaProductosPremiun
        });
    } catch (error) {
        console.log(error)
    }
}

//Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 05 (Premiun)
export async function getInventarioEtiquetaMayoreoPremiun(req, res){
    try {
        const inventarioEtiquetaMayoreoPremiun = await InventarioEtiquetaProductoMayoreos.findAll({
            attributes: [[Sequelize.fn('count', Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.Producto')), 'Cantidad'],
            'Sucursal'],
            group: ['TBLEtiquetaProductoMayoreo.Producto',
            'TBLEtiquetaProductoMayoreo.TBLProducto.Producto',
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
                Sucursal: 'HNCD01'
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
                        required: true,
                        where: {
                            SubCategoriaProducto: '05'
                        }
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
      
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaMayoreoPremiun)
        });
    } catch (error) {
        console.log(error)
    }
}

//Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 05 (Premiun), filtrados por el campo CategoriaProducto
export async function getInventarioEtiquetaMayoreoPremiunByCategoriaProducto(req, res){
    const { CategoriaProducto } = req.params;
    try {
        const inventarioEtiquetaMayoreoPremiun = await InventarioEtiquetaProductoMayoreos.findAll({
            where: {
                Sucursal: 'HNCD01'
            },
            include: [{
                model: EtiquetaProductoMayoreos,
                required: true,
                include: [{
                    model: Productos,
                    required: true,
                    include: [{
                        model: GrupoProductos,
                        required: true
                    },
                    {
                        model: CategoriaProductos,
                        required: true,
                        where: {
                            CategoriaProducto
                        }
                    },
                    {
                        model: SubCategoriaProductos,
                        required: true,
                        where: {
                            SubCategoriaProducto: '05'
                        }
                    },
                    {
                        model: ProductoPrecioVentas,
                        required: true,
                        where: {
                            Precio: '1'
                        }
                    }]
                }]
            }]
        });
        res.json({
            data: inventarioEtiquetaMayoreoPremiun
        });
    } catch (error) {
        console.log(error)
    }
}

/*-------------------------------------------------------Mayoreo Platinum----------------------------------------------------------------*/

//Ruta para obtener todas las CategoriaProductos de mayoreo con la SubCategoriaProducto 04 (Platinum)
export async function getCategoriaProductosPlatinum(req, res){
    try {
        const categoriaProductosPlatinum = await InventarioEtiquetaProductoMayoreos.findAll({
            attributes: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', [Sequelize.fn('count', Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto')), 'Cantidad']],
            group: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre'], 
            raw: true,
            where: {
                [Op.and]: [{
                    '$TBLEtiquetaProductoMayoreo.TBLProducto.SubCategoriaProducto$': '04'
                },
                {
                    Sucursal: 'HNCD01'
                }]
            },
            include: [{
                attributes: [],
                model: EtiquetaProductoMayoreos,
                required: true,
                include: [{
                    attributes: [],
                    model: Productos,
                    required: true,
                    include: [{
                        attributes: [],
                        model: GrupoProductos,
                        required: true
                    },
                    {
                        attributes: [],
                        model: CategoriaProductos,
                        required: true
                    },
                    {
                        attributes: [],
                        model: SubCategoriaProductos,
                        required: true
                    },
                    {
                        attributes: [],
                        model: ProductoPrecioVentas,
                        required: true,
                        where: {
                            Precio: '1'
                        }
                    }]
                }]
            }]
        });
        res.json({
            data: categoriaProductosPlatinum
        });
    } catch (error) {
        console.log(error)
    }
}

//Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 04 (Platinum)
export async function getInventarioEtiquetaMayoreoPlatinum(req, res){
    try {
        const inventarioEtiquetaMayoreoPlatinum = await InventarioEtiquetaProductoMayoreos.findAll({
            attributes: [[Sequelize.fn('count', Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.Producto')), 'Cantidad'],
            'Sucursal'],
            group: ['TBLEtiquetaProductoMayoreo.Producto',
            'TBLEtiquetaProductoMayoreo.TBLProducto.Producto',
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
                Sucursal: 'HNCD01'
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
                        required: true,
                        where: {
                            SubCategoriaProducto: '04'
                        }
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
      
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaMayoreoPlatinum)
        });
    } catch (error) {
        console.log(error)
    }
}

//Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 04 (Platinum), filtrados por el campo CategoriaProducto
export async function getInventarioEtiquetaMayoreoPlatinumByCategoriaProducto(req, res){
    const { CategoriaProducto } = req.params;
    try {
        const inventarioEtiquetaMayoreoPlatinum = await InventarioEtiquetaProductoMayoreos.findAll({
            where: {
                Sucursal: 'HNCD01'
            },
            include: [{
                model: EtiquetaProductoMayoreos,
                required: true,
                include: [{
                    model: Productos,
                    required: true,
                    include: [{
                        model: GrupoProductos,
                        required: true
                    },
                    {
                        model: CategoriaProductos,
                        required: true,
                        where: {
                            CategoriaProducto
                        }
                    },
                    {
                        model: SubCategoriaProductos,
                        required: true,
                        where: {
                            SubCategoriaProducto: '04'
                        }
                    },
                    {
                        model: ProductoPrecioVentas,
                        required: true,
                        where: {
                            Precio: '1'
                        }
                    }]
                }]
            }]
        });
        res.json({
            data: inventarioEtiquetaMayoreoPlatinum
        });
    } catch (error) {
        console.log(error)
    }
}

/*-------------------------------------------------------Busqueda----------------------------------------------------------------*/
//Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 04 (Platinum)
export async function getSearchMayoreo(req, res){
    const { filtro } = req.params;
    try {
        const inventarioEtiquetaMayoreo = await InventarioEtiquetaProductoMayoreos.findAll({
            attributes: [[Sequelize.fn('count', Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.Producto')), 'Cantidad'],
            'Sucursal'],
            group: ['TBLEtiquetaProductoMayoreo.Producto',
            'TBLEtiquetaProductoMayoreo.TBLProducto.Producto',
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
      
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaMayoreo)
        });
    } catch (error) {
        console.log(error)
    }
}