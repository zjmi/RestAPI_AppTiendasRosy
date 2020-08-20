import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Productos from './Productos';

const CategoriaProductos = sequelize.define('TBLCategoriaProductos', {
    CategoriaProducto: {
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

CategoriaProductos.hasMany(Productos, {foreignKey: 'CategoriaProducto'});
Productos.belongsTo(CategoriaProductos, {foreignKey: 'CategoriaProducto'});

export default CategoriaProductos;