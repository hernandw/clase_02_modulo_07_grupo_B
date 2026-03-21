import express from 'express'
import { getEditProductForm, createProduct, getProductPage} from '../controllers/productController.js'

const router = express.Router()


router.get('/productos/editar/:id', getEditProductForm)

router.post('/productos/nuevo', createProduct)

router.get('/products', getProductPage)


export default router