import { Router } from "express"
import readName from "../controllers/cities/readName.js"

let queryRouter = Router()

queryRouter.get('/:name', readName)

export default queryRouter