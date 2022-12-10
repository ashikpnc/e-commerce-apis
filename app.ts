import express, { Express } from "express"
import * as dotenv from 'dotenv'
import authRouter from './routes/auth.routes'
import userRouter from './routes/user.routes'
import vendorRouter from './routes/vendor.routes'
import adminRouter from './routes/admin.routes'
dotenv.config()

//app
const app: Express = express()

//router
app.use(authRouter)
app.use(userRouter)
app.use(vendorRouter)
app.use(adminRouter)


//listening to port
app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`)
})