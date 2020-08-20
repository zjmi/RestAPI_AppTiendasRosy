import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Departamentos from './Departamentos';

const Paises = sequelize.define('TBLPaises', {
    Pais: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Nombre: {
        type: Sequelize.STRING
    },
    Region: {
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

Paises.hasMany(Departamentos, {foreignKey: 'Pais'});
Departamentos.belongsTo(Paises, {foreignKey: 'Pais'});
export default Paises;