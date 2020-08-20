
//Middleware para paginar un objeto Json
export function paginatedResults(page, limit, objectJson){
    page = parseInt(page)
    limit = parseInt(limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const inventario = objectJson.slice(startIndex, endIndex)

    return inventario;
}