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
import {
  authorCreatedSchema,
  authorUpdatedSchema,
} from "../schemas/author.schema";

const router = Router();

router.get("/", checkAuth, getAuthors);
router.get("/:id", checkAuth, getAuthor);
router.post("/", checkAuth, validateSchema(authorCreatedSchema), postAuthor);
router.patch(
  "/:id",
  checkAuth,
  validateSchema(authorUpdatedSchema),
  updateAuthor
);
router.delete("/:id", checkAuth, deleteAuthor);

export { router };
