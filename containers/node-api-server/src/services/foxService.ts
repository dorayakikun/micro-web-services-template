import * as Bluebird from "bluebird";
import { Fox, FoxViewModel } from "../models/fox";

export class FoxService {
  findById(id: number): Bluebird<FoxViewModel | null> {
    return Fox.findById<FoxViewModel>(id);
  }
  findLimit5(): Bluebird<FoxViewModel[]> {
    return Fox.findAll<FoxViewModel[]>({ limit: 5 });
  }
}
