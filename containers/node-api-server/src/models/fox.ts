import * as Sequelize from "sequelize";
import { sequelize } from "../db/sequelize";

export interface FoxAddModel {
  id: number;
  name: string;
  scientificName: string;
}

export interface FoxModel extends Sequelize.Model<FoxModel, FoxAddModel> {
  id: number;
  name: string;
  scientificName: string;
  createdAt: string;
  updatedAt: string;
}

export interface FoxViewModel {
  name: string;
  scientificName: string;
}

export const Fox = sequelize.define<FoxModel, FoxAddModel>(
  "fox",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: Sequelize.STRING,
    scientificName: {
      type: Sequelize.STRING,
      field: "scientific_name"
    }
  },
  {
    underscored: true
  }
);
