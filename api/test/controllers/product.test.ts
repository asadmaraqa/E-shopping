import request from 'supertest'

import { ProductDocument } from '../../src/models/Product'
import app from '../../src/app'
import connect, { MongodHelper } from '../db-helper'

async function createProduct(override?: Partial<ProductDocument>) {
  let product = {
    name: 'jeans',
    description: 'string',
    price: 454,
    stock: 54,
    categories: ['men', 'women'],
    variants: ['red'],
    sizes: ['m'],
    img: 'fgdsfgdsfgs',
  }

  if (override) {
    product = { ...product, ...override }
  }

  return await request(app).post('/api/v1/products').send(product)
}

describe('product controller', () => {
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
    const res = await createProduct()
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('_id')
    expect(res.body.name).toMatch('jeans')
  })
  it('should not create a product with wrong data', async () => {
    const res = await request(app)
      .post('/api/v1/products')
      .send({
        name: 'jeans',
        description: 'string',

        sizes: ['m'],
        img: 'fgdsfgdsfgs',
      })
    expect(res.status).toBe(400)
  })
  it('should get back an existing product', async () => {
    let res = await createProduct()
    expect(res.status).toBe(200)

    const productId = res.body._id
    res = await request(app).get(`/api/v1/products/${productId}`)

    expect(res.body._id).toEqual(productId)
  })
  it('should not get back a non-existing product', async () => {
    const fakeProductId = '5e57b77b5744fa0b461c7906'
    const res = await request(app).get(`/api/v1/products/${fakeProductId}`)
    expect(res.status).toBe(404)
  })
  it('should get back all the products', async () => {
    const res1 = await createProduct({
      name: 'tshirt',
      price: 454,
      stock: 54,
      categories: ['men', 'women'],
      variants: ['red'],
      sizes: ['m'],
      description: 'comfy tshirt',
    })
    const res2 = await createProduct({
      name: 'dress',
      price: 454,
      stock: 54,
      categories: ['men', 'women'],
      variants: ['red'],
      sizes: ['m'],
      description: 'comfy dress',
    })

    const res3 = await request(app).get('/api/v1/products')
    expect(res3.body.length).toEqual(2)
    expect(res3.body[0]._id).toEqual(res2.body._id)
    expect(res3.body[1]._id).toEqual(res1.body._id)
  })

  it('should update an existing product', async () => {
    let res = await createProduct({
      name: 'dress',
      price: 454,
      stock: 54,
      categories: ['men', 'women'],
      variants: ['red'],
      sizes: ['m'],
      description: 'comfy dress',
    })
    expect(res.status).toBe(200)

    const productId = res.body._id
    const update = {
      name: 'pants',
      price: 60

    }

    res = await request(app).patch(`/api/v1/products/${productId}`).send(update)
    expect(res.status).toEqual(200)

  })


  it('should delete an existing product', async () => {
    let res = await createProduct()
    expect(res.status).toBe(200)
    const productId = res.body._id

    res = await request(app).delete(`/api/v1/products/${productId}`)

    expect(res.status).toEqual(200)

    res = await request(app).get(`/api/v1/products/${productId}`)
    expect(res.status).toBe(404)
  })
})
