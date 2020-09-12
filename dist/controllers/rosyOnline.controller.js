"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRopaDama = getRopaDama;
exports.getBlusasDama = getBlusasDama;
exports.getChaquetasDama = getChaquetasDama;
exports.getRopaInterioDama = getRopaInterioDama;
exports.getFaldasDama = getFaldasDama;
exports.getShortsDama = getShortsDama;
exports.getJumpersDama = getJumpersDama;
exports.getJeansDama = getJeansDama;
exports.getPantalonesTelaDama = getPantalonesTelaDama;
exports.getLegginsDama = getLegginsDama;
exports.getVestidosDama = getVestidosDama;
exports.getVestidosNocheDama = getVestidosNocheDama;
exports.getVestidosNoviaDama = getVestidosNoviaDama;
exports.getPijamasDama = getPijamasDama;
exports.getCarterasDama = getCarterasDama;
exports.getTrajeBanioDama = getTrajeBanioDama;
exports.getTallasEspecialesDama = getTallasEspecialesDama;
exports.getRopaDeportivaDama = getRopaDeportivaDama;
exports.getRopaInviernoDama = getRopaInviernoDama;
exports.getRopaHospitalDama = getRopaHospitalDama;
exports.getRopaCaballero = getRopaCaballero;
exports.getCamisasCaballero = getCamisasCaballero;
exports.getCamisasFutbolCaballero = getCamisasFutbolCaballero;
exports.getChaquetasCaballero = getChaquetasCaballero;
exports.getSacosVestirCaballero = getSacosVestirCaballero;
exports.getBoxersCaballero = getBoxersCaballero;
exports.getShortsCaballero = getShortsCaballero;
exports.getJeansCaballero = getJeansCaballero;
exports.getPantalonesTelaCaballero = getPantalonesTelaCaballero;
exports.getPijamasCaballero = getPijamasCaballero;
exports.getTallasEspecialesCaballero = getTallasEspecialesCaballero;
exports.getRopaDeportivaCaballero = getRopaDeportivaCaballero;
exports.getRopaInviernoCaballero = getRopaInviernoCaballero;
exports.getCorbatasCaballero = getCorbatasCaballero;
exports.getRopaNino = getRopaNino;
exports.getCamisasNino = getCamisasNino;
exports.getMamelucosNino = getMamelucosNino;
exports.getShortsNino = getShortsNino;
exports.getJeansNino = getJeansNino;
exports.getPantalonesTelaNino = getPantalonesTelaNino;
exports.getPijamasNino = getPijamasNino;
exports.getRopaInviernoNino = getRopaInviernoNino;
exports.getRopaNina = getRopaNina;
exports.getBlusasNina = getBlusasNina;
exports.getChaquetasNina = getChaquetasNina;
exports.getMamelucosNina = getMamelucosNina;
exports.getFaldasNina = getFaldasNina;
exports.getShortsNina = getShortsNina;
exports.getJumpersNina = getJumpersNina;
exports.getJeansNina = getJeansNina;
exports.getPantalonesTelaNina = getPantalonesTelaNina;
exports.getVestidosNina = getVestidosNina;
exports.getPijamasNina = getPijamasNina;
exports.getTrajesBanioNina = getTrajesBanioNina;
exports.getRopaInviernoNina = getRopaInviernoNina;
exports.getZapatos = getZapatos;
exports.getZapatosCaballero = getZapatosCaballero;
exports.getZapatosDama = getZapatosDama;
exports.getZapatosNino = getZapatosNino;
exports.getZapatosNina = getZapatosNina;
exports.getVariedades = getVariedades;
exports.getHogar = getHogar;
exports.getToallas = getToallas;
exports.getAlfombras = getAlfombras;
exports.getCojines = getCojines;
exports.getCameras = getCameras;
exports.getCortinas = getCortinas;
exports.getColchas = getColchas;
exports.getEdredones = getEdredones;
exports.getMantelesMesa = getMantelesMesa;
exports.getPictures = getPictures;

var _rosyOnline = require("../database/rosyOnline");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _paginatedResults = require("../middlewares/paginatedResults");

var _consolidate = _interopRequireDefault(require("consolidate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getRopaDama(_x, _x2) {
  return _getRopaDama.apply(this, arguments);
}

function _getRopaDama() {
  _getRopaDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var getRopaDamaQuery, ropaDama;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            getRopaDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 15 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 15 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 15 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context.next = 4;
            return _rosyOnline.rosyOnline.query(getRopaDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            ropaDama = _context.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, ropaDama)
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getRopaDama.apply(this, arguments);
}

function getBlusasDama(_x3, _x4) {
  return _getBlusasDama.apply(this, arguments);
}

function _getBlusasDama() {
  _getBlusasDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var getBlusasDamaQuery, blusasDama;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            getBlusasDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 24 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 24 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 24 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context2.next = 4;
            return _rosyOnline.rosyOnline.query(getBlusasDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            blusasDama = _context2.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, blusasDama)
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getBlusasDama.apply(this, arguments);
}

function getChaquetasDama(_x5, _x6) {
  return _getChaquetasDama.apply(this, arguments);
}

function _getChaquetasDama() {
  _getChaquetasDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var getChaquetasDamaQuery, chaquetasDama;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            getChaquetasDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 490 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 490 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 490 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context3.next = 4;
            return _rosyOnline.rosyOnline.query(getChaquetasDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            chaquetasDama = _context3.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, chaquetasDama)
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getChaquetasDama.apply(this, arguments);
}

function getRopaInterioDama(_x7, _x8) {
  return _getRopaInterioDama.apply(this, arguments);
}

function _getRopaInterioDama() {
  _getRopaInterioDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var getRopaInterioDamaQuery, ropaInterioDama;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            getRopaInterioDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 19 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 19 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 19 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context4.next = 4;
            return _rosyOnline.rosyOnline.query(getRopaInterioDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            ropaInterioDama = _context4.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, ropaInterioDama)
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _getRopaInterioDama.apply(this, arguments);
}

function getFaldasDama(_x9, _x10) {
  return _getFaldasDama.apply(this, arguments);
}

function _getFaldasDama() {
  _getFaldasDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var getFaldasDamaQuery, faldasDama;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            getFaldasDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 20 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 20 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 20 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context5.next = 4;
            return _rosyOnline.rosyOnline.query(getFaldasDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            faldasDama = _context5.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, faldasDama)
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _getFaldasDama.apply(this, arguments);
}

function getShortsDama(_x11, _x12) {
  return _getShortsDama.apply(this, arguments);
}

function _getShortsDama() {
  _getShortsDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var getShortsDamaQuery, shortsDama;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            getShortsDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 21 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 21 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 21 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context6.next = 4;
            return _rosyOnline.rosyOnline.query(getShortsDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            shortsDama = _context6.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, shortsDama)
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _getShortsDama.apply(this, arguments);
}

function getJumpersDama(_x13, _x14) {
  return _getJumpersDama.apply(this, arguments);
}

function _getJumpersDama() {
  _getJumpersDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var getJumpersDamaQuery, jumpersDama;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            getJumpersDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 134 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 134 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 134 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context7.next = 4;
            return _rosyOnline.rosyOnline.query(getJumpersDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            jumpersDama = _context7.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, jumpersDama)
            });
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return _getJumpersDama.apply(this, arguments);
}

function getJeansDama(_x15, _x16) {
  return _getJeansDama.apply(this, arguments);
}

function _getJeansDama() {
  _getJeansDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res) {
    var getJeansDamaQuery, jeansDama;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            getJeansDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 23 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 23 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 23 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context8.next = 4;
            return _rosyOnline.rosyOnline.query(getJeansDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            jeansDama = _context8.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, jeansDama)
            });
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return _getJeansDama.apply(this, arguments);
}

function getPantalonesTelaDama(_x17, _x18) {
  return _getPantalonesTelaDama.apply(this, arguments);
}

function _getPantalonesTelaDama() {
  _getPantalonesTelaDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(req, res) {
    var getPantalonesTelaDamaQuery, pantalonesTelaDama;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            getPantalonesTelaDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 22 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 22 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 22 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context9.next = 4;
            return _rosyOnline.rosyOnline.query(getPantalonesTelaDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            pantalonesTelaDama = _context9.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, pantalonesTelaDama)
            });
            _context9.next = 11;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 8]]);
  }));
  return _getPantalonesTelaDama.apply(this, arguments);
}

