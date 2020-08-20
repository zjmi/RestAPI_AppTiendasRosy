"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginatedResults = paginatedResults;

//Middleware para paginar un objeto Json
function paginatedResults(page, limit, objectJson) {
  page = parseInt(page);
  limit = parseInt(limit);
  var startIndex = (page - 1) * limit;
  var endIndex = page * limit;
  var inventario = objectJson.slice(startIndex, endIndex);
  return inventario;
}