import { Router } from "express";
import readItinByCity from "../controllers/itineraries/readItinByCity.js";

const readItinByCityRouter = Router()

readItinByCityRouter.get('/:name', readItinByCity)

export default readItinByCityRouter