function getLegginsDama(_x19, _x20) {
  return _getLegginsDama.apply(this, arguments);
}

function _getLegginsDama() {
  _getLegginsDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(req, res) {
    var getLegginsDamaQuery, legginsDama;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            getLegginsDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 1131 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 1131 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 1131 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context10.next = 4;
            return _rosyOnline.rosyOnline.query(getLegginsDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            legginsDama = _context10.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, legginsDama)
            });
            _context10.next = 11;
            break;

          case 8:
            _context10.prev = 8;
            _context10.t0 = _context10["catch"](0);
            console.log(_context10.t0);

          case 11:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 8]]);
  }));
  return _getLegginsDama.apply(this, arguments);
}

function getVestidosDama(_x21, _x22) {
  return _getVestidosDama.apply(this, arguments);
}

function _getVestidosDama() {
  _getVestidosDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11(req, res) {
    var getVestidosDamaQuery, vestidosDama;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            getVestidosDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 129 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 129 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 129 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context11.next = 4;
            return _rosyOnline.rosyOnline.query(getVestidosDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            vestidosDama = _context11.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, vestidosDama)
            });
            _context11.next = 11;
            break;

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);

          case 11:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 8]]);
  }));
  return _getVestidosDama.apply(this, arguments);
}

function getVestidosNocheDama(_x23, _x24) {
  return _getVestidosNocheDama.apply(this, arguments);
}

function _getVestidosNocheDama() {
  _getVestidosNocheDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12(req, res) {
    var getVestidosNocheDamaQuery, vestidosNocheDama;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            getVestidosNocheDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 26 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 26 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 26 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context12.next = 4;
            return _rosyOnline.rosyOnline.query(getVestidosNocheDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            vestidosNocheDama = _context12.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, vestidosNocheDama)
            });
            _context12.next = 11;
            break;

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](0);
            console.log(_context12.t0);

          case 11:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 8]]);
  }));
  return _getVestidosNocheDama.apply(this, arguments);
}

function getVestidosNoviaDama(_x25, _x26) {
  return _getVestidosNoviaDama.apply(this, arguments);
}

function _getVestidosNoviaDama() {
  _getVestidosNoviaDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13(req, res) {
    var getVestidosNoviaDamaQuery, vestidosNoviaDama;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            getVestidosNoviaDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 752 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 752 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 752 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context13.next = 4;
            return _rosyOnline.rosyOnline.query(getVestidosNoviaDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            vestidosNoviaDama = _context13.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, vestidosNoviaDama)
            });
            _context13.next = 11;
            break;

          case 8:
            _context13.prev = 8;
            _context13.t0 = _context13["catch"](0);
            console.log(_context13.t0);

          case 11:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 8]]);
  }));
  return _getVestidosNoviaDama.apply(this, arguments);
}

function getPijamasDama(_x27, _x28) {
  return _getPijamasDama.apply(this, arguments);
}

function _getPijamasDama() {
  _getPijamasDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee14(req, res) {
    var getPijamasDamaQuery, pijamasDama;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            getPijamasDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 995 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 995 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 995 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context14.next = 4;
            return _rosyOnline.rosyOnline.query(getPijamasDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            pijamasDama = _context14.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, pijamasDama)
            });
            _context14.next = 11;
            break;

          case 8:
            _context14.prev = 8;
            _context14.t0 = _context14["catch"](0);
            console.log(_context14.t0);

          case 11:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 8]]);
  }));
  return _getPijamasDama.apply(this, arguments);
}

function getCarterasDama(_x29, _x30) {
  return _getCarterasDama.apply(this, arguments);
}

function _getCarterasDama() {
  _getCarterasDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee15(req, res) {
    var getCarterasDamaQuery, carterasDama;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            getCarterasDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 791 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 791 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 791 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context15.next = 4;
            return _rosyOnline.rosyOnline.query(getCarterasDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            carterasDama = _context15.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, carterasDama)
            });
            _context15.next = 11;
            break;

          case 8:
            _context15.prev = 8;
            _context15.t0 = _context15["catch"](0);
            console.log(_context15.t0);

          case 11:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 8]]);
  }));
  return _getCarterasDama.apply(this, arguments);
}

function getTrajeBanioDama(_x31, _x32) {
  return _getTrajeBanioDama.apply(this, arguments);
}

function _getTrajeBanioDama() {
  _getTrajeBanioDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee16(req, res) {
    var getTrajeBanioDamaQuery, trajeBanioDama;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            getTrajeBanioDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 970 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 970 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 970 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context16.next = 4;
            return _rosyOnline.rosyOnline.query(getTrajeBanioDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            trajeBanioDama = _context16.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, trajeBanioDama)
            });
            _context16.next = 11;
            break;

          case 8:
            _context16.prev = 8;
            _context16.t0 = _context16["catch"](0);
            console.log(_context16.t0);

          case 11:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[0, 8]]);
  }));
  return _getTrajeBanioDama.apply(this, arguments);
}

function getTallasEspecialesDama(_x33, _x34) {
  return _getTallasEspecialesDama.apply(this, arguments);
}

function _getTallasEspecialesDama() {
  _getTallasEspecialesDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee17(req, res) {
    var getTallasEspecialesDamaQuery, tallasEspecialesDama;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            getTallasEspecialesDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 607 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 607 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 607 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context17.next = 4;
            return _rosyOnline.rosyOnline.query(getTallasEspecialesDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            tallasEspecialesDama = _context17.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, tallasEspecialesDama)
            });
            _context17.next = 11;
            break;

          case 8:
            _context17.prev = 8;
            _context17.t0 = _context17["catch"](0);
            console.log(_context17.t0);

          case 11:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[0, 8]]);
  }));
  return _getTallasEspecialesDama.apply(this, arguments);
}

function getRopaDeportivaDama(_x35, _x36) {
  return _getRopaDeportivaDama.apply(this, arguments);
}

function _getRopaDeportivaDama() {
  _getRopaDeportivaDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee18(req, res) {
    var getRopaDeportivaDamaQuery, ropaDeportivaDama;
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            getRopaDeportivaDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 25 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 25 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 25 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context18.next = 4;
            return _rosyOnline.rosyOnline.query(getRopaDeportivaDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            ropaDeportivaDama = _context18.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, ropaDeportivaDama)
            });
            _context18.next = 11;
            break;

          case 8:
            _context18.prev = 8;
            _context18.t0 = _context18["catch"](0);
            console.log(_context18.t0);

          case 11:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[0, 8]]);
  }));
  return _getRopaDeportivaDama.apply(this, arguments);
}

function getRopaInviernoDama(_x37, _x38) {
  return _getRopaInviernoDama.apply(this, arguments);
}

function _getRopaInviernoDama() {
  _getRopaInviernoDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee19(req, res) {
    var getRopaInviernoDamaQuery, ropaInviernoDama;
    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            getRopaInviernoDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 928 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 928 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 928 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context19.next = 4;
            return _rosyOnline.rosyOnline.query(getRopaInviernoDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            ropaInviernoDama = _context19.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, ropaInviernoDama)
            });
            _context19.next = 11;
            break;

          case 8:
            _context19.prev = 8;
            _context19.t0 = _context19["catch"](0);
            console.log(_context19.t0);

          case 11:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[0, 8]]);
  }));
  return _getRopaInviernoDama.apply(this, arguments);
}

function getRopaHospitalDama(_x39, _x40) {
  return _getRopaHospitalDama.apply(this, arguments);
}

function _getRopaHospitalDama() {
  _getRopaHospitalDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee20(req, res) {
    var getRopaHospitalDamaQuery, ropaHospitalDama;
    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            getRopaHospitalDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 969 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 969 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 969 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context20.next = 4;
            return _rosyOnline.rosyOnline.query(getRopaHospitalDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            ropaHospitalDama = _context20.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, ropaHospitalDama)
            });
            _context20.next = 11;
            break;

          case 8:
            _context20.prev = 8;
            _context20.t0 = _context20["catch"](0);
            console.log(_context20.t0);

          case 11:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[0, 8]]);
  }));
  return _getRopaHospitalDama.apply(this, arguments);
}

function getRopaCaballero(_x41, _x42) {
  return _getRopaCaballero.apply(this, arguments);
}

