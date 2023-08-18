import { Router } from "express";
import homeRouter from "./home-router.js";
import citiesRouter from "./cities-router.js";

const indexRouter = Router()

//indexRouter.use('/home', homeRouter)
indexRouter.use('/', citiesRouter)

export default indexRouter
