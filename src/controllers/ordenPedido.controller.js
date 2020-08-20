const OrdenPedido = require('../models/OrdenPedidos');
const OrdenPedidoDetalle = require('../models/OrdenPedidoDetalle');
const OrdenPedidoMayoreo = require('../models/OrdenPedidoMayoreo');
import { paginatedResults } from '../middlewares/paginatedResults';

export async function getPedidos(req, res){
    const { idUser } = req.body;
    const pedidos = await OrdenPedido.find({idUser: idUser}).sort({fecha:-1})
    res.json({
        data: paginatedResults(req.query.page, req.query.limit, pedidos)
    });
}

export async function getItemsPedido(req, res){
    const { idPedido } = req.body;
    const itemsPedidoDetalle = await OrdenPedidoDetalle.find({idPedido: idPedido})
    const itemsPedidoMayoreo = await OrdenPedidoMayoreo.find({idPedido: idPedido})
    const itemsPedido = itemsPedidoDetalle.concat(itemsPedidoMayoreo)
    res.json(itemsPedido)
}

export async function getOrderPay(req, res){
    const pedidos = await OrdenPedido.find().sort({ordenPago:-1})
    if (pedidos[0]) {
        res.json(pedidos[0].ordenPago + 1)
    }else {
        res.json(1)
    }
}