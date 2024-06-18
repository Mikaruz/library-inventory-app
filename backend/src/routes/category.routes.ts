import { Router } from "express";
import {
  deleteCategory,
  getCategories,
  getCategory,
  postCategory,
} from "../controllers/category.controller";
import { checkAuth } from "../middlewares/auth.middleware";
import { validateSchema } from "../middlewares/validator.middleware";
import { categorySchema } from "../schemas/category.schema";

const router = Router();

router.get("/", checkAuth, getCategories);
router.get("/:term", checkAuth, getCategory);
router.post("/", checkAuth, validateSchema(categorySchema), postCategory);
router.delete("/:id", checkAuth, deleteCategory);

export { router };
