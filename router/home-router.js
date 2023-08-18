import { Router } from "express"

let homeRouter = Router()

homeRouter.post('/', ()=>{})
homeRouter.get('/', ()=>{console.log('este es el get')})
homeRouter.put('/', ()=>{})
homeRouter.delete('/', ()=>{})

export default homeRouter