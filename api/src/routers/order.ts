import express from 'express'
import {
  createOrder,
  findById,
  updateOrder,
  deleteOrder,
  findByNumber,
} from '../controllers/order'

const router = express.Router()

router.post('/', createOrder)
router.get('/:orderId', findById)
router.put('/:orderId', updateOrder)
router.delete('/:orderId', deleteOrder)
router.get('/search/:orderNumber', findByNumber)

export default router
