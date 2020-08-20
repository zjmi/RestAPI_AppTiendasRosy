import InventarioEtiquetaProductoDetalles from '../models/InventarioEtiquetaProductoDetalles';
import EtiquetaProductoDetalles from '../models/EtiquetaProductoDetalles';
import Productos from '../models/Productos';
import GrupoProductos from '../models/GrupoProductos';
import CategoriaProductos from '../models/CategoriaProductos';
import SubCategoriaProductos from '../models/SubCategoriaProductos';
import ProductoPrecioVentas from '../models/ProductoPrecioVentas';
import { Op } from 'sequelize';
import { sequelize } from '../database/database';
import Sequelize from 'sequelize';
import TipoNivelProductos from '../models/TipoNivelProductos';
import { paginatedResults } from '../middlewares/paginatedResults';

/*---------------------------------------------Inventario Rosy Online---------------------------------------------------------------*/

//Ruta para obtener todo el inventario de Rosy Online
export async function getAllInventario(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            where: {
                Sucursal: 'HNR036'
            },
            include: [{
                model: EtiquetaProductoDetalles,
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
                        required: true
                    },
                    {
                        model: SubCategoriaProductos,
                        required: true
                    },
                    {
                        model: ProductoPrecioVentas,
                        required: true
                    }]
                }]
            }]
        });
        res.json({
            data: inventarioEtiquetaProductoDetalles
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario Mas Reciente en Rosy Online
export async function getRopaInventarioReciente(req, res) {
    try {
        const queryInventarioEtiquetaProductoDetalleReciente =
            "SELECT InventarioEtiquetaProductoDetalles.Etiqueta " +
            ",EtiquetaProductoDetalles.Lote " +
            ",EtiquetaProductoDetalles.Producto " +
            ",EtiquetaProductoDetalles.PrecioVenta " +
            ",EtiquetaProductoDetalles.NombreProductos " +
            ",EtiquetaProductoDetalles.CategoriaProducto " +
            ",EtiquetaProductoDetalles.NombreCategoriaProductos " +
            ",EtiquetaProductoDetalles.SubCategoriaProducto " +
            ",EtiquetaProductoDetalles.NombreSubCategoriaProductos " +
            ",EtiquetaProductoDetalles.TipoNivelProducto " +
            ",EtiquetaProductoDetalles.NombreTipoNivelProductos " +
            ",InventarioEtiquetaProductoDetalles.Sucursal " +
            ",InventarioEtiquetaProductoDetalles.Cantidad " +
            ",InventarioEtiquetaProductoDetalles.Fposteo " +
            "FROM TBLInventarioEtiquetaProductoDetalles AS InventarioEtiquetaProductoDetalles " +
            "INNER JOIN ( " +
            "/*INNER JOIN TBLEtiquetaProductoDetalles con Productos*/ " +
            "SELECT EtiquetaProductoDetalles.Etiqueta " +
            ",EtiquetaProductoDetalles.Fecha " +
            ",EtiquetaProductoDetalles.Lote " +
            ",EtiquetaProductoDetalles.Producto " +
            ",Productos.Activo " +
            ",Productos.TipoProducto " +
            ",Productos.Precio " +
            ",Productos.PrecioVenta " +
            ",Productos.ExcluirPedirAutorizacion " +
            ",Productos.NombreProductos " +
            ",Productos.GrupoProducto " +
            ",Productos.NombreGrupoProductos " +
            ",Productos.CategoriaProducto " +
            ",Productos.NombreCategoriaProductos " +
            ",Productos.SubCategoriaProducto " +
            ",Productos.NombreSubCategoriaProductos " +
            ",Productos.Proveedor " +
            ",Productos.TipoNivelProducto " +
            ",Productos.NombreTipoNivelProductos " +
            ",Productos.Costo " +
            ",Productos.TipoCostoIC " +
            ",Productos.ValorCostoIC " +
            ",Productos.Empresa AS EmpresaProductos " +
            ",Productos.UPosteo AS UPosteoProductos " +
            ",Productos.Fposteo AS FposteoProductos " +
            ",Productos.PC AS PCProductos " +
            ",Productos.TotalCostoIC " +
            ",Productos.DefinirPeso " +
            ",Productos.LimitePiezaReclasificacion " +
            ",Productos.ExcluirCostoFleteProductoMayoreo " +
            ",Productos.UltimoFactorDolar " +
            ",Productos.CodigoBarraAlterno " +
            ",Productos.PImpuesto " +
            ",Productos.PExcluirInventario " +
            ",Productos.Codigo " +
            ",Productos.ConteoPromedio " +
            ",Productos.CostoPromedio " +
            ",Productos.PrecioPromedio " +
            ",Productos.CostoPromedioProducto " +
            ",Productos.CostoPromedioProductoFiscal " +
            ",Productos.ClaseProducto " +
            ",Productos.SubCategoriaProducto2 " +
            ",EtiquetaProductoDetalles.Empresa AS EmpresaEtiquetaProductoDetalles " +
            ",EtiquetaProductoDetalles.UPosteo AS UPosteoEtiquetaProductoDetalles " +
            ",EtiquetaProductoDetalles.Fposteo AS FposteoEtiquetaProductoDetalles " +
            ",EtiquetaProductoDetalles.PC AS PCEtiquetaProductoDetalles " +
            "FROM TBLEtiquetaProductoDetalles AS EtiquetaProductoDetalles " +
            "INNER JOIN ( " +
            "/*INNER JOIN TBLProductos con las tablas TBLGrupoProductos, TBLCategoriaProductos, TBLSubCategoriaProductos, TBLTipoNivelProductos, TBLProductoPrecioVentas*/ " +
            "SELECT Productos.Activo " +
            ",Productos.TipoProducto " +
            ",Productos.Producto " +
            ",ProductoPrecioVentas.Precio " +
            ",ProductoPrecioVentas.PrecioVenta " +
            ",ProductoPrecioVentas.ExcluirPedirAutorizacion " +
            ",Productos.Nombre AS NombreProductos " +
            ",Productos.GrupoProducto " +
            ",GrupoProductos.Nombre AS NombreGrupoProductos " +
            ",Productos.CategoriaProducto " +
            ",CategoriaProductos.Nombre AS NombreCategoriaProductos " +
            ",Productos.SubCategoriaProducto " +
            ",SubCategoriaProductos.Nombre AS NombreSubCategoriaProductos " +
            ",Productos.Proveedor " +
            ",Productos.TipoNivelProducto " +
            ",TipoNivelProductos.Nombre AS NombreTipoNivelProductos " +
            ",Productos.Costo " +
            ",Productos.TipoCostoIC " +
            ",Productos.ValorCostoIC " +
            ",Productos.Empresa " +
            ",Productos.UPosteo " +
            ",Productos.Fposteo " +
            ",Productos.PC " +
            ",Productos.TotalCostoIC " +
            ",Productos.DefinirPeso " +
            ",Productos.LimitePiezaReclasificacion " +
            ",Productos.ExcluirCostoFleteProductoMayoreo " +
            ",Productos.UltimoFactorDolar " +
            ",Productos.CodigoBarraAlterno " +
            ",Productos.PImpuesto " +
            ",Productos.PExcluirInventario " +
            ",Productos.Codigo " +
            ",Productos.ConteoPromedio " +
            ",Productos.CostoPromedio " +
            ",Productos.PrecioPromedio " +
            ",Productos.CostoPromedioProducto " +
            ",Productos.CostoPromedioProductoFiscal " +
            ",Productos.ClaseProducto " +
            ",Productos.SubCategoriaProducto2 " +
            "FROM TBLProductos AS Productos " +
            "INNER JOIN TBLGrupoProductos AS GrupoProductos " +
            "ON Productos.GrupoProducto = GrupoProductos.GrupoProducto " +
            "INNER JOIN TBLCategoriaProductos AS CategoriaProductos " +
            "ON Productos.CategoriaProducto = CategoriaProductos.CategoriaProducto " +
            "INNER JOIN TBLSubCategoriaProductos AS SubCategoriaProductos " +
            "ON Productos.SubCategoriaProducto = SubCategoriaProductos.SubCategoriaProducto " +
            "INNER JOIN TBLTipoNivelProductos AS TipoNivelProductos " +
            "ON Productos.TipoNivelProducto = TipoNivelProductos.TipoNivelProducto " +
            "INNER JOIN TBLProductoPrecioVentas AS ProductoPrecioVentas " +
            "ON Productos.Producto = ProductoPrecioVentas.Producto " +
            ") AS Productos " +
            "ON EtiquetaProductoDetalles.Producto = Productos.Producto " +
            ") AS EtiquetaProductoDetalles " +
            "ON InventarioEtiquetaProductoDetalles.Etiqueta = EtiquetaProductoDetalles.Etiqueta " +
            "WHERE InventarioEtiquetaProductoDetalles.Sucursal = 'HNR036' AND (InventarioEtiquetaProductoDetalles.Fposteo BETWEEN DATEADD(M,-1,GETDATE()) AND GETDATE()) " +
            "ORDER BY InventarioEtiquetaProductoDetalles.Fposteo DESC";
        const inventarioEtiquetaProductoDetalleReciente = await sequelize.query(queryInventarioEtiquetaProductoDetalleReciente, {
            plain: false,
            raw: false,
            type: Sequelize.QueryTypes.SELECT
        });
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalleReciente)
        });
    } catch (error) {
        console.log(error);
    }
}