function _getRopaCaballero() {
  _getRopaCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee21(req, res) {
    var getRopaCaballeroQuery, ropaCaballero;
    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            getRopaCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 27 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 27 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 27 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context21.next = 4;
            return _rosyOnline.rosyOnline.query(getRopaCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            ropaCaballero = _context21.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, ropaCaballero)
            });
            _context21.next = 11;
            break;

          case 8:
            _context21.prev = 8;
            _context21.t0 = _context21["catch"](0);
            console.log(_context21.t0);

          case 11:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[0, 8]]);
  }));
  return _getRopaCaballero.apply(this, arguments);
}

function getCamisasCaballero(_x43, _x44) {
  return _getCamisasCaballero.apply(this, arguments);
}

function _getCamisasCaballero() {
  _getCamisasCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee22(req, res) {
    var getCamisasCaballeroQuery, camisasCaballero;
    return regeneratorRuntime.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            getCamisasCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 34 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 34 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 34 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context22.next = 4;
            return _rosyOnline.rosyOnline.query(getCamisasCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            camisasCaballero = _context22.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, camisasCaballero)
            });
            _context22.next = 11;
            break;

          case 8:
            _context22.prev = 8;
            _context22.t0 = _context22["catch"](0);
            console.log(_context22.t0);

          case 11:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[0, 8]]);
  }));
  return _getCamisasCaballero.apply(this, arguments);
}

function getCamisasFutbolCaballero(_x45, _x46) {
  return _getCamisasFutbolCaballero.apply(this, arguments);
}

function _getCamisasFutbolCaballero() {
  _getCamisasFutbolCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee23(req, res) {
    var getCamisasFutbolCaballeroQuery, camisasFutbolCaballero;
    return regeneratorRuntime.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.prev = 0;
            getCamisasFutbolCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 1395 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 1395 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 1395 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context23.next = 4;
            return _rosyOnline.rosyOnline.query(getCamisasFutbolCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            camisasFutbolCaballero = _context23.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, camisasFutbolCaballero)
            });
            _context23.next = 11;
            break;

          case 8:
            _context23.prev = 8;
            _context23.t0 = _context23["catch"](0);
            console.log(_context23.t0);

          case 11:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[0, 8]]);
  }));
  return _getCamisasFutbolCaballero.apply(this, arguments);
}

function getChaquetasCaballero(_x47, _x48) {
  return _getChaquetasCaballero.apply(this, arguments);
}

function _getChaquetasCaballero() {
  _getChaquetasCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee24(req, res) {
    var getChaquetasCaballeroQuery, chaquetasCaballero;
    return regeneratorRuntime.wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            getChaquetasCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 753 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 753 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 753 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context24.next = 4;
            return _rosyOnline.rosyOnline.query(getChaquetasCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            chaquetasCaballero = _context24.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, chaquetasCaballero)
            });
            _context24.next = 11;
            break;

          case 8:
            _context24.prev = 8;
            _context24.t0 = _context24["catch"](0);
            console.log(_context24.t0);

          case 11:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, null, [[0, 8]]);
  }));
  return _getChaquetasCaballero.apply(this, arguments);
}

function getSacosVestirCaballero(_x49, _x50) {
  return _getSacosVestirCaballero.apply(this, arguments);
}

function _getSacosVestirCaballero() {
  _getSacosVestirCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee25(req, res) {
    var getSacosVestirCaballeroQuery, sacosVestirCaballero;
    return regeneratorRuntime.wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.prev = 0;
            getSacosVestirCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 31 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 31 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 31 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context25.next = 4;
            return _rosyOnline.rosyOnline.query(getSacosVestirCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            sacosVestirCaballero = _context25.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, sacosVestirCaballero)
            });
            _context25.next = 11;
            break;

          case 8:
            _context25.prev = 8;
            _context25.t0 = _context25["catch"](0);
            console.log(_context25.t0);

          case 11:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25, null, [[0, 8]]);
  }));
  return _getSacosVestirCaballero.apply(this, arguments);
}

function getBoxersCaballero(_x51, _x52) {
  return _getBoxersCaballero.apply(this, arguments);
}

function _getBoxersCaballero() {
  _getBoxersCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee26(req, res) {
    var getBoxersCaballeroQuery, boxersCaballero;
    return regeneratorRuntime.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.prev = 0;
            getBoxersCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 28 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 28 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 28 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context26.next = 4;
            return _rosyOnline.rosyOnline.query(getBoxersCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            boxersCaballero = _context26.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, boxersCaballero)
            });
            _context26.next = 11;
            break;

          case 8:
            _context26.prev = 8;
            _context26.t0 = _context26["catch"](0);
            console.log(_context26.t0);

          case 11:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26, null, [[0, 8]]);
  }));
  return _getBoxersCaballero.apply(this, arguments);
}

function getShortsCaballero(_x53, _x54) {
  return _getShortsCaballero.apply(this, arguments);
}

function _getShortsCaballero() {
  _getShortsCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee27(req, res) {
    var getShortsCaballeroQuery, shortsCaballero;
    return regeneratorRuntime.wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            _context27.prev = 0;
            getShortsCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 32 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 32 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 32 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context27.next = 4;
            return _rosyOnline.rosyOnline.query(getShortsCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            shortsCaballero = _context27.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, shortsCaballero)
            });
            _context27.next = 11;
            break;

          case 8:
            _context27.prev = 8;
            _context27.t0 = _context27["catch"](0);
            console.log(_context27.t0);

          case 11:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27, null, [[0, 8]]);
  }));
  return _getShortsCaballero.apply(this, arguments);
}

function getJeansCaballero(_x55, _x56) {
  return _getJeansCaballero.apply(this, arguments);
}

function _getJeansCaballero() {
  _getJeansCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee28(req, res) {
    var getJeansCaballeroQuery, jeansCaballero;
    return regeneratorRuntime.wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _context28.prev = 0;
            getJeansCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 35 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 35 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 35 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context28.next = 4;
            return _rosyOnline.rosyOnline.query(getJeansCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            jeansCaballero = _context28.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, jeansCaballero)
            });
            _context28.next = 11;
            break;

          case 8:
            _context28.prev = 8;
            _context28.t0 = _context28["catch"](0);
            console.log(_context28.t0);

          case 11:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28, null, [[0, 8]]);
  }));
  return _getJeansCaballero.apply(this, arguments);
}

function getPantalonesTelaCaballero(_x57, _x58) {
  return _getPantalonesTelaCaballero.apply(this, arguments);
}

function _getPantalonesTelaCaballero() {
  _getPantalonesTelaCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee29(req, res) {
    var getPantalonesTelaCaballeroQuery, pantalonesTelaCaballero;
    return regeneratorRuntime.wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _context29.prev = 0;
            getPantalonesTelaCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 33 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 33 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 33 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context29.next = 4;
            return _rosyOnline.rosyOnline.query(getPantalonesTelaCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            pantalonesTelaCaballero = _context29.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, pantalonesTelaCaballero)
            });
            _context29.next = 11;
            break;

          case 8:
            _context29.prev = 8;
            _context29.t0 = _context29["catch"](0);
            console.log(_context29.t0);

          case 11:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29, null, [[0, 8]]);
  }));
  return _getPantalonesTelaCaballero.apply(this, arguments);
}

function getPijamasCaballero(_x59, _x60) {
  return _getPijamasCaballero.apply(this, arguments);
}

function _getPijamasCaballero() {
  _getPijamasCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee30(req, res) {
    var getPijamasCaballeroQuery, pijamasCaballero;
    return regeneratorRuntime.wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.prev = 0;
            getPijamasCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 994 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 994 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 994 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context30.next = 4;
            return _rosyOnline.rosyOnline.query(getPijamasCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            pijamasCaballero = _context30.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, pijamasCaballero)
            });
            _context30.next = 11;
            break;

          case 8:
            _context30.prev = 8;
            _context30.t0 = _context30["catch"](0);
            console.log(_context30.t0);

          case 11:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30, null, [[0, 8]]);
  }));
  return _getPijamasCaballero.apply(this, arguments);
}

function getTallasEspecialesCaballero(_x61, _x62) {
  return _getTallasEspecialesCaballero.apply(this, arguments);
}

function _getTallasEspecialesCaballero() {
  _getTallasEspecialesCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee31(req, res) {
    var getTallasEspecialesCaballeroQuery, tallasEspecialesCaballero;
    return regeneratorRuntime.wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            _context31.prev = 0;
            getTallasEspecialesCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 608 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 608 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 608 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context31.next = 4;
            return _rosyOnline.rosyOnline.query(getTallasEspecialesCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            tallasEspecialesCaballero = _context31.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, tallasEspecialesCaballero)
            });
            _context31.next = 11;
            break;

          case 8:
            _context31.prev = 8;
            _context31.t0 = _context31["catch"](0);
            console.log(_context31.t0);

          case 11:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31, null, [[0, 8]]);
  }));
  return _getTallasEspecialesCaballero.apply(this, arguments);
}

