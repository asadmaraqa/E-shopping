import { NotFoundError } from '../helpers/apiError'
import User, { UserDocument } from '../models/User'

const create = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

const findAll = async (): Promise<UserDocument[]> => {
  return User.find().sort({ name: 1 }).populate('order')
}

const findById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId).populate('order')

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}
const update = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}
const deleteUser = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findByIdAndDelete(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

const findOne = async (email: string): Promise<UserDocument | null> => {
  return User.findOne({ email })
}
const save = async (product: UserDocument): Promise<UserDocument> => {
  return product.save()
}
export default {
  findAll,
  create,
  findById,
  update,
  deleteUser,
  findOne,
  save,
}
