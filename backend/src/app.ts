import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.BACKEND_PORT || 3000;

const app = express();

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
