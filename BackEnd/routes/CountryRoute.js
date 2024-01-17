import express from "express";
import {
  getAll,
  getById,
  create,
  update,
  deleteCountry,
} from "../controller/CountryController.js";

const router = express.Router();

router.get("/country", getAll);
router.get("/country/:id", getById);
router.post("/country", create);
router.put("/country/:id", update);
router.delete("/country/:id", deleteCountry);

export default router;
