import * as Bluebird from "bluebird";
import { FoxAccessor, Fox } from "../models/fox";

export class FoxService {
  findById(id: number): Bluebird<Fox | null> {
    return FoxAccessor.findByPk(id);
  }
  findLimit5(): Bluebird<Fox[]> {
    return FoxAccessor.findAll({ limit: 5 });
  }
}
