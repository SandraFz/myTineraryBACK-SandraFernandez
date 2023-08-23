import { Router } from "express";
import readName from "../controllers/cities/readName.js";

let readNameRouter = Router()

readNameRouter.get('/:name', readName)

export default readNameRouter