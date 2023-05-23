import { TasksServices } from "./tasks.service"
import {Request ,Response } from "express"

const tasksService = new TasksServices()
export class TasksController {
    
    public findAll(req:Request,res:Response) {
        return tasksService.getAllTasks(req,res)
    }

    public update(req:Request,res:Response){
        return tasksService.updateTasks(req,res)
    }

    public create(req:Request,res:Response){
        return tasksService.createTasks(req,res)
    }

    public delete(req:Request,res:Response){
        return tasksService.deleteTasks(req,res)
    }
}