import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import EtiquetaProductoDetalles from './EtiquetaProductoDetalles';
import EtiquetaProductoMayoreos from './EtiquetaProductoMayoreos';

const Productos = sequelize.define('TBLProductos', {
    Activo: {
        type: Sequelize.BOOLEAN
    },
    TipoProducto: {
        type: Sequelize.SMALLINT
    },
    Producto: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Nombre: {
        type: Sequelize.STRING
    },
    GrupoProducto: {
        type: Sequelize.STRING
    },
    CategoriaProducto: {
        type: Sequelize.STRING
    },
    SubCategoriaProducto: {
        type: Sequelize.STRING
    },
    Proveedor: {
        type: Sequelize.STRING
    },
    TipoNivelProducto: {
        type: Sequelize.STRING
    },
    Costo: {
        type: Sequelize.DECIMAL(12,4)
    },
    TipoCostoIC: {
        type: Sequelize.SMALLINT
    },
    ValorCostoIC: {
        type: Sequelize.DECIMAL(12,4)
    },
    Empresa: {
        type: Sequelize.STRING
    },
    UPosteo: {
        type: Sequelize.STRING
    },
    Fposteo: {
        type: Sequelize.DATE
    },
    PC: {
        type: Sequelize.STRING
    },
    TotalCostoIC: {
        type: Sequelize.DECIMAL(12,4)
    },
    DefinirPeso: {
        type: Sequelize.BOOLEAN
    },
    LimitePiezaReclasificacion: {
        type: Sequelize.DECIMAL(12,4)
    },
    ExcluirCostoFleteProductoMayoreo: {
        type: Sequelize.BOOLEAN
    },
    UltimoFactorDolar: {
        type: Sequelize.DECIMAL(12,4)
    },
    CodigoBarraAlterno: {
        type: Sequelize.STRING
    },
    PImpuesto: {
        type: Sequelize.DECIMAL(12,4)
    },
    PExcluirInventario: {
        type: Sequelize.BOOLEAN
    },
    Codigo: {
        type: Sequelize.STRING
    },
    ConteoPromedio: {
        type: Sequelize.INTEGER
    },
    CostoPromedio: {
        type: Sequelize.INTEGER
    },
    PrecioPromedio: {
        type: Sequelize.INTEGER
    },
    CostoPromedioProducto: {
        type: Sequelize.DECIMAL(20,4)
    },
    CostoPromedioProductoFiscal: {
        type: Sequelize.DECIMAL(20,4)
    },
    ClaseProducto: {
        type: Sequelize.STRING
    },
    SubCategoriaProducto2: {
        type: Sequelize.STRING
    }
},{
    timestamps: false,
    freezeTableName: true,
    schema: 'dbo'
});

//Asociacion con EtiquetaProductoMayoreo
Productos.hasMany(EtiquetaProductoMayoreos, {foreignKey: 'Producto'});
EtiquetaProductoMayoreos.belongsTo(Productos, {foreignKey: 'Producto'});

//Asociacion con EtiquetaProductoDetalles
Productos.hasMany(EtiquetaProductoDetalles, {foreignKey: 'Producto'});
EtiquetaProductoDetalles.belongsTo(Productos, {foreignKey: 'Producto'});

export default Productos;