function getRopaDeportivaCaballero(_x63, _x64) {
  return _getRopaDeportivaCaballero.apply(this, arguments);
}

function _getRopaDeportivaCaballero() {
  _getRopaDeportivaCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee32(req, res) {
    var getRopaDeportivaCaballeroQuery, ropaDeportivaCaballero;
    return regeneratorRuntime.wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            _context32.prev = 0;
            getRopaDeportivaCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 30 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 30 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 30 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context32.next = 4;
            return _rosyOnline.rosyOnline.query(getRopaDeportivaCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            ropaDeportivaCaballero = _context32.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, ropaDeportivaCaballero)
            });
            _context32.next = 11;
            break;

          case 8:
            _context32.prev = 8;
            _context32.t0 = _context32["catch"](0);
            console.log(_context32.t0);

          case 11:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32, null, [[0, 8]]);
  }));
  return _getRopaDeportivaCaballero.apply(this, arguments);
}

function getRopaInviernoCaballero(_x65, _x66) {
  return _getRopaInviernoCaballero.apply(this, arguments);
}

function _getRopaInviernoCaballero() {
  _getRopaInviernoCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee33(req, res) {
    var getRopaInviernoCaballeroQuery, ropaInviernoCaballero;
    return regeneratorRuntime.wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            _context33.prev = 0;
            getRopaInviernoCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 927 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 927 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 927 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context33.next = 4;
            return _rosyOnline.rosyOnline.query(getRopaInviernoCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            ropaInviernoCaballero = _context33.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, ropaInviernoCaballero)
            });
            _context33.next = 11;
            break;

          case 8:
            _context33.prev = 8;
            _context33.t0 = _context33["catch"](0);
            console.log(_context33.t0);

          case 11:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33, null, [[0, 8]]);
  }));
  return _getRopaInviernoCaballero.apply(this, arguments);
}

function getCorbatasCaballero(_x67, _x68) {
  return _getCorbatasCaballero.apply(this, arguments);
}

function _getCorbatasCaballero() {
  _getCorbatasCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee34(req, res) {
    var getCorbatasCaballeroQuery, corbatasCaballero;
    return regeneratorRuntime.wrap(function _callee34$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            _context34.prev = 0;
            getCorbatasCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 1450 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 1450 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 1450 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context34.next = 4;
            return _rosyOnline.rosyOnline.query(getCorbatasCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            corbatasCaballero = _context34.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, corbatasCaballero)
            });
            _context34.next = 11;
            break;

          case 8:
            _context34.prev = 8;
            _context34.t0 = _context34["catch"](0);
            console.log(_context34.t0);

          case 11:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee34, null, [[0, 8]]);
  }));
  return _getCorbatasCaballero.apply(this, arguments);
}

function getRopaNino(_x69, _x70) {
  return _getRopaNino.apply(this, arguments);
}

function _getRopaNino() {
  _getRopaNino = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee35(req, res) {
    var getRopaNinoQuery, ropaNino;
    return regeneratorRuntime.wrap(function _callee35$(_context35) {
      while (1) {
        switch (_context35.prev = _context35.next) {
          case 0:
            _context35.prev = 0;
            getRopaNinoQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 42 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 42 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 42 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context35.next = 4;
            return _rosyOnline.rosyOnline.query(getRopaNinoQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            ropaNino = _context35.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, ropaNino)
            });
            _context35.next = 11;
            break;

          case 8:
            _context35.prev = 8;
            _context35.t0 = _context35["catch"](0);
            console.log(_context35.t0);

          case 11:
          case "end":
            return _context35.stop();
        }
      }
    }, _callee35, null, [[0, 8]]);
  }));
  return _getRopaNino.apply(this, arguments);
}

function getCamisasNino(_x71, _x72) {
  return _getCamisasNino.apply(this, arguments);
}

function _getCamisasNino() {
  _getCamisasNino = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee36(req, res) {
    var getCamisasNinoQuery, camisasNino;
    return regeneratorRuntime.wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            _context36.prev = 0;
            getCamisasNinoQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 46 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 46 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 46 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context36.next = 4;
            return _rosyOnline.rosyOnline.query(getCamisasNinoQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            camisasNino = _context36.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, camisasNino)
            });
            _context36.next = 11;
            break;

          case 8:
            _context36.prev = 8;
            _context36.t0 = _context36["catch"](0);
            console.log(_context36.t0);

          case 11:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36, null, [[0, 8]]);
  }));
  return _getCamisasNino.apply(this, arguments);
}

function getMamelucosNino(_x73, _x74) {
  return _getMamelucosNino.apply(this, arguments);
}

function _getMamelucosNino() {
  _getMamelucosNino = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee37(req, res) {
    var getMamelucosNinoQuery, mamelucosNino;
    return regeneratorRuntime.wrap(function _callee37$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            _context37.prev = 0;
            getMamelucosNinoQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 757 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 757 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 757 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context37.next = 4;
            return _rosyOnline.rosyOnline.query(getMamelucosNinoQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            mamelucosNino = _context37.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, mamelucosNino)
            });
            _context37.next = 11;
            break;

          case 8:
            _context37.prev = 8;
            _context37.t0 = _context37["catch"](0);
            console.log(_context37.t0);

          case 11:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee37, null, [[0, 8]]);
  }));
  return _getMamelucosNino.apply(this, arguments);
}

function getShortsNino(_x75, _x76) {
  return _getShortsNino.apply(this, arguments);
}

function _getShortsNino() {
  _getShortsNino = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee38(req, res) {
    var getShortsNinoQuery, shortsNino;
    return regeneratorRuntime.wrap(function _callee38$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            _context38.prev = 0;
            getShortsNinoQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 45 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 45 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 45 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context38.next = 4;
            return _rosyOnline.rosyOnline.query(getShortsNinoQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            shortsNino = _context38.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, shortsNino)
            });
            _context38.next = 11;
            break;

          case 8:
            _context38.prev = 8;
            _context38.t0 = _context38["catch"](0);
            console.log(_context38.t0);

          case 11:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee38, null, [[0, 8]]);
  }));
  return _getShortsNino.apply(this, arguments);
}

function getJeansNino(_x77, _x78) {
  return _getJeansNino.apply(this, arguments);
}

function _getJeansNino() {
  _getJeansNino = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee39(req, res) {
    var getJeansNinoQuery, jeansNino;
    return regeneratorRuntime.wrap(function _callee39$(_context39) {
      while (1) {
        switch (_context39.prev = _context39.next) {
          case 0:
            _context39.prev = 0;
            getJeansNinoQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 228 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 228 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 228 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context39.next = 4;
            return _rosyOnline.rosyOnline.query(getJeansNinoQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            jeansNino = _context39.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, jeansNino)
            });
            _context39.next = 11;
            break;

          case 8:
            _context39.prev = 8;
            _context39.t0 = _context39["catch"](0);
            console.log(_context39.t0);

          case 11:
          case "end":
            return _context39.stop();
        }
      }
    }, _callee39, null, [[0, 8]]);
  }));
  return _getJeansNino.apply(this, arguments);
}

function getPantalonesTelaNino(_x79, _x80) {
  return _getPantalonesTelaNino.apply(this, arguments);
}

function _getPantalonesTelaNino() {
  _getPantalonesTelaNino = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee40(req, res) {
    var getPantalonesTelaNinoQuery, pantalonesTelaNino;
    return regeneratorRuntime.wrap(function _callee40$(_context40) {
      while (1) {
        switch (_context40.prev = _context40.next) {
          case 0:
            _context40.prev = 0;
            getPantalonesTelaNinoQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 44 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 44 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 44 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context40.next = 4;
            return _rosyOnline.rosyOnline.query(getPantalonesTelaNinoQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            pantalonesTelaNino = _context40.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, pantalonesTelaNino)
            });
            _context40.next = 11;
            break;

          case 8:
            _context40.prev = 8;
            _context40.t0 = _context40["catch"](0);
            console.log(_context40.t0);

          case 11:
          case "end":
            return _context40.stop();
        }
      }
    }, _callee40, null, [[0, 8]]);
  }));
  return _getPantalonesTelaNino.apply(this, arguments);
}

