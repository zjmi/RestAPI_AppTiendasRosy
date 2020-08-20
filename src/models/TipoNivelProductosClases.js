import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const TipoNivelProductosClases = sequelize.define('TBLTipoNivelProductosClases', {
    TipoNivelProducto: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Clase: {
        type: Sequelize.STRING,
        primaryKey: true
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
},
{
    timestamps: false,
    freezeTableName: true,
    schema: 'dbo'
});

export default TipoNivelProductosClases;