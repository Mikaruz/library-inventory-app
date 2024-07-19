import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import router from "./routes";

const PORT = process.env.BACKEND_PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/* import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

// Middleware para analizar cookies
app.use(cookieParser());

// Endpoint para establecer una cookie
app.get("/set-cookie", (req: Request, res: Response) => {
  // Establecemos la cookie con nombre 'miCookie'
  res.cookie("miCookie", "valorDeLaCookie", {
    httpOnly: true, // La cookie solo es accesible desde el servidor
    // Opciones adicionales como expires, maxAge, secure, etc.
  });
  res.send("Cookie establecida correctamente");
});

// Endpoint para verificar la cookie
app.get("/verificar-cookie", (req: Request, res: Response) => {
  // Obtenemos el valor de la cookie 'miCookie'
  const miCookie = req.cookies["miCookie"];

  if (miCookie) {
    res.send(`El valor de la cookie es: ${miCookie}`);
  } else {
    res.send("No se encontró la cookie");
  }
});

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
}); */
