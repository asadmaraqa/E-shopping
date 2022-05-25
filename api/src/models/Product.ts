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
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
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
  variants: {
    type: String,
    enum: ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
  },
  sizes: [String],
  img: {
    type: String,
    required: false,
  },
})

export default mongoose.model<ProductDocument>('Product', productSchema)
