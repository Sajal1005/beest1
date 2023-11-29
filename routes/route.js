import express from "express";
import { create, getAll, getOne, update, deleteItem } from "../controller/controller.js";

const route = express.Router();

route.post("/books",create);
route.get("/books",getAll);
route.get("/books/:id",getOne);
route.put("/books/:id",update);
route.delete("/books/:id",deleteItem);

export default route;