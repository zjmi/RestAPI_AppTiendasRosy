import express, { json } from "express";
import morgan from "morgan";
import engines from "consolidate";

// importing routes
import paymentRoutes from "./routes/payment";
import departamentoRoutes from "./routes/departamentos";
import municipioRoutes from "./routes/municipios";
import regionRoutes from "./routes/regiones";
import paisRoutes from "./routes/paises";
import tipoNivelProductosRoutes from "./routes/tipoNivelProductos";
import clasesRoutes from "./routes/clases";
import tipoNivelProductosClasesRouter from "./routes/tipoNivelProductosClases";
import sucursalesRouter from "./routes/sucursales";
import inventarioEtiquetaProductoDetallesRouter from "./routes/inventarioEtiquetaProductoDetalles";
import inventarioEtiquetaProductoMayoreoRouter from "./routes/inventarioEtiquetaProductoMayoreos";
import cambioDolarLempirasRouter from "./routes/cambioDolarLempiras";
import authRoutes from "./routes/auth";
import searchRoutes from "./routes/search";
import carritoCompraRoutes from "./routes/carritoCompra";
import carritoCompraDetalleRoutes from "./routes/carritoCompraDetalle";
import carritoCompraMayoreoRoutes from "./routes/carritoCompraMayoreo";
import picturesRoutes from "./routes/pictures";
import ordenPedidosRoutes from "./routes/ordenPedidos";
import infoProductoRoutes from "./routes/infoProducto";

// initialization
const app = express();

// settings
app.engine("ejs", engines.ejs);
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static("./src/img"));

// middlewares
app.use(morgan("dev"));
app.use(json());

// routes
app.use("/api/infoProductos", infoProductoRoutes);
app.use("/api/pedidos", ordenPedidosRoutes);
app.use("/api/pictures", picturesRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/user", authRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/municipios", municipioRoutes);
app.use("/api/departamentos", departamentoRoutes);
app.use("/api/paises", paisRoutes);
app.use("/api/regiones", regionRoutes);
app.use("/api/tipoNivelProductos", tipoNivelProductosRoutes);
app.use("/api/clases", clasesRoutes);
app.use("/api/tipoNivelProductosClases", tipoNivelProductosClasesRouter);
app.use("/api/sucursales", sucursalesRouter);
app.use("/api/inventario/detalle", inventarioEtiquetaProductoDetallesRouter);
app.use("/api/inventario/mayoreo", inventarioEtiquetaProductoMayoreoRouter);
app.use("/api/cambioDolarLempiras", cambioDolarLempirasRouter);
app.use("/api/carritoCompra", carritoCompraRoutes);
app.use("/api/carritoCompraDetalle", carritoCompraDetalleRoutes);
app.use("/api/carritoCompraMayoreo", carritoCompraMayoreoRoutes);

export default app;