function getPijamasNino(_x81, _x82) {
  return _getPijamasNino.apply(this, arguments);
}

function _getPijamasNino() {
  _getPijamasNino = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee41(req, res) {
    var getPijamasNinoQuery, pijamasNino;
    return regeneratorRuntime.wrap(function _callee41$(_context41) {
      while (1) {
        switch (_context41.prev = _context41.next) {
          case 0:
            _context41.prev = 0;
            getPijamasNinoQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 756 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 756 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 756 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context41.next = 4;
            return _rosyOnline.rosyOnline.query(getPijamasNinoQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            pijamasNino = _context41.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, pijamasNino)
            });
            _context41.next = 11;
            break;

          case 8:
            _context41.prev = 8;
            _context41.t0 = _context41["catch"](0);
            console.log(_context41.t0);

          case 11:
          case "end":
            return _context41.stop();
        }
      }
    }, _callee41, null, [[0, 8]]);
  }));
  return _getPijamasNino.apply(this, arguments);
}

function getRopaInviernoNino(_x83, _x84) {
  return _getRopaInviernoNino.apply(this, arguments);
}

function _getRopaInviernoNino() {
  _getRopaInviernoNino = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee42(req, res) {
    var getRopaInviernoNinoQuery, ropaInviernoNino;
    return regeneratorRuntime.wrap(function _callee42$(_context42) {
      while (1) {
        switch (_context42.prev = _context42.next) {
          case 0:
            _context42.prev = 0;
            getRopaInviernoNinoQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 930 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 930 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 930 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context42.next = 4;
            return _rosyOnline.rosyOnline.query(getRopaInviernoNinoQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            ropaInviernoNino = _context42.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, ropaInviernoNino)
            });
            _context42.next = 11;
            break;

          case 8:
            _context42.prev = 8;
            _context42.t0 = _context42["catch"](0);
            console.log(_context42.t0);

          case 11:
          case "end":
            return _context42.stop();
        }
      }
    }, _callee42, null, [[0, 8]]);
  }));
  return _getRopaInviernoNino.apply(this, arguments);
}

function getRopaNina(_x85, _x86) {
  return _getRopaNina.apply(this, arguments);
}

function _getRopaNina() {
  _getRopaNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee43(req, res) {
    var getRopaNinaQuery, ropaNina;
    return regeneratorRuntime.wrap(function _callee43$(_context43) {
      while (1) {
        switch (_context43.prev = _context43.next) {
          case 0:
            _context43.prev = 0;
            getRopaNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 36 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 36 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 36 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context43.next = 4;
            return _rosyOnline.rosyOnline.query(getRopaNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            ropaNina = _context43.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, ropaNina)
            });
            _context43.next = 11;
            break;

          case 8:
            _context43.prev = 8;
            _context43.t0 = _context43["catch"](0);
            console.log(_context43.t0);

          case 11:
          case "end":
            return _context43.stop();
        }
      }
    }, _callee43, null, [[0, 8]]);
  }));
  return _getRopaNina.apply(this, arguments);
}

function getBlusasNina(_x87, _x88) {
  return _getBlusasNina.apply(this, arguments);
}

function _getBlusasNina() {
  _getBlusasNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee44(req, res) {
    var getBlusasNinaQuery, blusasNina;
    return regeneratorRuntime.wrap(function _callee44$(_context44) {
      while (1) {
        switch (_context44.prev = _context44.next) {
          case 0:
            _context44.prev = 0;
            getBlusasNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 40 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 40 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 40 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context44.next = 4;
            return _rosyOnline.rosyOnline.query(getBlusasNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            blusasNina = _context44.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, blusasNina)
            });
            _context44.next = 11;
            break;

          case 8:
            _context44.prev = 8;
            _context44.t0 = _context44["catch"](0);
            console.log(_context44.t0);

          case 11:
          case "end":
            return _context44.stop();
        }
      }
    }, _callee44, null, [[0, 8]]);
  }));
  return _getBlusasNina.apply(this, arguments);
}

function getChaquetasNina(_x89, _x90) {
  return _getChaquetasNina.apply(this, arguments);
}

function _getChaquetasNina() {
  _getChaquetasNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee45(req, res) {
    var getChaquetasNinaQuery, chaquetasNina;
    return regeneratorRuntime.wrap(function _callee45$(_context45) {
      while (1) {
        switch (_context45.prev = _context45.next) {
          case 0:
            _context45.prev = 0;
            getChaquetasNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 691 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 691 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 691 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context45.next = 4;
            return _rosyOnline.rosyOnline.query(getChaquetasNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            chaquetasNina = _context45.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, chaquetasNina)
            });
            _context45.next = 11;
            break;

          case 8:
            _context45.prev = 8;
            _context45.t0 = _context45["catch"](0);
            console.log(_context45.t0);

          case 11:
          case "end":
            return _context45.stop();
        }
      }
    }, _callee45, null, [[0, 8]]);
  }));
  return _getChaquetasNina.apply(this, arguments);
}

function getMamelucosNina(_x91, _x92) {
  return _getMamelucosNina.apply(this, arguments);
}

function _getMamelucosNina() {
  _getMamelucosNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee46(req, res) {
    var getMamelucosNinaQuery, mamelucosNina;
    return regeneratorRuntime.wrap(function _callee46$(_context46) {
      while (1) {
        switch (_context46.prev = _context46.next) {
          case 0:
            _context46.prev = 0;
            getMamelucosNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 754 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 754 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 754 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context46.next = 4;
            return _rosyOnline.rosyOnline.query(getMamelucosNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            mamelucosNina = _context46.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, mamelucosNina)
            });
            _context46.next = 11;
            break;

          case 8:
            _context46.prev = 8;
            _context46.t0 = _context46["catch"](0);
            console.log(_context46.t0);

          case 11:
          case "end":
            return _context46.stop();
        }
      }
    }, _callee46, null, [[0, 8]]);
  }));
  return _getMamelucosNina.apply(this, arguments);
}

function getFaldasNina(_x93, _x94) {
  return _getFaldasNina.apply(this, arguments);
}

function _getFaldasNina() {
  _getFaldasNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee47(req, res) {
    var getFaldasNinaQuery, faldasNina;
    return regeneratorRuntime.wrap(function _callee47$(_context47) {
      while (1) {
        switch (_context47.prev = _context47.next) {
          case 0:
            _context47.prev = 0;
            getFaldasNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 39 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 39 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 39 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context47.next = 4;
            return _rosyOnline.rosyOnline.query(getFaldasNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            faldasNina = _context47.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, faldasNina)
            });
            _context47.next = 11;
            break;

          case 8:
            _context47.prev = 8;
            _context47.t0 = _context47["catch"](0);
            console.log(_context47.t0);

          case 11:
          case "end":
            return _context47.stop();
        }
      }
    }, _callee47, null, [[0, 8]]);
  }));
  return _getFaldasNina.apply(this, arguments);
}

function getShortsNina(_x95, _x96) {
  return _getShortsNina.apply(this, arguments);
}

function _getShortsNina() {
  _getShortsNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee48(req, res) {
    var getShortsNinaQuery, shortsNina;
    return regeneratorRuntime.wrap(function _callee48$(_context48) {
      while (1) {
        switch (_context48.prev = _context48.next) {
          case 0:
            _context48.prev = 0;
            getShortsNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 229 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 229 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 229 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context48.next = 4;
            return _rosyOnline.rosyOnline.query(getShortsNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            shortsNina = _context48.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, shortsNina)
            });
            _context48.next = 11;
            break;

          case 8:
            _context48.prev = 8;
            _context48.t0 = _context48["catch"](0);
            console.log(_context48.t0);

          case 11:
          case "end":
            return _context48.stop();
        }
      }
    }, _callee48, null, [[0, 8]]);
  }));
  return _getShortsNina.apply(this, arguments);
}

function getJumpersNina(_x97, _x98) {
  return _getJumpersNina.apply(this, arguments);
}

