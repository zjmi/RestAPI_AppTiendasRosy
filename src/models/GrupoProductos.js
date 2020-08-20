import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Productos from './Productos';

const GrupoProductos = sequelize.define('TBLGrupoProductos', {
    GrupoProducto: {
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
},{
    timestamps: false,
    freezeTableName: true,
    schema: 'dbo'
});

GrupoProductos.hasMany(Productos, {foreignKey: 'GrupoProducto'});
Productos.belongsTo(GrupoProductos, {foreignKey: 'GrupoProducto'});

export default GrupoProductos;