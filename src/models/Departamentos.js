import Sequelize from 'sequelize';
import Municipios from './Municipios';
import { sequelize } from '../database/database';

// Modelo de la Tabla ('Nombre de la tabla', 'Campos de la tabla')
const Departamentos = sequelize.define('TBLDepartamentos', {
    Departamento: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Nombre: {
        type: Sequelize.STRING
    },
    Pais: {
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
    timestamps: false, // Evitar problemas con las fechas
    freezeTableName: true, // Mantener los nombre de la tabla, ya que sequelize los cambia a plural por defecto
    schema: 'dbo' //Nombre del esquema de la base de datos
});

Departamentos.hasMany(Municipios, {foreignKey: 'Departamento'});
Municipios.belongsTo(Departamentos, {foreignKey: 'Departamento'});

export default Departamentos;