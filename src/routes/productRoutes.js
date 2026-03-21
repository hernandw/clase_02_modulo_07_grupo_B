import express from 'express'
import { getEditProductForm, createProduct, getProductPage, deleteProduct} from '../controllers/productController.js'

const router = express.Router()


router.get('/productos/editar/:id', getEditProductForm)

router.post('/productos/nuevo', createProduct)

router.get('/products', getProductPage)

router.post('/products/eliminar/:id', deleteProduct)


export default router