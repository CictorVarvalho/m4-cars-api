import express, { json } from "express";
import { carsRouter } from "./routes/cars.routes";

export const app = express();

app.use(json());

app.use("/cars", carsRouter);