function _getJumpersNina() {
  _getJumpersNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee49(req, res) {
    var getJumpersNinaQuery, jumpersNina;
    return regeneratorRuntime.wrap(function _callee49$(_context49) {
      while (1) {
        switch (_context49.prev = _context49.next) {
          case 0:
            _context49.prev = 0;
            getJumpersNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 452 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 452 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 452 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context49.next = 4;
            return _rosyOnline.rosyOnline.query(getJumpersNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            jumpersNina = _context49.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, jumpersNina)
            });
            _context49.next = 11;
            break;

          case 8:
            _context49.prev = 8;
            _context49.t0 = _context49["catch"](0);
            console.log(_context49.t0);

          case 11:
          case "end":
            return _context49.stop();
        }
      }
    }, _callee49, null, [[0, 8]]);
  }));
  return _getJumpersNina.apply(this, arguments);
}

function getJeansNina(_x99, _x100) {
  return _getJeansNina.apply(this, arguments);
}

function _getJeansNina() {
  _getJeansNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee50(req, res) {
    var getJeansNinaQuery, jeansNina;
    return regeneratorRuntime.wrap(function _callee50$(_context50) {
      while (1) {
        switch (_context50.prev = _context50.next) {
          case 0:
            _context50.prev = 0;
            getJeansNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 38 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 38 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 38 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context50.next = 4;
            return _rosyOnline.rosyOnline.query(getJeansNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            jeansNina = _context50.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, jeansNina)
            });
            _context50.next = 11;
            break;

          case 8:
            _context50.prev = 8;
            _context50.t0 = _context50["catch"](0);
            console.log(_context50.t0);

          case 11:
          case "end":
            return _context50.stop();
        }
      }
    }, _callee50, null, [[0, 8]]);
  }));
  return _getJeansNina.apply(this, arguments);
}

function getPantalonesTelaNina(_x101, _x102) {
  return _getPantalonesTelaNina.apply(this, arguments);
}

function _getPantalonesTelaNina() {
  _getPantalonesTelaNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee51(req, res) {
    var getPantalonesTelaNinaQuery, pantalonesTelaNina;
    return regeneratorRuntime.wrap(function _callee51$(_context51) {
      while (1) {
        switch (_context51.prev = _context51.next) {
          case 0:
            _context51.prev = 0;
            getPantalonesTelaNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 226 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 226 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 226 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context51.next = 4;
            return _rosyOnline.rosyOnline.query(getPantalonesTelaNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            pantalonesTelaNina = _context51.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, pantalonesTelaNina)
            });
            _context51.next = 11;
            break;

          case 8:
            _context51.prev = 8;
            _context51.t0 = _context51["catch"](0);
            console.log(_context51.t0);

          case 11:
          case "end":
            return _context51.stop();
        }
      }
    }, _callee51, null, [[0, 8]]);
  }));
  return _getPantalonesTelaNina.apply(this, arguments);
}

function getVestidosNina(_x103, _x104) {
  return _getVestidosNina.apply(this, arguments);
}

function _getVestidosNina() {
  _getVestidosNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee52(req, res) {
    var getVestidosNinaQuery, vestidosNina;
    return regeneratorRuntime.wrap(function _callee52$(_context52) {
      while (1) {
        switch (_context52.prev = _context52.next) {
          case 0:
            _context52.prev = 0;
            getVestidosNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 41 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 41 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 41 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context52.next = 4;
            return _rosyOnline.rosyOnline.query(getVestidosNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            vestidosNina = _context52.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, vestidosNina)
            });
            _context52.next = 11;
            break;

          case 8:
            _context52.prev = 8;
            _context52.t0 = _context52["catch"](0);
            console.log(_context52.t0);

          case 11:
          case "end":
            return _context52.stop();
        }
      }
    }, _callee52, null, [[0, 8]]);
  }));
  return _getVestidosNina.apply(this, arguments);
}

function getPijamasNina(_x105, _x106) {
  return _getPijamasNina.apply(this, arguments);
}

function _getPijamasNina() {
  _getPijamasNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee53(req, res) {
    var getPijamasNinaQuery, pijamasNina;
    return regeneratorRuntime.wrap(function _callee53$(_context53) {
      while (1) {
        switch (_context53.prev = _context53.next) {
          case 0:
            _context53.prev = 0;
            getPijamasNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 37 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 37 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 37 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context53.next = 4;
            return _rosyOnline.rosyOnline.query(getPijamasNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            pijamasNina = _context53.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, pijamasNina)
            });
            _context53.next = 11;
            break;

          case 8:
            _context53.prev = 8;
            _context53.t0 = _context53["catch"](0);
            console.log(_context53.t0);

          case 11:
          case "end":
            return _context53.stop();
        }
      }
    }, _callee53, null, [[0, 8]]);
  }));
  return _getPijamasNina.apply(this, arguments);
}

function getTrajesBanioNina(_x107, _x108) {
  return _getTrajesBanioNina.apply(this, arguments);
}

function _getTrajesBanioNina() {
  _getTrajesBanioNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee54(req, res) {
    var getTrajesBanioNinaQuery, trajesBanioNina;
    return regeneratorRuntime.wrap(function _callee54$(_context54) {
      while (1) {
        switch (_context54.prev = _context54.next) {
          case 0:
            _context54.prev = 0;
            getTrajesBanioNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 971 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 971 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 971 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context54.next = 4;
            return _rosyOnline.rosyOnline.query(getTrajesBanioNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            trajesBanioNina = _context54.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, trajesBanioNina)
            });
            _context54.next = 11;
            break;

          case 8:
            _context54.prev = 8;
            _context54.t0 = _context54["catch"](0);
            console.log(_context54.t0);

          case 11:
          case "end":
            return _context54.stop();
        }
      }
    }, _callee54, null, [[0, 8]]);
  }));
  return _getTrajesBanioNina.apply(this, arguments);
}

function getRopaInviernoNina(_x109, _x110) {
  return _getRopaInviernoNina.apply(this, arguments);
}

function _getRopaInviernoNina() {
  _getRopaInviernoNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee55(req, res) {
    var getRopaInviernoNinaQuery, ropaInviernoNina;
    return regeneratorRuntime.wrap(function _callee55$(_context55) {
      while (1) {
        switch (_context55.prev = _context55.next) {
          case 0:
            _context55.prev = 0;
            getRopaInviernoNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 929 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 929 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 929 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context55.next = 4;
            return _rosyOnline.rosyOnline.query(getRopaInviernoNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            ropaInviernoNina = _context55.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, ropaInviernoNina)
            });
            _context55.next = 11;
            break;

          case 8:
            _context55.prev = 8;
            _context55.t0 = _context55["catch"](0);
            console.log(_context55.t0);

          case 11:
          case "end":
            return _context55.stop();
        }
      }
    }, _callee55, null, [[0, 8]]);
  }));
  return _getRopaInviernoNina.apply(this, arguments);
}

function getZapatos(_x111, _x112) {
  return _getZapatos.apply(this, arguments);
}

function _getZapatos() {
  _getZapatos = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee56(req, res) {
    var getZapatosQuery, zapatos;
    return regeneratorRuntime.wrap(function _callee56$(_context56) {
      while (1) {
        switch (_context56.prev = _context56.next) {
          case 0:
            _context56.prev = 0;
            getZapatosQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 54 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 54 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 54 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context56.next = 4;
            return _rosyOnline.rosyOnline.query(getZapatosQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            zapatos = _context56.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, zapatos)
            });
            _context56.next = 11;
            break;

          case 8:
            _context56.prev = 8;
            _context56.t0 = _context56["catch"](0);
            console.log(_context56.t0);

          case 11:
          case "end":
            return _context56.stop();
        }
      }
    }, _callee56, null, [[0, 8]]);
  }));
  return _getZapatos.apply(this, arguments);
}

function getZapatosCaballero(_x113, _x114) {
  return _getZapatosCaballero.apply(this, arguments);
}

function _getZapatosCaballero() {
  _getZapatosCaballero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee57(req, res) {
    var getZapatosCaballeroQuery, zapatosCaballero;
    return regeneratorRuntime.wrap(function _callee57$(_context57) {
      while (1) {
        switch (_context57.prev = _context57.next) {
          case 0:
            _context57.prev = 0;
            getZapatosCaballeroQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 86 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 86 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 86 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context57.next = 4;
            return _rosyOnline.rosyOnline.query(getZapatosCaballeroQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            zapatosCaballero = _context57.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, zapatosCaballero)
            });
            _context57.next = 11;
            break;

          case 8:
            _context57.prev = 8;
            _context57.t0 = _context57["catch"](0);
            console.log(_context57.t0);

          case 11:
          case "end":
            return _context57.stop();
        }
      }
    }, _callee57, null, [[0, 8]]);
  }));
  return _getZapatosCaballero.apply(this, arguments);
}

