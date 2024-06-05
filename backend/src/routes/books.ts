import { Router } from "express";
import {
  deleteBook,
  getBook,
  getBooks,
  postBook,
  updateBook,
} from "../controllers/books";

const router = Router();

router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", postBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export { router };