//Obtener de manera aleatoria los primeros 10 items del inventario Mas Reciente en Rosy Online
export async function getRandomTenItemsRopaInventarioReciente(req, res) {
    try {
        const queryInventarioEtiquetaProductoDetalleReciente =
            "SELECT TOP 10 InventarioEtiquetaProductoDetalles.Etiqueta " +
            ",EtiquetaProductoDetalles.Lote " +
            ",EtiquetaProductoDetalles.Producto " +
            ",EtiquetaProductoDetalles.PrecioVenta " +
            ",EtiquetaProductoDetalles.NombreProductos " +
            ",EtiquetaProductoDetalles.CategoriaProducto " +
            ",EtiquetaProductoDetalles.NombreCategoriaProductos " +
            ",EtiquetaProductoDetalles.SubCategoriaProducto " +
            ",EtiquetaProductoDetalles.NombreSubCategoriaProductos " +
            ",EtiquetaProductoDetalles.TipoNivelProducto " +
            ",EtiquetaProductoDetalles.NombreTipoNivelProductos " +
            ",InventarioEtiquetaProductoDetalles.Sucursal " +
            ",InventarioEtiquetaProductoDetalles.Cantidad " +
            ",InventarioEtiquetaProductoDetalles.Fposteo " +
            "FROM TBLInventarioEtiquetaProductoDetalles AS InventarioEtiquetaProductoDetalles " +
            "INNER JOIN ( " +
            "/*INNER JOIN TBLEtiquetaProductoDetalles con Productos*/ " +
            "SELECT EtiquetaProductoDetalles.Etiqueta " +
            ",EtiquetaProductoDetalles.Fecha " +
            ",EtiquetaProductoDetalles.Lote " +
            ",EtiquetaProductoDetalles.Producto " +
            ",Productos.Activo " +
            ",Productos.TipoProducto " +
            ",Productos.Precio " +
            ",Productos.PrecioVenta " +
            ",Productos.ExcluirPedirAutorizacion " +
            ",Productos.NombreProductos " +
            ",Productos.GrupoProducto " +
            ",Productos.NombreGrupoProductos " +
            ",Productos.CategoriaProducto " +
            ",Productos.NombreCategoriaProductos " +
            ",Productos.SubCategoriaProducto " +
            ",Productos.NombreSubCategoriaProductos " +
            ",Productos.Proveedor " +
            ",Productos.TipoNivelProducto " +
            ",Productos.NombreTipoNivelProductos " +
            ",Productos.Costo " +
            ",Productos.TipoCostoIC " +
            ",Productos.ValorCostoIC " +
            ",Productos.Empresa AS EmpresaProductos " +
            ",Productos.UPosteo AS UPosteoProductos " +
            ",Productos.Fposteo AS FposteoProductos " +
            ",Productos.PC AS PCProductos " +
            ",Productos.TotalCostoIC " +
            ",Productos.DefinirPeso " +
            ",Productos.LimitePiezaReclasificacion " +
            ",Productos.ExcluirCostoFleteProductoMayoreo " +
            ",Productos.UltimoFactorDolar " +
            ",Productos.CodigoBarraAlterno " +
            ",Productos.PImpuesto " +
            ",Productos.PExcluirInventario " +
            ",Productos.Codigo " +
            ",Productos.ConteoPromedio " +
            ",Productos.CostoPromedio " +
            ",Productos.PrecioPromedio " +
            ",Productos.CostoPromedioProducto " +
            ",Productos.CostoPromedioProductoFiscal " +
            ",Productos.ClaseProducto " +
            ",Productos.SubCategoriaProducto2 " +
            ",EtiquetaProductoDetalles.Empresa AS EmpresaEtiquetaProductoDetalles " +
            ",EtiquetaProductoDetalles.UPosteo AS UPosteoEtiquetaProductoDetalles " +
            ",EtiquetaProductoDetalles.Fposteo AS FposteoEtiquetaProductoDetalles " +
            ",EtiquetaProductoDetalles.PC AS PCEtiquetaProductoDetalles " +
            "FROM TBLEtiquetaProductoDetalles AS EtiquetaProductoDetalles " +
            "INNER JOIN ( " +
            "/*INNER JOIN TBLProductos con las tablas TBLGrupoProductos, TBLCategoriaProductos, TBLSubCategoriaProductos, TBLTipoNivelProductos, TBLProductoPrecioVentas*/ " +
            "SELECT Productos.Activo " +
            ",Productos.TipoProducto " +
            ",Productos.Producto " +
            ",ProductoPrecioVentas.Precio " +
            ",ProductoPrecioVentas.PrecioVenta " +
            ",ProductoPrecioVentas.ExcluirPedirAutorizacion " +
            ",Productos.Nombre AS NombreProductos " +
            ",Productos.GrupoProducto " +
            ",GrupoProductos.Nombre AS NombreGrupoProductos " +
            ",Productos.CategoriaProducto " +
            ",CategoriaProductos.Nombre AS NombreCategoriaProductos " +
            ",Productos.SubCategoriaProducto " +
            ",SubCategoriaProductos.Nombre AS NombreSubCategoriaProductos " +
            ",Productos.Proveedor " +
            ",Productos.TipoNivelProducto " +
            ",TipoNivelProductos.Nombre AS NombreTipoNivelProductos " +
            ",Productos.Costo " +
            ",Productos.TipoCostoIC " +
            ",Productos.ValorCostoIC " +
            ",Productos.Empresa " +
            ",Productos.UPosteo " +
            ",Productos.Fposteo " +
            ",Productos.PC " +
            ",Productos.TotalCostoIC " +
            ",Productos.DefinirPeso " +
            ",Productos.LimitePiezaReclasificacion " +
            ",Productos.ExcluirCostoFleteProductoMayoreo " +
            ",Productos.UltimoFactorDolar " +
            ",Productos.CodigoBarraAlterno " +
            ",Productos.PImpuesto " +
            ",Productos.PExcluirInventario " +
            ",Productos.Codigo " +
            ",Productos.ConteoPromedio " +
            ",Productos.CostoPromedio " +
            ",Productos.PrecioPromedio " +
            ",Productos.CostoPromedioProducto " +
            ",Productos.CostoPromedioProductoFiscal " +
            ",Productos.ClaseProducto " +
            ",Productos.SubCategoriaProducto2 " +
            "FROM TBLProductos AS Productos " +
            "INNER JOIN TBLGrupoProductos AS GrupoProductos " +
            "ON Productos.GrupoProducto = GrupoProductos.GrupoProducto " +
            "INNER JOIN TBLCategoriaProductos AS CategoriaProductos " +
            "ON Productos.CategoriaProducto = CategoriaProductos.CategoriaProducto " +
            "INNER JOIN TBLSubCategoriaProductos AS SubCategoriaProductos " +
            "ON Productos.SubCategoriaProducto = SubCategoriaProductos.SubCategoriaProducto " +
            "INNER JOIN TBLTipoNivelProductos AS TipoNivelProductos " +
            "ON Productos.TipoNivelProducto = TipoNivelProductos.TipoNivelProducto " +
            "INNER JOIN TBLProductoPrecioVentas AS ProductoPrecioVentas " +
            "ON Productos.Producto = ProductoPrecioVentas.Producto " +
            ") AS Productos " +
            "ON EtiquetaProductoDetalles.Producto = Productos.Producto " +
            ") AS EtiquetaProductoDetalles " +
            "ON InventarioEtiquetaProductoDetalles.Etiqueta = EtiquetaProductoDetalles.Etiqueta " +
            "WHERE InventarioEtiquetaProductoDetalles.Sucursal = 'HNR036' AND (InventarioEtiquetaProductoDetalles.Fposteo BETWEEN DATEADD(M,-1,GETDATE()) AND GETDATE()) " +
            "ORDER BY NEWID()";
        const inventarioEtiquetaProductoDetalleReciente = await sequelize.query(queryInventarioEtiquetaProductoDetalleReciente, {
            plain: false,
            raw: false,
            type: Sequelize.QueryTypes.SELECT
        });
        res.json({
            data: inventarioEtiquetaProductoDetalleReciente
        });
    } catch (error) {
        console.log(error);
    }
}

