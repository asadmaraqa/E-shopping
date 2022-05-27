/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  firstName: string
  secondName: string
  address: { city: string; street: string }
  phone: number
  email: string
  role: boolean
  isBanned: boolean
  order: string[]
  createdAt: number
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
      city: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      street: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15,
      },
    },
    phone: {
      type: Number,
      required: true,
      minlength: 6,
      maxlength: 15,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
      required: true,
    },
    isBanned: {
      type: Boolean,
      default: false,
      required: true,
    },
    order: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Order',
    },
  },
  { timestamps: true }
)

export default mongoose.model<UserDocument>('User', userSchema)
