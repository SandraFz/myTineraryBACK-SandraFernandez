import { Router } from "express";
import createItin from "../controllers/itineraries/createItin.js";
import readAllItin from "../controllers/itineraries/readAllItin.js";
import readOneItin from "../controllers/itineraries/readOneItin.js";
import readItinByCityRouter from "../router/readItinByCity-router.js"
import updateItin from "../controllers/itineraries/updateItin.js";
import deleteItin from "../controllers/itineraries/deleteItin.js";

let itinerariesRouter = Router()

itinerariesRouter.post('/:id_city', createItin)
itinerariesRouter.get('/byCity', readItinByCityRouter)
itinerariesRouter.get('/', readAllItin)
itinerariesRouter.get('/:id', readOneItin)
itinerariesRouter.put('/:id', updateItin)
itinerariesRouter.delete('/:id', deleteItin)

export default itinerariesRouter