/*----------------------------------------------------Inventario Calzado Rosy Online-------------------------------------------------*/

//Obtener el inventario de Calzado en Rosy Online
export async function getCalzadoInventario(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '02'
                }]
            },
            include: [{
                model: EtiquetaProductoDetalles,
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
                        required: true
                    },
                    {
                        model: SubCategoriaProductos,
                        required: true
                    },
                    {
                        model: ProductoPrecioVentas,
                        required: true
                    }]
                }]
            }]
        });
        res.json({
            data: inventarioEtiquetaProductoDetalles
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Calzado en Rosy Online para Niño y Niña
export async function getCalzadoInventarioForNinaNino(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '02'
                },
                {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%NIÑ%'
                        }
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%NIÑ%'
                        }
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%NIÑ%'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Calzado en Rosy Online para Mujer
export async function getCalzadoInventarioForMujer(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '02'
                },
                {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%MUJER%'
                        }
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%MUJER%'
                        }
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%MUJER%'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Calzado en Rosy Online para Hombre
export async function getCalzadoInventarioForHombre(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '02'
                },
                {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%HOMBRE%'
                        }
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%HOMBRE%'
                        }
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%HOMBRE%'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

/*----------------------------------------------------Inventario Articulos Varios Rosy Online-------------------------------------------------*/

