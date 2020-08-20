import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import TipoNivelProductosClases from './TipoNivelProductosClases';
import Productos from './Productos';

const TipoNivelProductos = sequelize.define('TBLTipoNivelProductos', {
    TipoNivelProducto: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Nombre: {
        type: Sequelize.STRING
    },
    Empresa: {
        type: Sequelize.STRING
    },
    UPosteo:{
        type: Sequelize.STRING
    },
    Fposteo: {
        type: Sequelize.DATE
    },
    PC:{
        type: Sequelize.STRING
    }
},
{
    timestamps: false,
    freezeTableName: true,
    schema: 'dbo'
});

TipoNivelProductos.hasMany(TipoNivelProductosClases, {foreignKey: 'TipoNivelProducto'});
TipoNivelProductosClases.belongsTo(TipoNivelProductos, {foreignKey: 'TipoNivelProducto'});

TipoNivelProductos.hasMany(Productos,  {foreignKey: 'TipoNivelProducto'});
Productos.belongsTo(TipoNivelProductos,  {foreignKey: 'TipoNivelProducto'});

export default TipoNivelProductos;