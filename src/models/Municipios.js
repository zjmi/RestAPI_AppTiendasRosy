import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

// Modelo de la Tabla ('Nombre de la tabla', 'Campos de la tabla')
const Municipios = sequelize.define('TBLMunicipios', {
    Municipio: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Nombre: {
        type: Sequelize.STRING
    },
    Departamento: {
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

export default Municipios;