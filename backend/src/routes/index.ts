import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}/`;
const router = Router();
console.log(PATH_ROUTER);

const cleanFileName = (filename: string) => {
  return filename.split(".")[0];
};

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename);

  if (cleanName !== "index") {
    import(`./${cleanName}.routes`).then((module) => {
      console.log(`Adding route /${cleanName}`);
      router.use(`/${cleanName}`, module.router);
    });
  }
});

export default router;
