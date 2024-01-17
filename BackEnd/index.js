import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import CountryRoute from "./routes/CountryRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute, CountryRoute);
// app.use(CountryRoute);

app.listen("5000", () =>
  console.log(
    "\n <==================> \n Server App is Running \n <==================> \n"
  )
);
