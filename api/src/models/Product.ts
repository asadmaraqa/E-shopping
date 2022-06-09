/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  description: string
  price: number
  stock: number
  categories: string[]
  variants: string[]
  sizes: string[]
  img: string
  orders: string[]
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  categories: [String],
  sizes: {
    type: [String],
    enum: ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
  },
  variants: [String],
  img: {
    type: String,
    required: true,
  },
  orders: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Order',
  },
})

export default mongoose.model<ProductDocument>('Product', productSchema)
