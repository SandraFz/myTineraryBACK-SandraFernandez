import { Router } from "express";
import singUp from "../controllers/auth/singUp.js";
import singUpSchema from "../validators/SingUpValidator.js";
import validator from "../middlewares/validators.js";
import emailExists from "../middlewares/emailExists.js";
import login from "../controllers/auth/login.js";

const authRouter = Router()

authRouter.post('/', validator(singUpSchema), emailExists, singUp)
authRouter.get('/', login)

export default authRouter