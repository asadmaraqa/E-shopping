import express from 'express'
import {
  findAll,
  createUser,
  findById,
  updateUser,
  deleteUser,
  findOne,
} from '../controllers/user'

const router = express.Router()

router.get('/', findAll)
router.post('/', createUser)
router.get('/me', findOne)

router.get('/:userId', findById)
router.patch('/:userId', updateUser)
router.delete('/:userId', deleteUser)

export default router
