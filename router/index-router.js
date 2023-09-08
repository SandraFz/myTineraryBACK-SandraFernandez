import { Router } from "express";
import citiesRouter from "./cities-router.js";
import itinerariesRouter from "./itineraries-router.js"
import authRouter from "./auth-router.js";

const indexRouter = Router()

indexRouter.use('/cities', citiesRouter)
indexRouter.use('/itineraries', itinerariesRouter)
indexRouter.use('/auth', authRouter)

export default indexRouter
