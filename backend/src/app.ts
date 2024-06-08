import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./routes";

const PORT = process.env.BACKEND_PORT || 3000;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
