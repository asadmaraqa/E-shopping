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
    console.log(file)
    if (file.originalname !== '') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      )
    }
  },
})
const upload = multer({ storage: storage })
console.log('storage')
console.log(upload)
router.get('/', findAll)
router.get('/:productId', findById)
router.get('/search/:productName', findByName)
router.post('/', upload.single('img'), create, function (req: any) {
  const file = req.file.filename
})
router.delete('/:productId', deleteProduct)
router.patch('/:productId', upload.single('img'), updateProduct)
console.log(upload.single('img'))
export default router
