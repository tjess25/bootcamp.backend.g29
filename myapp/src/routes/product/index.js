const express = require('express')
const router = express.Router()
const productController = require('../../controllers/products')

router.get('/getbyid/:id', productController.getById)
router.post('/', productController.post)





module.exports = router

