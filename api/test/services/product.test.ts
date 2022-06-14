import Product from '../../src/models/Product'
import ProductService from '../../src/services/product'
import connect, { MongodHelper } from '../db-helper'

const fakeProductId = '5e57b77b5744fa0b461c7906'

async function createProduct() {
  const product = new Product({
    name: 'jeans',
    description: 'string',
    price: 454,
    stock: 54,
    categories: ['men', 'women'],
    variants: ['red'],
    sizes: ['m'],
    img: 'fgdsfgdsfgs',
  })
  return await ProductService.create(product)
}

describe('product service', () => {
  let mongodHelper: MongodHelper

  beforeAll(async () => {
    mongodHelper = await connect()
  })

  afterEach(async () => {
    await mongodHelper.clearDatabase()
  })

  afterAll(async () => {
    await mongodHelper.closeDatabase()
  })

  it('should create a product', async () => {
    const product = await createProduct()
    expect(product).toHaveProperty('_id')
    expect(product).toHaveProperty('name', 'jeans')
    expect(product).toHaveProperty('price', 454)
  })

  it('should get a product with id', async () => {
    const product = await createProduct()
    const found = await ProductService.findById(product._id)
    expect(found.name).toEqual(product.name)
    expect(found._id).toEqual(product._id)
  })
  it('should not get a non-existing product', async () => {
    expect.assertions(1)
    return ProductService.findById(fakeProductId).catch((e) => {
      expect(e.message).toMatch(`Product ${fakeProductId} not found`)
    })
  })

  it('should update an existing product', async () => {
    const product = await createProduct()
    const update = {
      name: 'nice dress',
      price: 600,
    }
    const updated = await ProductService.updateProduct(product._id, update)
    expect(updated).toHaveProperty('_id', product._id)
    expect(updated).toHaveProperty('name', 'nice dress')
    expect(updated).toHaveProperty('price', 600)
  })
  it('should not update a non-existing product', async () => {
    expect.assertions(1)
    const update = {
      name: 'shirt',
      price: 600
    }

    return ProductService.updateProduct(fakeProductId, update).catch((e) => {
      expect(e.message).toMatch(`Product ${fakeProductId} not found. im so sorry!`)
    })
  })
  it('should delete an existing product', async () => {
    expect.assertions(1)
    const product = await createProduct()
    await ProductService.deleteProduct(product._id)
    return ProductService.findById(product._id).catch((e) => {
      expect(e.message).toBe(`Product ${product._id} not found. im so sorry!`)
    })
  })
})
