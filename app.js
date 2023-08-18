import  express from "express";
import dotenv from 'dotenv'
import 'dotenv/config.js'
import './config/database.js'
import indexRouter from "./router/index-router.js";
import cors from 'cors'

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/api', indexRouter)

app.listen(port, () => {console.log('Servidor corriendo en puerto'+port)})

export default app