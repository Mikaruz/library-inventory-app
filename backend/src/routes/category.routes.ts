import { Router } from "express";
import {
  deleteCategory,
  getCategories,
  getCategory,
  postCategory,
  updateCategory,
} from "../controllers/category.controller";
import { checkAuth } from "../middlewares/auth.middleware";
import { validateSchema } from "../middlewares/validator.middleware";
import { categorySchema } from "../schemas/category.schema";

const router = Router();

router.get("/", getCategories);
router.get("/:term", getCategory);
router.post("/", checkAuth, validateSchema(categorySchema), postCategory);
router.patch("/:id", checkAuth, validateSchema(categorySchema), updateCategory);
router.delete("/:id", checkAuth, deleteCategory);

export { router };
