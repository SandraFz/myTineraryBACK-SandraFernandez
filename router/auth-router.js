import { Router } from "express";
import singUp from "../controllers/auth/singUp.js";
import singUpSchema from "../validators/SingUpValidator.js";
import validator from "../middlewares/validators.js";
import emailExists from "../middlewares/emailExists.js";
import login from "../controllers/auth/login.js";
import passport from "../middlewares/passport.js";
import loginWithToken from "../controllers/auth/loginWithToken.js";

const authRouter = Router()

authRouter.post('/', validator(singUpSchema), emailExists, singUp)
authRouter.get('/', login)
authRouter.get('/token', passport.authenticate('jwt', { session: false }), loginWithToken)

export default authRouter