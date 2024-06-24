import { Router } from "express";
import { getAuthors, postAuthor } from "../controllers/author.controller";
import { checkAuth } from "../middlewares/auth.middleware";
import { validateSchema } from "../middlewares/validator.middleware";
import { authorCreatedSchema } from "../schemas/author.schema";

const router = Router();

router.get("/", checkAuth, getAuthors);
router.get("/:id", checkAuth, getAuthors);
router.post("/", checkAuth, validateSchema(authorCreatedSchema), postAuthor);

export { router };
