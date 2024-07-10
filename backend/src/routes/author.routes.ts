import { Router } from "express";
import {
  deleteAuthor,
  getAuthor,
  getAuthors,
  postAuthor,
  updateAuthor,
} from "../controllers/author.controller";
import { checkAuth } from "../middlewares/auth.middleware";
import { validateSchema } from "../middlewares/validator.middleware";
import { authorSchema } from "../schemas/author.schema";

const router = Router();

router.get("/", checkAuth, getAuthors);
router.get("/:id", checkAuth, getAuthor);
router.post("/", checkAuth, validateSchema(authorSchema), postAuthor);
router.patch("/:id", checkAuth, validateSchema(authorSchema), updateAuthor);
router.delete("/:id", checkAuth, deleteAuthor);

export { router };
