import express from 'express'
// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'

import movieRouter from './routers/movie'
import productRouter from './routers/product'
import userRouter from './routers/user'
import orderRouter from './routers/order'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(apiContentType)
app.use(express.json())

// Set up routers
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/orders', orderRouter)
// Custom API error handler
app.use(apiErrorHandler)

export default app
