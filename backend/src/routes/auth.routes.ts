import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  verifyToken,
} from "../controllers/auth.controller";
import { validateSchema } from "../middlewares/validator.middleware";
import { loginSchema, registerSchema } from "../schemas/auth.schema";

const router = Router();

router.post("/register", validateSchema(registerSchema), registerUser);
router.post("/login", validateSchema(loginSchema), loginUser);
router.get("/verify", verifyToken);
router.post("/logout", logoutUser);

export { router };
