import express from 'express'
import {
  createUser,
  findById,
  updateUser,
  deleteUser,
} from '../controllers/user'

const router = express.Router()

router.post('/', createUser)
router.get('/:userId', findById)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)

export default router
