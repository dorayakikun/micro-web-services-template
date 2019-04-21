import { Model, INTEGER, STRING } from "sequelize";
import { sequelize } from "../db/sequelize";
export class Fox extends Model {
  public readonly id!: number;
  public readonly name!: number;
  public readonly scientificName!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Fox.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: STRING,
    scientificName: {
      type: STRING,
      field: "scientific_name"
    }
  },
  {
    sequelize,
    tableName: 'fox',
    underscored: true,
  }
);

export const FoxAccessor = Fox