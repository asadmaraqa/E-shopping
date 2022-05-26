import express from 'express'
import {
  createOrder,
  findById,
  updateOrder,
  deleteOrder,
} from '../controllers/order'

const router = express.Router()

router.post('/', createOrder)
router.get('/:orderId', findById)
router.put('/:orderId', updateOrder)
router.delete('/:orderId', deleteOrder)

export default router
