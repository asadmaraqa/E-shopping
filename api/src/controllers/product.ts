import { Request, Response, NextFunction } from 'express'
import Product from '../models/Product'
import { BadRequestError } from '../helpers/apiError'
import ProductService from '../services/product'

export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ProductService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ProductService.findById(req.params.productId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const findByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ProductService.findByName(req.params.productName))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const img = req.file?.filename
    const product = new Product({
      ...req.body,
      img,
    })
    await ProductService.create(product)
    res.json(product)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(ProductService.deleteProduct(req.params.productId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const info = req.body

    const productId = req.params.productId
    const updates = {
      ...info,
    }
    if (req.file) {
      const img = req.file.filename
      updates.img = img
    }
    const updatedProduct = ProductService.updateProduct(productId, updates)

    res.json(updatedProduct)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
