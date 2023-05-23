import { Router } from "express";
import { TasksController } from "../api/tasks.controller";


const tasksRoutes = Router()

const tasksController = new TasksController

tasksRoutes.get("/" , tasksController.findAll)
tasksRoutes.post("/:id" , tasksController.create)
tasksRoutes.patch("/:id" , tasksController.update)
tasksRoutes.delete("/:id" , tasksController.delete)


export {tasksRoutes}