import { Request, Response } from "express";
import { Fox } from "../models/fox";
import { FoxService } from "../services/foxService";
export const getFoxes = (req: Request, res: Response) => {
  const service = new FoxService();
  service
    .findLimit5()
    .then((value: Fox[]) => res.send(JSON.stringify(value)))
    .catch((reason: any) => {
      console.log("Caused: %o", reason);
      res.status(500);
      res.send("Internal Server Error");
    });
};
