import { Router } from "express";
import singUp from "../controllers/auth/singUp.js";
import singUpSchema from "../validators/SingUpValidator.js";
import validator from "../middlewares/validators.js";

const authRouter = Router()

authRouter.post('/', validator(singUpSchema), singUp)

export default authRouter