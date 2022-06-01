import express from 'express'
import { JWT_SECRET } from '../util/secrets'
import jwt from 'jsonwebtoken'
import User from '../models/User'

import {
  createOrder,
  findById,
  updateOrder,
  deleteOrder,
  findByNumber,
} from '../controllers/order'
import passport from 'passport'
import loginWithGoogle from '../passport/google'

const router = express.Router()
passport.use(loginWithGoogle())
router.post(
  '/',
  passport.authenticate('google-id-token', { session: false }),
  (req, res) => {
    const user = req.user as any

    const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',
    })
    res.json({ token })
  }
)

export default router
