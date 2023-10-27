import { Router } from "express";
import { CarsControllers } from "../controllers/cars.controllers";

export const carsRouter = Router();

const carsControllers = new CarsControllers();

carsRouter.post("/", carsControllers.create);
carsRouter.get("/");
carsRouter.get("/:id");
carsRouter.delete("/:id");
carsRouter.patch("/:id");
