import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import InventarioEtiquetaProductoDetalles from './InventarioEtiquetaProductoDetalles';

const EtiquetaProductoDetalles = sequelize.define('TBLEtiquetaProductoDetalles', {
    Etiqueta: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Fecha: {
        type: Sequelize.DATE
    },
    Lote: {
        type: Sequelize.STRING
    },
    Producto: {
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

//Asociacion con InventarioEtiquetaProductoDetalles
EtiquetaProductoDetalles.hasOne(InventarioEtiquetaProductoDetalles, {foreignKey: 'Etiqueta'});
InventarioEtiquetaProductoDetalles.belongsTo(EtiquetaProductoDetalles, {foreignKey: 'Etiqueta'});

export default EtiquetaProductoDetalles;