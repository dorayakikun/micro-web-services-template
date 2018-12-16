import * as Sequelize from "sequelize";

const db: string = process.env.MYSQL_DB_NAME as string;
const username: string = process.env.MYSQL_ROOT_USER as string;
const password: string = process.env.MYSQL_ROOT_PASSWORD as string;

export const sequelize = new Sequelize(db, username, password, {
  host: "mysql",
  dialect: "mysql",
  port: 3306
});

sequelize.authenticate();
