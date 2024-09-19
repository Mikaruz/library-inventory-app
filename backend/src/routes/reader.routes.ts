import { Router } from "express";
import { checkAuth } from "../middlewares/auth.middleware";
import { validateSchema } from "../middlewares/validator.middleware";
import {
  deleteReader,
  getReader,
  getReaders,
  postReader,
} from "../controllers/reader.controller";
import {
  readerCreateSchema,
  readerUpdateSchema,
} from "../schemas/reader.schema";

const router = Router();

router.get("/", checkAuth, getReaders);
router.get("/:id", checkAuth, getReader);
router.post("/", checkAuth, validateSchema(readerCreateSchema), postReader);
router.patch("/:id", checkAuth, validateSchema(readerUpdateSchema), postReader);
router.delete("/:id", checkAuth, deleteReader);

export { router };
