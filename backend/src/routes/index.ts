import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}/`;
const router = Router();

const cleanFileName = (filename: string) => {
  return filename.split(".").shift();
};

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename);

  if (cleanName !== "index") {
    import(`./${cleanName}`).then((module) => {
      console.log(`Adding route /${cleanName}`);
      router.use(`/${cleanName}`, module.router);
    });
  }
});

export default router;
