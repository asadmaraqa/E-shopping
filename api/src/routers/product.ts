import express from 'express'
import verifyAuth from '../middlewares/verifyAuth'
import {
  create,
  deleteProduct,
  findAll,
  findById,
  findByName,
  updateProduct,
} from '../controllers/product'

const router = express.Router()

router.get('/', findAll)
router.get('/:productId', findById)
router.get('/search/:productName', findByName)
router.post('/', create)
router.delete('/:productId', deleteProduct)
router.put('/:productId', updateProduct)

export default router
