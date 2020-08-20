import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import TipoNivelProductosClases from './TipoNivelProductosClases';

const Clases = sequelize.define('TBLClases', {
    Clase: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Nombre: {
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
    }
},
{
    timestamps: false,
    freezeTableName: true,
    schema: 'dbo'
});

Clases.hasMany(TipoNivelProductosClases, {foreignKey: 'Clase'});
TipoNivelProductosClases.belongsTo(Clases, {foreignKey: 'Clase'});
export default Clases;