function getZapatosDama(_x115, _x116) {
  return _getZapatosDama.apply(this, arguments);
}

function _getZapatosDama() {
  _getZapatosDama = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee58(req, res) {
    var getZapatosDamaQuery, zapatosDama;
    return regeneratorRuntime.wrap(function _callee58$(_context58) {
      while (1) {
        switch (_context58.prev = _context58.next) {
          case 0:
            _context58.prev = 0;
            getZapatosDamaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 85 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 85 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 85 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context58.next = 4;
            return _rosyOnline.rosyOnline.query(getZapatosDamaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            zapatosDama = _context58.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, zapatosDama)
            });
            _context58.next = 11;
            break;

          case 8:
            _context58.prev = 8;
            _context58.t0 = _context58["catch"](0);
            console.log(_context58.t0);

          case 11:
          case "end":
            return _context58.stop();
        }
      }
    }, _callee58, null, [[0, 8]]);
  }));
  return _getZapatosDama.apply(this, arguments);
}

function getZapatosNino(_x117, _x118) {
  return _getZapatosNino.apply(this, arguments);
}

function _getZapatosNino() {
  _getZapatosNino = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee59(req, res) {
    var getZapatosNinoQuery, zapatosNino;
    return regeneratorRuntime.wrap(function _callee59$(_context59) {
      while (1) {
        switch (_context59.prev = _context59.next) {
          case 0:
            _context59.prev = 0;
            getZapatosNinoQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 87 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 87 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 87 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context59.next = 4;
            return _rosyOnline.rosyOnline.query(getZapatosNinoQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            zapatosNino = _context59.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, zapatosNino)
            });
            _context59.next = 11;
            break;

          case 8:
            _context59.prev = 8;
            _context59.t0 = _context59["catch"](0);
            console.log(_context59.t0);

          case 11:
          case "end":
            return _context59.stop();
        }
      }
    }, _callee59, null, [[0, 8]]);
  }));
  return _getZapatosNino.apply(this, arguments);
}

function getZapatosNina(_x119, _x120) {
  return _getZapatosNina.apply(this, arguments);
}

function _getZapatosNina() {
  _getZapatosNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee60(req, res) {
    var getZapatosNinaQuery, zapatosNina;
    return regeneratorRuntime.wrap(function _callee60$(_context60) {
      while (1) {
        switch (_context60.prev = _context60.next) {
          case 0:
            _context60.prev = 0;
            getZapatosNinaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 88 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 88 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 88 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context60.next = 4;
            return _rosyOnline.rosyOnline.query(getZapatosNinaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            zapatosNina = _context60.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, zapatosNina)
            });
            _context60.next = 11;
            break;

          case 8:
            _context60.prev = 8;
            _context60.t0 = _context60["catch"](0);
            console.log(_context60.t0);

          case 11:
          case "end":
            return _context60.stop();
        }
      }
    }, _callee60, null, [[0, 8]]);
  }));
  return _getZapatosNina.apply(this, arguments);
}

function getVariedades(_x121, _x122) {
  return _getVariedades.apply(this, arguments);
}

function _getVariedades() {
  _getVariedades = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee61(req, res) {
    var getVariedadesQuery, variedades;
    return regeneratorRuntime.wrap(function _callee61$(_context61) {
      while (1) {
        switch (_context61.prev = _context61.next) {
          case 0:
            _context61.prev = 0;
            getVariedadesQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 1447 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 1447 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 1447 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context61.next = 4;
            return _rosyOnline.rosyOnline.query(getVariedadesQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            variedades = _context61.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, variedades)
            });
            _context61.next = 11;
            break;

          case 8:
            _context61.prev = 8;
            _context61.t0 = _context61["catch"](0);
            console.log(_context61.t0);

          case 11:
          case "end":
            return _context61.stop();
        }
      }
    }, _callee61, null, [[0, 8]]);
  }));
  return _getVariedades.apply(this, arguments);
}

function getHogar(_x123, _x124) {
  return _getHogar.apply(this, arguments);
}

function _getHogar() {
  _getHogar = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee62(req, res) {
    var getHogarQuery, hogar;
    return regeneratorRuntime.wrap(function _callee62$(_context62) {
      while (1) {
        switch (_context62.prev = _context62.next) {
          case 0:
            _context62.prev = 0;
            getHogarQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 78 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 78 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 78 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context62.next = 4;
            return _rosyOnline.rosyOnline.query(getHogarQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            hogar = _context62.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, hogar)
            });
            _context62.next = 11;
            break;

          case 8:
            _context62.prev = 8;
            _context62.t0 = _context62["catch"](0);
            console.log(_context62.t0);

          case 11:
          case "end":
            return _context62.stop();
        }
      }
    }, _callee62, null, [[0, 8]]);
  }));
  return _getHogar.apply(this, arguments);
}

function getToallas(_x125, _x126) {
  return _getToallas.apply(this, arguments);
}

function _getToallas() {
  _getToallas = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee63(req, res) {
    var getToallasQuery, toallas;
    return regeneratorRuntime.wrap(function _callee63$(_context63) {
      while (1) {
        switch (_context63.prev = _context63.next) {
          case 0:
            _context63.prev = 0;
            getToallasQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 760 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 760 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 760 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context63.next = 4;
            return _rosyOnline.rosyOnline.query(getToallasQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            toallas = _context63.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, toallas)
            });
            _context63.next = 11;
            break;

          case 8:
            _context63.prev = 8;
            _context63.t0 = _context63["catch"](0);
            console.log(_context63.t0);

          case 11:
          case "end":
            return _context63.stop();
        }
      }
    }, _callee63, null, [[0, 8]]);
  }));
  return _getToallas.apply(this, arguments);
}

function getAlfombras(_x127, _x128) {
  return _getAlfombras.apply(this, arguments);
}

function _getAlfombras() {
  _getAlfombras = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee64(req, res) {
    var getAlfombrasQuery, alfombras;
    return regeneratorRuntime.wrap(function _callee64$(_context64) {
      while (1) {
        switch (_context64.prev = _context64.next) {
          case 0:
            _context64.prev = 0;
            getAlfombrasQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 933 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 933 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 933 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context64.next = 4;
            return _rosyOnline.rosyOnline.query(getAlfombrasQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            alfombras = _context64.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, alfombras)
            });
            _context64.next = 11;
            break;

          case 8:
            _context64.prev = 8;
            _context64.t0 = _context64["catch"](0);
            console.log(_context64.t0);

          case 11:
          case "end":
            return _context64.stop();
        }
      }
    }, _callee64, null, [[0, 8]]);
  }));
  return _getAlfombras.apply(this, arguments);
}

function getCojines(_x129, _x130) {
  return _getCojines.apply(this, arguments);
}

function _getCojines() {
  _getCojines = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee65(req, res) {
    var getCojinesQuery, cojines;
    return regeneratorRuntime.wrap(function _callee65$(_context65) {
      while (1) {
        switch (_context65.prev = _context65.next) {
          case 0:
            _context65.prev = 0;
            getCojinesQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 52 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 52 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 52 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context65.next = 4;
            return _rosyOnline.rosyOnline.query(getCojinesQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            cojines = _context65.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, cojines)
            });
            _context65.next = 11;
            break;

          case 8:
            _context65.prev = 8;
            _context65.t0 = _context65["catch"](0);
            console.log(_context65.t0);

          case 11:
          case "end":
            return _context65.stop();
        }
      }
    }, _callee65, null, [[0, 8]]);
  }));
  return _getCojines.apply(this, arguments);
}

function getCameras(_x131, _x132) {
  return _getCameras.apply(this, arguments);
}

function _getCameras() {
  _getCameras = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee66(req, res) {
    var getCamerasQuery, cameras;
    return regeneratorRuntime.wrap(function _callee66$(_context66) {
      while (1) {
        switch (_context66.prev = _context66.next) {
          case 0:
            _context66.prev = 0;
            getCamerasQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 759 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 759 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 759 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context66.next = 4;
            return _rosyOnline.rosyOnline.query(getCamerasQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            cameras = _context66.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, cameras)
            });
            _context66.next = 11;
            break;

          case 8:
            _context66.prev = 8;
            _context66.t0 = _context66["catch"](0);
            console.log(_context66.t0);

          case 11:
          case "end":
            return _context66.stop();
        }
      }
    }, _callee66, null, [[0, 8]]);
  }));
  return _getCameras.apply(this, arguments);
}

