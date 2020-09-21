import { Router } from "express";
const router = Router();

import {
  getRopaDama,
  getBlusasDama,
  getChaquetasDama,
  getRopaInterioDama,
  getFaldasDama,
  getShortsDama,
  getJumpersDama,
  getJeansDama,
  getPantalonesTelaDama,
  getLegginsDama,
  getVestidosDama,
  getVestidosNocheDama,
  getVestidosNoviaDama,
  getPijamasDama,
  getCarterasDama,
  getTrajeBanioDama,
  getTallasEspecialesDama,
  getRopaDeportivaDama,
  getRopaInviernoDama,
  getRopaHospitalDama,
  getRopaCaballero,
  getCamisasCaballero,
  getCamisasFutbolCaballero,
  getChaquetasCaballero,
  getSacosVestirCaballero,
  getBoxersCaballero,
  getShortsCaballero,
  getJeansCaballero,
  getPantalonesTelaCaballero,
  getPijamasCaballero,
  getTallasEspecialesCaballero,
  getRopaDeportivaCaballero,
  getRopaInviernoCaballero,
  getCorbatasCaballero,
  getVariedades,
  getRopaNino,
  getCamisasNino,
  getMamelucosNino,
  getShortsNino,
  getJeansNino,
  getPantalonesTelaNino,
  getPijamasNino,
  getRopaInviernoNino,
  getRopaNina,
  getBlusasNina,
  getChaquetasNina,
  getMamelucosNina,
  getFaldasNina,
  getShortsNina,
  getJumpersNina,
  getJeansNina,
  getPantalonesTelaNina,
  getVestidosNina,
  getPijamasNina,
  getTrajesBanioNina,
  getRopaInviernoNina,
  getZapatos,
  getZapatosCaballero,
  getZapatosDama,
  getZapatosNino,
  getZapatosNina,
  getHogar,
  getToallas,
  getAlfombras,
  getCojines,
  getCameras,
  getCortinas,
  getColchas,
  getEdredones,
  getMantelesMesa,
  getDescuentos
} from "../controllers/rosyOnline.controller";

import { verifyToken } from "../middlewares/verifyToken";

router.get("/ropaDama", verifyToken, getRopaDama);
router.get("/blusasDama", verifyToken, getBlusasDama);
router.get("/chaquetasDama", verifyToken, getChaquetasDama);
router.get("/ropaInteriorDama", verifyToken, getRopaInterioDama);
router.get("/faldasDama", verifyToken, getFaldasDama);
router.get("/shortsDama", verifyToken, getShortsDama);
router.get("/jumpersDama", verifyToken, getJumpersDama);
router.get("/jeansDama", verifyToken, getJeansDama);
router.get("/pantalonesTelaDama", verifyToken, getPantalonesTelaDama);
router.get("/legginsDama", verifyToken, getLegginsDama);
router.get("/vestidosDama", verifyToken, getVestidosDama);
router.get("/vestidosNocheDama", verifyToken, getVestidosNocheDama);
router.get("/vestidosNoviaDama", verifyToken, getVestidosNoviaDama);
router.get("/pijamasDama", verifyToken, getPijamasDama);
router.get("/carterasDama", verifyToken, getCarterasDama);
router.get("/trajesBanioDama", verifyToken, getTrajeBanioDama);
router.get("/tallasEspecialesDama", verifyToken, getTallasEspecialesDama);
router.get("/ropaDeportivaDama", verifyToken, getRopaDeportivaDama);
router.get("/ropaInviernoDama", verifyToken, getRopaInviernoDama);
router.get("/ropaHospitalDama", verifyToken, getRopaHospitalDama);

router.get("/ropaCaballero", verifyToken, getRopaCaballero);
router.get("/camisasCaballero", verifyToken, getCamisasCaballero);
router.get("/camisasFutbolCaballero", verifyToken, getCamisasFutbolCaballero);
router.get("/chaquetasCaballero", verifyToken, getChaquetasCaballero);
router.get("/sacosVestirCaballero", verifyToken, getSacosVestirCaballero);
router.get("/boxersCaballero", verifyToken, getBoxersCaballero);
router.get("/shortsCaballero", verifyToken, getShortsCaballero);
router.get("/jeansCaballero", verifyToken, getJeansCaballero);
router.get("/pantalonesTelaCaballero", verifyToken, getPantalonesTelaCaballero);
router.get("/pijamasCaballero", verifyToken, getPijamasCaballero);
router.get(
  "/tallasEspecialesCaballero",
  verifyToken,
  getTallasEspecialesCaballero
);
router.get("/ropaDeportivaCaballero", verifyToken, getRopaDeportivaCaballero);
router.get("/ropaInviernoCaballero", verifyToken, getRopaInviernoCaballero);
router.get("/corbatasCaballero", verifyToken, getCorbatasCaballero);

router.get("/variedades", verifyToken, getVariedades);

router.get("/ropaNino", verifyToken, getRopaNino);
router.get("/camisasNino", verifyToken, getCamisasNino);
router.get("/mamelucosNino", verifyToken, getMamelucosNino);
router.get("/shortsNino", verifyToken, getShortsNino);
router.get("/jeansNino", verifyToken, getJeansNino);
router.get("/pantalonesTelaNino", verifyToken, getPantalonesTelaNino);
router.get("/pijamasNino", verifyToken, getPijamasNino);
router.get("/ropaInviernoNino", verifyToken, getRopaInviernoNino);

router.get("/ropaNina", verifyToken, getRopaNina);
router.get("/blusasNina", verifyToken, getBlusasNina);
router.get("/chaquetasNina", verifyToken, getChaquetasNina);
router.get("/mamelucosNina", verifyToken, getMamelucosNina);
router.get("/faldasNina", verifyToken, getFaldasNina);
router.get("/shortsNina", verifyToken, getShortsNina);
router.get("/jumpersNina", verifyToken, getJumpersNina);
router.get("/jeansNina", verifyToken, getJeansNina);
router.get("/pantalonesTelaNina", verifyToken, getPantalonesTelaNina);
router.get("/vestidosNina", verifyToken, getVestidosNina);
router.get("/pijamasNina", verifyToken, getPijamasNina);
router.get("/trajesBanioNina", verifyToken, getTrajesBanioNina);
router.get("/ropaInviernoNina", verifyToken, getRopaInviernoNina);

router.get("/zapatos", verifyToken, getZapatos);
router.get("/zapatosCaballero", verifyToken, getZapatosCaballero);
router.get("/zapatosDama", verifyToken, getZapatosDama);
router.get("/zapatosNino", verifyToken, getZapatosNino);
router.get("/zapatosNina", verifyToken, getZapatosNina);

router.get("/hogar", verifyToken, getHogar);
router.get("/toallas", verifyToken, getToallas);
router.get("/alfombras", verifyToken, getAlfombras);
router.get("/cojines", verifyToken, getCojines);
router.get("/cameras", verifyToken, getCameras);
router.get("/cortinas", verifyToken, getCortinas);
router.get("/colchas", verifyToken, getColchas);
router.get("/edredones", verifyToken, getEdredones);
router.get("/mantelesMesa", verifyToken, getMantelesMesa);

router.get("/descuentos", verifyToken, getDescuentos);

export default router;
