import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Productos from './Productos';

const SubCategoriaProductos = sequelize.define('TBLSubCategoriaProductos', {
    SubCategoriaProducto: {
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

SubCategoriaProductos.hasMany(Productos, {foreignKey: 'SubCategoriaProducto'});
Productos.belongsTo(SubCategoriaProductos, {foreignKey: 'SubCategoriaProducto'});

export default SubCategoriaProductos;