function getCortinas(_x133, _x134) {
  return _getCortinas.apply(this, arguments);
}

function _getCortinas() {
  _getCortinas = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee67(req, res) {
    var getCortinasQuery, cortinas;
    return regeneratorRuntime.wrap(function _callee67$(_context67) {
      while (1) {
        switch (_context67.prev = _context67.next) {
          case 0:
            _context67.prev = 0;
            getCortinasQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 50 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 50 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 50 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context67.next = 4;
            return _rosyOnline.rosyOnline.query(getCortinasQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            cortinas = _context67.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, cortinas)
            });
            _context67.next = 11;
            break;

          case 8:
            _context67.prev = 8;
            _context67.t0 = _context67["catch"](0);
            console.log(_context67.t0);

          case 11:
          case "end":
            return _context67.stop();
        }
      }
    }, _callee67, null, [[0, 8]]);
  }));
  return _getCortinas.apply(this, arguments);
}

function getColchas(_x135, _x136) {
  return _getColchas.apply(this, arguments);
}

function _getColchas() {
  _getColchas = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee68(req, res) {
    var getColchasQuery, colchas;
    return regeneratorRuntime.wrap(function _callee68$(_context68) {
      while (1) {
        switch (_context68.prev = _context68.next) {
          case 0:
            _context68.prev = 0;
            getColchasQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 931 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 931 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 931 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context68.next = 4;
            return _rosyOnline.rosyOnline.query(getColchasQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            colchas = _context68.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, colchas)
            });
            _context68.next = 11;
            break;

          case 8:
            _context68.prev = 8;
            _context68.t0 = _context68["catch"](0);
            console.log(_context68.t0);

          case 11:
          case "end":
            return _context68.stop();
        }
      }
    }, _callee68, null, [[0, 8]]);
  }));
  return _getColchas.apply(this, arguments);
}

function getEdredones(_x137, _x138) {
  return _getEdredones.apply(this, arguments);
}

function _getEdredones() {
  _getEdredones = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee69(req, res) {
    var getEdredonesQuery, edredones;
    return regeneratorRuntime.wrap(function _callee69$(_context69) {
      while (1) {
        switch (_context69.prev = _context69.next) {
          case 0:
            _context69.prev = 0;
            getEdredonesQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 758 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 758 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 758 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context69.next = 4;
            return _rosyOnline.rosyOnline.query(getEdredonesQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            edredones = _context69.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, edredones)
            });
            _context69.next = 11;
            break;

          case 8:
            _context69.prev = 8;
            _context69.t0 = _context69["catch"](0);
            console.log(_context69.t0);

          case 11:
          case "end":
            return _context69.stop();
        }
      }
    }, _callee69, null, [[0, 8]]);
  }));
  return _getEdredones.apply(this, arguments);
}

function getMantelesMesa(_x139, _x140) {
  return _getMantelesMesa.apply(this, arguments);
}

function _getMantelesMesa() {
  _getMantelesMesa = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee70(req, res) {
    var getMantelesMesaQuery, mantelesMesa;
    return regeneratorRuntime.wrap(function _callee70$(_context70) {
      while (1) {
        switch (_context70.prev = _context70.next) {
          case 0:
            _context70.prev = 0;
            getMantelesMesaQuery = "SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover " + "FROM ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 761 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_price\" " + ") A " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 761 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_stock\" " + ") B " + "ON A.object_id = B.object_id " + "INNER JOIN ( " + "SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover " + "FROM  wp_j8dwsram9m_term_relationships A " + "INNER JOIN wp_j8dwsram9m_posts B " + "ON A.object_id = B.ID " + "INNER JOIN wp_j8dwsram9m_postmeta C " + "ON B.ID = C.post_id " + "WHERE  A.term_taxonomy_id = 761 " + "AND B.post_type = \"product\" " + "AND B.post_status = \"publish\" " + "AND C.meta_key = \"_thumbnail_id\" " + ") C " + "ON A.object_id = C.object_id";
            _context70.next = 4;
            return _rosyOnline.rosyOnline.query(getMantelesMesaQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            mantelesMesa = _context70.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, mantelesMesa)
            });
            _context70.next = 11;
            break;

          case 8:
            _context70.prev = 8;
            _context70.t0 = _context70["catch"](0);
            console.log(_context70.t0);

          case 11:
          case "end":
            return _context70.stop();
        }
      }
    }, _callee70, null, [[0, 8]]);
  }));
  return _getMantelesMesa.apply(this, arguments);
}

function getPictures(_x141, _x142) {
  return _getPictures.apply(this, arguments);
}

function _getPictures() {
  _getPictures = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee71(req, res) {
    var ID, urlCover, urlsCarrousel, pictureCoverQuery, pictureCarrouselQuery, pictureCover, pictureCarrousel, idPictureCover, urlPictureCoverQuery, urlPictureCover, urlsPicturesCarrousel, index, urlPictureCarrouselQuery, urlPictureCarrousel, urlPicture;
    return regeneratorRuntime.wrap(function _callee71$(_context71) {
      while (1) {
        switch (_context71.prev = _context71.next) {
          case 0:
            _context71.prev = 0;
            ID = req.params.ID;
            urlCover = "";
            urlsCarrousel = [];
            pictureCoverQuery = "SELECT meta_id, post_id, meta_key, meta_value " + "FROM  wp_j8dwsram9m_postmeta " + "WHERE post_id = ".concat(ID, " AND meta_key = '_thumbnail_id'");
            pictureCarrouselQuery = "SELECT meta_id, post_id, meta_key, meta_value " + "FROM  wp_j8dwsram9m_postmeta " + "WHERE post_id = ".concat(ID, " AND meta_key = '_product_image_gallery'");
            _context71.next = 8;
            return _rosyOnline.rosyOnline.query(pictureCoverQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 8:
            pictureCover = _context71.sent;
            _context71.next = 11;
            return _rosyOnline.rosyOnline.query(pictureCarrouselQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 11:
            pictureCarrousel = _context71.sent;

            if (!(pictureCover.length > 0)) {
              _context71.next = 20;
              break;
            }

            idPictureCover = parseInt(pictureCover[0].meta_value);
            urlPictureCoverQuery = "SELECT guid " + "FROM wp_j8dwsram9m_posts " + "WHERE ID = ".concat(idPictureCover);
            _context71.next = 17;
            return _rosyOnline.rosyOnline.query(urlPictureCoverQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 17:
            urlPictureCover = _context71.sent;
            urlCover = urlPictureCover[0].guid;
            urlCover = urlCover.replace("https://tiendasrosy.com", "https://secureservercdn.net/198.71.233.135/4b6.96c.myftpupload.com");

          case 20:
            if (!(pictureCarrousel.length > 0)) {
              _context71.next = 39;
              break;
            }

            urlsPicturesCarrousel = pictureCarrousel[0].meta_value;
            urlsCarrousel = urlsPicturesCarrousel.split(",");
            index = 0;

          case 24:
            if (!(index < urlsCarrousel.length)) {
              _context71.next = 39;
              break;
            }

            if (!(urlsCarrousel[index] !== "")) {
              _context71.next = 35;
              break;
            }

            urlPictureCarrouselQuery = "SELECT guid " + "FROM wp_j8dwsram9m_posts " + "WHERE ID = ".concat(urlsCarrousel[index]);
            _context71.next = 29;
            return _rosyOnline.rosyOnline.query(urlPictureCarrouselQuery, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 29:
            urlPictureCarrousel = _context71.sent;
            urlPicture = urlPictureCarrousel[0].guid;
            urlPicture = urlPicture.replace("https://tiendasrosy.com", "https://secureservercdn.net/198.71.233.135/4b6.96c.myftpupload.com");
            urlsCarrousel[index] = urlPicture;
            _context71.next = 36;
            break;

          case 35:
            urlsCarrousel.splice(index, 1);

          case 36:
            index++;
            _context71.next = 24;
            break;

          case 39:
            res.json({
              cover: urlCover,
              carrousel: urlsCarrousel
            });
            _context71.next = 45;
            break;

          case 42:
            _context71.prev = 42;
            _context71.t0 = _context71["catch"](0);
            console.log(_context71.t0);

          case 45:
          case "end":
            return _context71.stop();
        }
      }
    }, _callee71, null, [[0, 42]]);
  }));
  return _getPictures.apply(this, arguments);
}