import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Paises from './Paises';

const Regiones = sequelize.define('TBLRegiones', {
    Region: {
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

Regiones.hasMany(Paises, {foreignKey: 'Region'});
Paises.belongsTo(Regiones, {foreignKey: 'Region'});

export default Regiones;