//Obtener el inventario de Articulos Varios en Rosy Online
export async function getArticulosVariosInventario(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '06'
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '04'
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '08'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

/*----------------------------------------------------Inventario Ropa Rosy Online-------------------------------------------------*/

//Obtener el inventario de Ropa en Rosy Online
export async function getRopaInventario(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }]
            },
            include: [{
                model: EtiquetaProductoDetalles,
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
                        required: true
                    },
                    {
                        model: SubCategoriaProductos,
                        required: true
                    },
                    {
                        model: ProductoPrecioVentas,
                        required: true
                    }]
                }]
            }]
        });
        res.json({
            data: inventarioEtiquetaProductoDetalles
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Ropa en Rosy Online para Niño y Niña
export async function getRopaInventarioForNinaNino(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%NIÑ%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%NIÑ%'
                        }
                    }]
                }]
            },
            include: [{
                model: EtiquetaProductoDetalles,
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
                        required: true
                    },
                    {
                        model: SubCategoriaProductos,
                        required: true
                    },
                    {
                        model: ProductoPrecioVentas,
                        required: true
                    }]
                }]
            }]
        });
        res.json({
            data: inventarioEtiquetaProductoDetalles
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Ropa en Rosy Online para Niña
export async function getRopaInventarioForNina(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                        [Op.like]: '%NIÑA%'
                    }
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                        [Op.notLike]: '%BEBE%'
                    }
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Ropa en Rosy Online para Niño
export async function getRopaInventarioForNino(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                        [Op.like]: '%NIÑO%'
                    }
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                        [Op.notLike]: '%BEBE%'
                    }
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Ropa en Rosy Online para Bebe
export async function getRopaInventarioForBebe(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%BEBE%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%BEBE%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%BB%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%BB%'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Ropa en Rosy Online para Hombre
export async function getRopaInventarioForHombre(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%HOMBRE%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%HOMBRE%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%CAMIS%'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Ropa en Rosy Online para Mujer
export async function getRopaInventarioForMujer(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%MUJER%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%MUJER%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%BLUSA%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%VESTIDO%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%BRASSIER%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%FALDA%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%CAPRY%'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Ropa en Rosy Online para el Hogar
export async function getRopaInventarioForHogar(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '12'
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '54'
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '102'
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '133'
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '199'
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '22'
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '98'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Ropa en Rosy Online para el Invierno
export async function getRopaInventarioForInvierno(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%INVIERNO%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%INVIERNO%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%INVIERNO%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%CHAQUETA%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%CHAQUETA%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%CHAQUETA%'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Ropa en Rosy Online para el Verano
export async function getRopaInventarioForVerano(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%FALDA%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%FALDA%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%FALDA%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%BLUSA%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%BLUSA%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%BLUSA%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%SHORT%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%SHORT%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%SHORT%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%CAMIS%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%CAMIS%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%CAMIS%'
                        }
                    }]
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.notLike]: '%ML%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.notLike]: '%ML%'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Ropa en Rosy Online para Eventos
export async function getRopaInventarioForEventos(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%SACO%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%SACO%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%SACO%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%VESTIDO%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%VESTIDO%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%VESTIDO%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%TELA%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%TELA%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%TELA%'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener el inventario de Ropa Deportiva en Rosy Online
export async function getRopaDeportivaInventario(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%DEPORTIV%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%DEPORTIV%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%DEPORTIV%'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Buscar en el inventario de Rosy Online
export async function getSearchDetalle(req, res) {
    const { filtro } = req.params;
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': {
                            [Op.like]: '%' + filtro + '%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': {
                            [Op.like]: '%' + filtro + '%'
                        }
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': {
                            [Op.like]: '%' + filtro + '%'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener camisas para Hombre
export async function getCamisasForHombre(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '117'
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '50'
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '51'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener sacos para Hombre
export async function getSacosForHombre(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '63'
                    }, {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '64'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener jeans para Hombre
export async function getJeansForHombre(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '49'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener tallas especiales para Hombre
export async function getTallasEspecialesForHombre(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '113'
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '111'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener ropa deportiva para Hombre
export async function getRopaDeportivaForHombre(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '130'
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '158'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener pantalones para Hombre
export async function getPantalonForHombre(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '80'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener shorts para Hombre
export async function getShortForHombre(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '65'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener vestidos para Mujer
export async function getVestidoForMujer(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '52'
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '53'
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '54'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener jeans para Mujer
export async function getJeansForMujer(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '48'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener ropa deportiva para Mujer
export async function getRopaDeportivaForMujer(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '131'
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '159'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener blusas para Mujer
export async function getBlusaForMujer(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '46'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener shorts para Mujer
export async function getShortForMujer(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '61'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener pantalones para Mujer
export async function getPantalonForMujer(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '79'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener tallas especiales para Mujer
export async function getTallasEspecialesForMujer(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '112'
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '114'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener faldas para Mujer
export async function getFaldaForMujer(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '76'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener ropa interior para Mujer
export async function getInteriorForMujer(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '167'
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '24'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener chaquetas para Mujer
export async function getChaquetaForMujer(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    [Op.or]: [{
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '100'
                    },
                    {
                        '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '83'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener Cortinas para el Hogar
export async function getCortinasForHogar(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '133'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener Cortinas para el Hogar
export async function getToallasForHogar(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '102'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

//Filtro para obtener Edredones para el Hogar
export async function getEdredonesForHogar(req, res) {
    try {
        const inventarioEtiquetaProductoDetalles = await InventarioEtiquetaProductoDetalles.findAll({
            attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
            raw: true,
            where: {
                [Op.and]: [{
                    Sucursal: 'HNR036'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
                }, {
                    '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '54'
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
                    required: true,
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
        res.json({
            data: paginatedResults(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
        });
    } catch (error) {
        console.log(error)
    }
}

export async function getRopaHombreByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "G.PrecioVenta, " +
        "A.Cantidad " +
        "FROM TBLInventarioEtiquetaProductoDetalles A " +
        "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (E.Nombre LIKE '%HOMBRE%' OR D.Nombre LIKE '%HOMBRE%' OR D.Nombre LIKE '%CAMIS%') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getRopaMujerByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "G.PrecioVenta, " +
        "A.Cantidad " +
        "FROM TBLInventarioEtiquetaProductoDetalles A " +
        "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (E.Nombre LIKE '%MUJER%' OR D.Nombre LIKE '%MUJER%' OR E.Nombre LIKE '%BLUSA%' OR E.Nombre LIKE '%VESTIDO%' OR E.Nombre LIKE '%BRASSIER%' OR E.Nombre LIKE '%FALDA%' OR E.Nombre LIKE '%CAPRY%') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;

    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getRopaHogarByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "G.PrecioVenta, " +
        "A.Cantidad " +
        "FROM TBLInventarioEtiquetaProductoDetalles A " +
        "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (C.CategoriaProducto = '12' OR C.CategoriaProducto = '54' OR C.CategoriaProducto = '102' OR C.CategoriaProducto = '133' OR C.SubCategoriaProducto = '199' OR C.SubCategoriaProducto = '22' OR C.SubCategoriaProducto = '98') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;


    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getRopaNinaByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "G.PrecioVenta, " +
        "A.Cantidad " +
        "FROM TBLInventarioEtiquetaProductoDetalles A " +
        "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND C.Nombre LIKE '%NIÑA%' AND C.Nombre NOT LIKE '%BEBE%' AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio

    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getRopaNinoByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "G.PrecioVenta, " +
        "A.Cantidad " +
        "FROM TBLInventarioEtiquetaProductoDetalles A " +
        "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND C.Nombre LIKE '%NIÑO%' AND C.Nombre NOT LIKE '%BEBE%' AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;

    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getRopaBebeByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "G.PrecioVenta, " +
        "A.Cantidad " +
        "FROM TBLInventarioEtiquetaProductoDetalles A " +
        "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (C.Nombre LIKE '%BEBE%' OR C.Nombre LIKE '%BB%' OR E.Nombre LIKE '%BEBE%' OR E.Nombre LIKE '%BB%') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;


    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getZapatosHombreByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "    convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "    G.PrecioVenta, " +
        "    A.Cantidad " +
        "    FROM TBLInventarioEtiquetaProductoDetalles A " +
        "    INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "    INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "    INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "    INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "    INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "    INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "    WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '02' AND (C.Nombre LIKE '%HOMBRE%' OR D.Nombre LIKE '%HOMBRE%' OR E.Nombre LIKE '%HOMBRE%') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;


    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getZapatosMujerByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "    convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "    G.PrecioVenta, " +
        "    A.Cantidad " +
        "    FROM TBLInventarioEtiquetaProductoDetalles A " +
        "    INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "    INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "    INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "    INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "    INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "    INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '02' AND (C.Nombre LIKE '%MUJER%' OR D.Nombre LIKE '%MUJER%' OR E.Nombre LIKE '%MUJER%') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;



    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getZapatosNinoByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "    convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "    G.PrecioVenta, " +
        "    A.Cantidad " +
        "    FROM TBLInventarioEtiquetaProductoDetalles A " +
        "    INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "    INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "    INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "    INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "    INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "    INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '02' AND (C.Nombre LIKE '%NIÑ%' OR D.Nombre LIKE '%NIÑ%' OR E.Nombre LIKE '%NIÑ%') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;

    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getArticulosVariosByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "G.PrecioVenta, " +
        "A.Cantidad " +
        "FROM TBLInventarioEtiquetaProductoDetalles A " +
        "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND (C.GrupoProducto = '06' OR C.GrupoProducto = '04' OR C.GrupoProducto = '08') " +
        "AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;

    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getRopaDeportivaByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "G.PrecioVenta, " +
        "A.Cantidad " +
        "FROM TBLInventarioEtiquetaProductoDetalles A " +
        "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (C.Nombre LIKE '%DEPORTIV%' OR D.Nombre LIKE '%DEPORTIV%' OR E.Nombre LIKE '%DEPORTIV%') " +
        "AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;

    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getRopaEventosByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "G.PrecioVenta, " +
        "A.Cantidad " +
        "FROM TBLInventarioEtiquetaProductoDetalles A " +
        "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (C.Nombre LIKE '%SACO%' OR D.Nombre LIKE '%SACO%' OR E.Nombre LIKE '%SACO%' " +
        "OR C.Nombre LIKE '%VESTIDO%' OR D.Nombre LIKE '%VESTIDO%' OR E.Nombre LIKE '%VESTIDO%' " +
        "OR C.Nombre LIKE '%TELA%' OR D.Nombre LIKE '%TELA%' OR E.Nombre LIKE '%TELA%') " +
        "AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;

    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getRopaInviernoByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "G.PrecioVenta, " +
        "A.Cantidad " +
        "FROM TBLInventarioEtiquetaProductoDetalles A " +
        "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (C.Nombre LIKE '%INVIERNO%' OR D.Nombre LIKE '%INVIERNO%' OR E.Nombre LIKE '%INVIERNO%' " +
        "OR C.Nombre LIKE '%CHAQUETA%' OR D.Nombre LIKE '%CHAQUETA%' OR E.Nombre LIKE '%CHAQUETA%') " +
        "AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;

    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}

export async function getRopaVeranoByPrecio(req, res) {
    const { precio } = req.params;
    const query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " +
        "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " +
        "G.PrecioVenta, " +
        "A.Cantidad " +
        "FROM TBLInventarioEtiquetaProductoDetalles A " +
        "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " +
        "INNER JOIN TBLProductos C ON C.Producto = B.Producto " +
        "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " +
        "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " +
        "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " +
        "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " +
        "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (C.Nombre LIKE '%FALDA%' OR D.Nombre LIKE '%FALDA%' OR E.Nombre LIKE '%FALDA%' " +
        "OR C.Nombre LIKE '%BLUSA%' OR D.Nombre LIKE '%BLUSA%' OR E.Nombre LIKE '%BLUSA%' " +
        "OR C.Nombre LIKE '%SHORT%' OR D.Nombre LIKE '%SHORT%' OR E.Nombre LIKE '%SHORT%' " +
        "OR C.Nombre LIKE '%CAMIS%' OR D.Nombre LIKE '%CAMIS%' OR E.Nombre LIKE '%CAMIS%') " +
        "AND (C.Nombre NOT LIKE '%ML%' OR E.Nombre NOT LIKE '%ML%') " +
        "AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;

    const inventario = await sequelize.query(query, {

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: Sequelize.QueryTypes.SELECT
    });
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, inventario)
    });
}