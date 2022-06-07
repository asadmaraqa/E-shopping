import express from 'express'
import verifyAuth from '../middlewares/verifyAuth'
import path from 'path'

import multer from 'multer'
import {
  create,
  deleteProduct,
  findAll,
  findById,
  findByName,
  updateProduct,
} from '../controllers/product'
import Product from '../models/Product'

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  },
})
const upload = multer({ storage: storage })

console.log(upload)
router.get('/', findAll)
router.get('/:productId', findById)
router.get('/search/:productName', findByName)
router.post(
  '/',
  upload.single('img'),
  create,
  function (req: any, res: any, next: any) {
    const file = req.file.filename
    console.log(file)
    res.send('worked')
  }
)
router.delete('/:productId', deleteProduct)
router.put('/:productId', updateProduct)

export default router
