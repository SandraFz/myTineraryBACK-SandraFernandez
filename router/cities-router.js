import { Router } from "express";
import create from '../controllers/cities/create.js'
import readAll from "../controllers/cities/readAll.js";
import readOne from '../controllers/cities/readOne.js'
import readName from "../controllers/cities/readName.js";
import update from "../controllers/cities/update.js";
import deleteCity from "../controllers/cities/deleteCity.js";
import readNameRouter from "./readNamerouter.js";

let citiesRouter = Router()

citiesRouter.post('/', create)
citiesRouter.get('/name', readNameRouter)
citiesRouter.get('/:id', readOne)
citiesRouter.get('/', readAll)
citiesRouter.put('/:id', update)
citiesRouter.delete('/:id', deleteCity)

export default citiesRouter
