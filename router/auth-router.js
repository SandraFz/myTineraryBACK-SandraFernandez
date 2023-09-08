import { Router } from "express";
import singUp from "../controllers/auth/singUp.js";
import singUpSchema from "../validators/SingUpValidator.js";
import validator from "../middlewares/validators.js";
import emailExists from "../middlewares/emailExists.js";

const authRouter = Router()

authRouter.post('/', validator(singUpSchema), emailExists, singUp)

export default authRouter