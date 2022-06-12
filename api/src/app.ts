import express from 'express'
// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'
import cors from 'cors'
import productRouter from './routers/product'
import userRouter from './routers/user'
import orderRouter from './routers/order'
import loginRouter from './routers/login'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import passport from 'passport'
import verifyAuth from './middlewares/verifyAuth'

dotenv.config({ path: '.env' })
const app = express()

app.use(cors())

// Express configuration
app.set('port', process.env.PORT || 3000)
// Global middleware
app.use(apiContentType)
app.use(express.json())
app.use(passport.initialize())
app.use('/images', express.static('public/uploads'))
// Set up routers
app.post('/verify-token', verifyAuth, (req, res) => {
  const user = req.user
  console.log(user)
  res.json({ user })
})
app.use('/api/v1/products', productRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/google-login', loginRouter)
// Custom API error handler
app.use(apiErrorHandler)

export default app
