import { Router } from "express";
import {
  loginUser,
  registerUser,
  verifyToken,
} from "../controllers/auth.controller";
import { validateSchema } from "../middlewares/validator.middleware";
import { loginSchema, registerSchema } from "../schemas/auth.schema";

const router = Router();

router.post("/register", validateSchema(registerSchema), registerUser);
router.post("/login", validateSchema(loginSchema), loginUser);
router.get("/verify", verifyToken);

export { router };
