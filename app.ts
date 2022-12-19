import express, { Express } from "express"
import * as dotenv from 'dotenv'
import authRouter from './routes/auth.routes'
import userRouter from './routes/user.routes'
import adminRouter from './routes/admin.routes'
import { dbConfig } from './config/db.config'
import { emailConfig } from './config/mailer.config'
dotenv.config()

//app
const app: Express = express()

//router
app.use(authRouter)
app.use(userRouter)
app.use(adminRouter)


//listening to port
app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`)
})

//database
dbConfig()

//email service connection
emailConfig()