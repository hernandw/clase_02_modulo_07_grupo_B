import express from 'express'
import { getEditProductForm} from '../controllers/productController.js'

const router = express.Router()


router.get('/productos/editar/:id', getEditProductForm)


export default router