import { Router } from "express";
import {
  deleteBook,
  getBook,
  getBooks,
  postBook,
  updateBook,
} from "../controllers/book.controller";
import { checkAuth } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", checkAuth, getBooks);
router.get("/:id", checkAuth, getBook);
router.post("/", checkAuth, postBook);
router.put("/:id", checkAuth, updateBook);
router.delete("/:id", checkAuth, deleteBook);

export { router };
