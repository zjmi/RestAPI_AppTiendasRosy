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
  getPictures,
} from "../controllers/rosyOnline.controller";

router.get("/ropaDama", getRopaDama);
router.get("/blusasDama", getBlusasDama);
router.get("/chaquetasDama", getChaquetasDama);
router.get("/ropaInteriorDama", getRopaInterioDama);
router.get("/faldasDama", getFaldasDama);
router.get("/shortsDama", getShortsDama);
router.get("/jumpersDama", getJumpersDama);
router.get("/jeansDama", getJeansDama);
router.get("/pantalonesTelaDama", getPantalonesTelaDama);
router.get("/legginsDama", getLegginsDama);
router.get("/vestidosDama", getVestidosDama);
router.get("/vestidosNocheDama", getVestidosNocheDama);
router.get("/vestidosNoviaDama", getVestidosNoviaDama);
router.get("/pijamasDama", getPijamasDama);
router.get("/carterasDama", getCarterasDama);
router.get("/trajesBanioDama", getTrajeBanioDama);
router.get("/tallasEspecialesDama", getTallasEspecialesDama);
router.get("/ropaDeportivaDama", getRopaDeportivaDama);
router.get("/ropaInviernoDama", getRopaInviernoDama);
router.get("/ropaHospitalDama", getRopaHospitalDama);

router.get("/ropaCaballero", getRopaCaballero);
router.get("/camisasCaballero", getCamisasCaballero);
router.get("/camisasFutbolCaballero", getCamisasFutbolCaballero);
router.get("/chaquetasCaballero", getChaquetasCaballero);
router.get("/sacosVestirCaballero", getSacosVestirCaballero);
router.get("/boxersCaballero", getBoxersCaballero);
router.get("/shortsCaballero", getShortsCaballero);
router.get("/jeansCaballero", getJeansCaballero);
router.get("/pantalonesTelaCaballero", getPantalonesTelaCaballero);
router.get("/pijamasCaballero", getPijamasCaballero);
router.get("/tallasEspecialesCaballero", getTallasEspecialesCaballero);
router.get("/ropaDeportivaCaballero", getRopaDeportivaCaballero);
router.get("/ropaInviernoCaballero", getRopaInviernoCaballero);
router.get("/corbatasCaballero", getCorbatasCaballero);

router.get("/variedades", getVariedades);

router.get("/ropaNino", getRopaNino);
router.get("/camisasNino", getCamisasNino);
router.get("/mamelucosNino", getMamelucosNino);
router.get("/shortsNino", getShortsNino);
router.get("/jeansNino", getJeansNino);
router.get("/pantalonesTelaNino", getPantalonesTelaNino);
router.get("/pijamasNino", getPijamasNino);
router.get("/ropaInviernoNino", getRopaInviernoNino);

router.get("/ropaNina", getRopaNina);
router.get("/blusasNina", getBlusasNina);
router.get("/chaquetasNina", getChaquetasNina);
router.get("/mamelucosNina", getMamelucosNina);
router.get("/faldasNina", getFaldasNina);
router.get("/shortsNina", getShortsNina);
router.get("/jumpersNina", getJumpersNina);
router.get("/jeansNina", getJeansNina);
router.get("/pantalonesTelaNina", getPantalonesTelaNina);
router.get("/vestidosNina", getVestidosNina);
router.get("/pijamasNina", getPijamasNina);
router.get("/trajesBanioNina", getTrajesBanioNina);
router.get("/ropaInviernoNina", getRopaInviernoNina);

router.get("/zapatos", getZapatos);
router.get("/zapatosCaballero", getZapatosCaballero);
router.get("/zapatosDama", getZapatosDama);
router.get("/zapatosNino", getZapatosNino);
router.get("/zapatosNina", getZapatosNina);

router.get("/hogar", getHogar);
router.get("/toallas", getToallas);
router.get("/alfombras", getAlfombras);
router.get("/cojines", getCojines);
router.get("/cameras", getCameras);
router.get("/cortinas", getCortinas);
router.get("/colchas", getColchas);
router.get("/edredones", getEdredones);
router.get("/mantelesMesa", getMantelesMesa);

router.get("/pictures/:ID", getPictures);
export default router;
