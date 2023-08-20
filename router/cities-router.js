import { Router } from "express";
import create from '../controllers/cities/create.js'
import readAll from "../controllers/cities/readAll.js";
import readOne from '../controllers/cities/readOne.js'
import readName from "../controllers/cities/readName.js";

let citiesRouter = Router()

citiesRouter.post('/', create)
citiesRouter.get('/', readAll)
citiesRouter.get('/:name', readName)
citiesRouter.get('/:id', readOne)
citiesRouter.put('/:id', () =>{})
citiesRouter.delete('/:id', () => {})

export default citiesRouter
