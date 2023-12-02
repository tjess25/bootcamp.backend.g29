module.exports = {
    getAll: async (req, res, next) => {
       next({status: 200, send: {msg: "Publicaciones", data: []}}) 
    },
    getById: async (req, res, next) => {
        next({status: 200, send: {msg: "Publicacion encontrada", data: {}}}) 
    },
    post: async (req, res, next) => {
        next({status: 200, send: {msg: "Publicacion creada", data: {}}}) 
    },
    put: async (req, res, next) => {
        next({status: 200, send: {msg: "Publicacion actualizada", data: {}}}) 
    },
    delete: async (req, res, next) => {
        next({status: 200, send: {msg: "Publicacion eliminada", data: {}}}) 
    },
}