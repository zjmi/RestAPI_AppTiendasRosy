import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import InventarioEtiquetaProductoMayoreos from './InventarioEtiquetaProductoMayoreos';

const EtiquetaProductoMayoreos = sequelize.define('TBLEtiquetaProductoMayoreos', {
    Etiqueta: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Fecha: {
        type: Sequelize.DATE
    },
    Factura: {
        type: Sequelize.STRING
    },
    Producto: {
        type: Sequelize.STRING
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
    Peso: {
        type: Sequelize.DECIMAL(12,4)
    },
    Costo: {
        type: Sequelize.DECIMAL(12,4)
    },
    CostoDesaduanaje: {
        type: Sequelize.DECIMAL(12,4)
    },
    CostoCompra: {
        type: Sequelize.DECIMAL(12,4)
    },
    Conteo: {
        type: Sequelize.INTEGER
    },
    CostoUnitario: {
        type: Sequelize.DECIMAL(12,4)
    },
    CostoCompra2: {
        type: Sequelize.DECIMAL(12,4)
    }
},{
    timestamps: false,
    freezeTableName: true,
    schema: 'dbo'
});

//Asociacion con InventarioEtiquetaProductoMayoreos
EtiquetaProductoMayoreos.hasOne(InventarioEtiquetaProductoMayoreos, {foreignKey: 'Etiqueta'});
InventarioEtiquetaProductoMayoreos.belongsTo(EtiquetaProductoMayoreos, {foreignKey: 'Etiqueta'});

export default EtiquetaProductoMayoreos;