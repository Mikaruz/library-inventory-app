import { Router } from "express";
import {
  deleteBook,
  getBook,
  getBooks,
  postBook,
  updateBook,
} from "../controllers/book.controller";
import { checkAuth } from "../middlewares/auth.middleware";
import { validateSchema } from "../middlewares/validator.middleware";
import { bookCreatedSchema, bookUpdatedSchema } from "../schemas/book.schema";

const router = Router();

router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", checkAuth, validateSchema(bookCreatedSchema), postBook);
router.patch("/:id", checkAuth, validateSchema(bookUpdatedSchema), updateBook);
router.delete("/:id", checkAuth, deleteBook);

export { router };
