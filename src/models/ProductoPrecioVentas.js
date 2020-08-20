import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Productos from './Productos';

const ProductoPrecioVentas = sequelize.define('TBLProductoPrecioVentas', {
    Producto: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Precio: {
        type: Sequelize.SMALLINT,
        primaryKey: true
    },
    PrecioVenta: {
        type: Sequelize.DECIMAL(12,4)
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
    },
    ExcluirPedirAutorizacion: {
        type: Sequelize.BOOLEAN
    }
},{
    timestamps: false,
    freezeTableName: true,
    schema: 'dbo'
});

ProductoPrecioVentas.hasMany(Productos, {foreignKey: 'Producto'});
Productos.belongsTo(ProductoPrecioVentas, {foreignKey: 'Producto'});

export default ProductoPrecioVentas;