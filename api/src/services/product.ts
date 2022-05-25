import { NotFoundError } from '../helpers/apiError'
import Product, { ProductDocument } from '../models/Product'

const findAll = async (): Promise<ProductDocument[]> => {
  return Product.find().sort({ name: 1 })
}
const create = async (product: ProductDocument): Promise<ProductDocument> => {
  return product.save()
}

const findById = async (productId: string): Promise<ProductDocument> => {
  const foundProduct = await Product.findById(productId)
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found. im so sorry!`)
  }
  return foundProduct
}

const findByName = async (productName: string): Promise<ProductDocument[]> => {
  const foundProduct = await Product.aggregate([
    {
      $match: {
        $or: [
          { name: { $regex: '.*' + productName + '.*', $options: 'i' } },
          { description: { $regex: '.*' + productName + '.*', $options: 'i' } },
        ],
      },
    },
    { $sort: { name: 1 } },
    { $project: { name: 1, description: 1, variants: 1, sizes: 1, _id: 0 } },
  ])

  if (!foundProduct || foundProduct.length === 0) {
    throw new NotFoundError(`Product ${productName} not found. im so sorry!`)
  }
  return foundProduct
}

const deleteProduct = async (productId: string): Promise<ProductDocument> => {
  const foundProduct = await Product.findByIdAndDelete(productId)
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found. im so sorry!`)
  }
  return foundProduct
}
const updateProduct = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  const foundProduct = await Product.findByIdAndUpdate(productId, update, {
    new: true,
  })
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found. im so sorry!`)
  }
  return foundProduct
}
export default {
  findAll,
  create,
  findById,
  findByName,
  deleteProduct,
  updateProduct,
}
