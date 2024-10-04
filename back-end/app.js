import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import {config} from "dotenv"
import { dbConnection } from "./database/dbConnection.js"
import applicatoinRouter from "./router/applicationRouter.js"
import adminRouter from "./router/adminRouter.js"
import { errorMiddleware } from "./middleware/errorMiddleware.js"

const app = express()
config({path:"./config/config.env"})

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONT_END_URL],
    methods:["GET","DELETE","POST"],
    credentials:true
}))


app.use("/api/v1/user",applicatoinRouter)
app.use("/api/v1/admin",adminRouter)

dbConnection()

app.use(errorMiddleware)
export default app