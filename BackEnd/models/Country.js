import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Country = db.define(
  "countries",
  {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Country;

(async () => {
  try {
    await db.sync();
    console.log("success connect database");
  } catch (error) {
    console.error("error syncing database : " + error);
  }
})();
