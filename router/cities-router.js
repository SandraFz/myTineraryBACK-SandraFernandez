import { Router } from "express";
import create from '../controllers/cities/create.js'
import readAll from "../controllers/cities/readAll.js";
import readOne from '../controllers/cities/readOne.js'
import queryRouter from "./query-router.js";

let citiesRouter = Router()

citiesRouter.post('/', create)
citiesRouter.get('/', readAll)
citiesRouter.get('/find', queryRouter)
citiesRouter.get('/:id', readOne)
citiesRouter.put('/:id', () =>{})
citiesRouter.delete('/:id', () => {})

export default citiesRouter
