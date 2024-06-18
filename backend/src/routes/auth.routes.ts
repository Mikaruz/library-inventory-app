import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";
import { validateSchema } from "../middlewares/validator.middleware";
import { loginSchema } from "../schemas/auth.schema";

const router = Router();

router.post("/register", registerUser);
router.post("/login", validateSchema(loginSchema), loginUser);

export { router };
