import { Router } from "express";

export const carsRouter = Router();

carsRouter.post("/");
carsRouter.get("/");
carsRouter.get("/:id");
carsRouter.delete("/:id");
carsRouter.patch("/:id");
