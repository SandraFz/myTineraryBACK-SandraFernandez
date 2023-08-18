import { Router } from "express";
import create from '../controllers/cities/create.js'
import readAll from "../controllers/cities/readAll.js";

let citiesRouter = Router()

citiesRouter.post('/', create)
citiesRouter.get('/', readAll)
citiesRouter.put('/:id', () =>{})
citiesRouter.delete('/:id', () => {})

export default citiesRouter
