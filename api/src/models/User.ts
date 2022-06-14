/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  firstName: string
  secondName: string
  address: string
  phone: number
  email: string
  role: boolean
  isBanned: boolean
  orders: string[]
  createdAt: number
  picture: string
}

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      index: true,
      required: true,
      minlength: 2,
      maxlength: 10,
    },
    secondName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 10,
    },
    address: {
      type: String,
      minlength: 2,
      maxlength: 15,
    },
    phone: {
      type: Number,
      minlength: 6,
      maxlength: 15,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    picture: {
      type: String,
    },
    orders: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Order',
    },
  },
  { timestamps: true }
)

export default mongoose.model<UserDocument>('User', userSchema)
