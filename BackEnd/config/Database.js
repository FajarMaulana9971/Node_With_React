import { Sequelize } from "sequelize";

const db = new Sequelize("db_learnnode", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
