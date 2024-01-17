import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

// ini adalah arrow function tanpa nama dan tanpa parameter dengan tipe asyncrhonus
(async () => {
  // "Lalu await db.sync() menunggu database selesai disinkronkan baru dijalankan kode selanjutnya. Maksudnya dijalankan dulu synchron db-nya baru misal dipanggil, di controller maka di controller harus menunggu dulu db-nya disinkron."
  await db.sync();
})();
// ();: Ini adalah penutup IIFE dan juga merupakan cara untuk langsung memanggil fungsi yang telah didefinisikan. Tanda kurung di bagian akhir })(); mengeksekusi fungsi tanpa memerlukan pemanggilan terpisah. Dengan demikian, fungsi tersebut segera dijalankan pada saat aplikasi dimulai.
