import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const InventarioEtiquetaProductoMayoreos = sequelize.define('TBLInventarioEtiquetaProductoMayoreos', {
    Etiqueta: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Sucursal: {
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
    EmpresaTrans: {
        type: Sequelize.STRING
    },
    Isla: {
        type: Sequelize.STRING
    },
    Seccion: {
        type: Sequelize.STRING
    }
},{
    timestamps: false,
    freezeTableName: true,
    schema: 'dbo'
});

export default InventarioEtiquetaProductoMayoreos;