import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const InventarioEtiquetaProductoDetalles = sequelize.define('TBLInventarioEtiquetaProductoDetalles', {
    Etiqueta: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Sucursal: {
        type: Sequelize.STRING
    },
    Cantidad: {
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
    }
},{
    timestamps: false,
    freezeTableName: true,
    schema: 'dbo'
});

export default InventarioEtiquetaProductoDetalles;