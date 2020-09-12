"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rosyOnline = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rosyOnline = new _sequelize["default"](process.env.DB_NAME_ROSYONLINE, //Nombre de la base de datos
process.env.DB_USERNAME_ROSYONLINE, //Usuario
process.env.DB_PASSWORD_ROSYONLINE, //Password
{
  host: process.env.DB_HOST_ROSYONLINE,
  //Ubicacion de la base de datos
  port: process.env.DB_PORT_ROSYONLINE,
  dialect: 'mysql',
  //Dialecto en este caso mssql (SQL Server). Otros dialectos mysql (MySQL), mariadb (MariaDB), postgres (PostgreSQL)
  pool: {
    //Pool options
    max: 5,
    min: 0,
    require: 500000,
    idle: 500000
  },
  logging: false //Opcion para que no muestre mensajes por consola al momento de realizar la conexion

});
exports.rosyOnline = rosyOnline;