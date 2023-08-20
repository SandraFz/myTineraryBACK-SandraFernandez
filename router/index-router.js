import { Router } from "express";
import citiesRouter from "./cities-router.js";

const indexRouter = Router()

indexRouter.use('/', citiesRouter)

export default indexRouter
