import { Strategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
/* import Users from "../models/User"; */

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(), //De dónde saco el token
    secretOrKey : process.env.KEY //Y la secret key para validar
}

const fn = async (payload, next) => {
   /* console.log(payload)
   console.log(payload.name) */
   next(null, payload)
} 

//Instancio Sjtrategy y le paso un objeto y una función.
export default passport.use(new Strategy(options, fn))
