"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _consolidate = _interopRequireDefault(require("consolidate"));

var _payment = _interopRequireDefault(require("./routes/payment"));

var _departamentos = _interopRequireDefault(require("./routes/departamentos"));

var _municipios = _interopRequireDefault(require("./routes/municipios"));

var _regiones = _interopRequireDefault(require("./routes/regiones"));

var _paises = _interopRequireDefault(require("./routes/paises"));

var _tipoNivelProductos = _interopRequireDefault(require("./routes/tipoNivelProductos"));

var _clases = _interopRequireDefault(require("./routes/clases"));

var _tipoNivelProductosClases = _interopRequireDefault(require("./routes/tipoNivelProductosClases"));

var _sucursales = _interopRequireDefault(require("./routes/sucursales"));

var _inventarioEtiquetaProductoDetalles = _interopRequireDefault(require("./routes/inventarioEtiquetaProductoDetalles"));

var _inventarioEtiquetaProductoMayoreos = _interopRequireDefault(require("./routes/inventarioEtiquetaProductoMayoreos"));

var _cambioDolarLempiras = _interopRequireDefault(require("./routes/cambioDolarLempiras"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _search = _interopRequireDefault(require("./routes/search"));

var _carritoCompra = _interopRequireDefault(require("./routes/carritoCompra"));

var _carritoCompraDetalle = _interopRequireDefault(require("./routes/carritoCompraDetalle"));

var _carritoCompraMayoreo = _interopRequireDefault(require("./routes/carritoCompraMayoreo"));

var _pictures = _interopRequireDefault(require("./routes/pictures"));

var _ordenPedidos = _interopRequireDefault(require("./routes/ordenPedidos"));

var _infoProducto = _interopRequireDefault(require("./routes/infoProducto"));

var _rosyOnline = _interopRequireDefault(require("./routes/rosyOnline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// importing routes
// initialization
var app = (0, _express["default"])(); // settings

app.engine("ejs", _consolidate["default"].ejs);
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(_express["default"]["static"]("./src/img")); // middlewares

app.use((0, _morgan["default"])("dev"));
app.use((0, _express.json)()); // routes

app.use("/api/infoProductos", _infoProducto["default"]);
app.use("/api/pedidos", _ordenPedidos["default"]);
app.use("/api/pictures", _pictures["default"]);
app.use("/api/payment", _payment["default"]);
app.use("/api/user", _auth["default"]);
app.use("/api/search", _search["default"]);
app.use("/api/municipios", _municipios["default"]);
app.use("/api/departamentos", _departamentos["default"]);
app.use("/api/paises", _paises["default"]);
app.use("/api/regiones", _regiones["default"]);
app.use("/api/tipoNivelProductos", _tipoNivelProductos["default"]);
app.use("/api/clases", _clases["default"]);
app.use("/api/tipoNivelProductosClases", _tipoNivelProductosClases["default"]);
app.use("/api/sucursales", _sucursales["default"]);
app.use("/api/inventario/detalle", _inventarioEtiquetaProductoDetalles["default"]);
app.use("/api/inventario/mayoreo", _inventarioEtiquetaProductoMayoreos["default"]);
app.use("/api/cambioDolarLempiras", _cambioDolarLempiras["default"]);
app.use("/api/carritoCompra", _carritoCompra["default"]);
app.use("/api/carritoCompraDetalle", _carritoCompraDetalle["default"]);
app.use("/api/carritoCompraMayoreo", _carritoCompraMayoreo["default"]);
app.use("/api/rosyOnline", _rosyOnline["default"]);
var _default = app;
exports["default"] = _default;