import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Sucursales = sequelize.define('TBLSucursales', {
    Sucursal: {
        type:Sequelize.STRING,
        primaryKey: true
    },
    Nombre: {
        type:Sequelize.STRING
    },
    CorreoEncargadoSucursal: {
        type:Sequelize.STRING
    },
    CorreoEncargadoEnviarRecibirProducto: {
        type:Sequelize.STRING
    },
    Ciudad: {
        type:Sequelize.STRING
    },
    CostoFleteProductoMayoreo: {
        type: Sequelize.DECIMAL(12,4)
    },
    Direccion1: {
        type:Sequelize.STRING
    },
    Direccion2: {
        type:Sequelize.STRING
    },
    Direccion3: {
        type:Sequelize.STRING
    },
    Telefono: {
        type:Sequelize.STRING
    },
    EfectivoDepositarCajaSeguridad: {
        type: Sequelize.DECIMAL(12,4)
    },
    LimiteEfectivoDepositoEntregadoBanco: {
        type: Sequelize.DECIMAL(12,4)
    },
    FondoCaja: {
        type: Sequelize.DECIMAL(12,4)
    },
    Empresa: {
        type:Sequelize.STRING
    },
    UPosteo: {
        type:Sequelize.STRING
    },
    Fposteo: {
        type: Sequelize.DATE
    },
    PC: {
        type:Sequelize.STRING
    },
    CantidadCopiaImprimirFactura: {
        type: Sequelize.SMALLINT
    },
    NombreCorto: {
        type:Sequelize.STRING
    },
    Direccion4: {
        type:Sequelize.STRING
    },
    CorreoAutorizadorReclasificacion: {
        type:Sequelize.STRING
    },
    RifaLineaDatoMonto: {
        type: Sequelize.DECIMAL(12,4)
    },
    RifaLineaDatoComentario: {
        type:Sequelize.STRING
    },
    RecargaClaroUsuario: {
        type:Sequelize.STRING
    },
    RecargaClaroContrasena: {
        type:Sequelize.STRING
    },
    RecargaTigoUsuario: {
        type:Sequelize.STRING
    },
    RecargaTigoContrasena: {
        type:Sequelize.STRING
    },
    CorreoAutorizadorDescuento: {
        type:Sequelize.STRING
    },
    Promocion2x1: {
        type: Sequelize.BOOLEAN
    },
    PromocionSegundaMitadPrecio: {
        type: Sequelize.BOOLEAN
    },
    PromocionPague2LLeve3: {
        type: Sequelize.BOOLEAN
    },
    UltimoFactorDolar: {
        type: Sequelize.DECIMAL(12,4)
    },
    ImprimeMatricial: {
        type: Sequelize.BOOLEAN
    },
    PromocionRopaL55: {
        type: Sequelize.BIGINT
    },
    PromocionRopaL85: {
        type: Sequelize.BIGINT
    },
    FondoCajaChica: {
        type: Sequelize.DECIMAL(12,4)
    },
    ResponsableCajaChica: {
        type: Sequelize.STRING
    },
    Kilometraje: {
        type: Sequelize.DECIMAL(12,4)
    },
    MetrosCuadrados: {
        type: Sequelize.DECIMAL(12,4)
    },
    CantidadEmpleados: {
        type: Sequelize.DECIMAL(12,4)
    },
    SucursalAlterna: {
        type: Sequelize.STRING
    },
    PorcentajeCostosContabilidad: {
        type: Sequelize.DECIMAL(12,4)
    },
    Zona: {
        type: Sequelize.STRING
    },
    PromocionRopaL25: {
        type: Sequelize.BOOLEAN
    },
    MultiEmpresas: { 
        type: Sequelize.BOOLEAN
    }
},
{
    timestamps: false,
    freezeTableName: true,
    schema: 'dbo'
});

export default Sucursales;