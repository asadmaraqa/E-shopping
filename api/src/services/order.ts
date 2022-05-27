import { NotFoundError } from '../helpers/apiError'
import Order, { OrderDocument } from '../models/Order'

const create = async (order: OrderDocument): Promise<OrderDocument> => {
  return order.save()
}

const findById = async (orderId: string): Promise<OrderDocument> => {
  const foundOrder = await Order.findById(orderId).populate('user product')

  if (!foundOrder) {
    throw new NotFoundError(`Order ${orderId} not found`)
  }

  return foundOrder
}
const findByNumber = async (orderNumber: number): Promise<OrderDocument[]> => {
  const foundOrder = await Order.aggregate([
    { $match: { number: orderNumber } },
    { $sort: { number: 1 } },
    { $project: { number: 1, createdAt: 1, user: 1, product: 1, _id: 0 } },
  ])

  if (!foundOrder) {
    throw new NotFoundError(`Order ${orderNumber} not found`)
  }

  return foundOrder
}

const update = async (
  orderId: string,
  update: Partial<OrderDocument>
): Promise<OrderDocument | null> => {
  const foundOrder = await Order.findByIdAndUpdate(orderId, update, {
    new: true,
  })

  if (!foundOrder) {
    throw new NotFoundError(`Order ${orderId} not found`)
  }

  return foundOrder
}
const deleteOrder = async (orderId: string): Promise<OrderDocument | null> => {
  const foundOrder = Order.findByIdAndDelete(orderId)

  if (!foundOrder) {
    throw new NotFoundError(`Order ${orderId} not found`)
  }

  return foundOrder
}

export default {
  create,
  findById,
  update,
  deleteOrder,
  findByNumber,
}
