import { TasksServices } from "./tasks.service"
import {Request ,Response } from "express"


export class TasksController {
    tasksService : TasksServices
    

    constructor(){
        this.tasksService = new TasksServices()
    }
    public findAll(req:Request,res:Response) {
        return this.tasksService.getAllTasks(req,res)
    }

    public update(req:Request,res:Response){
        return this.tasksService.updateTasks(req,res)
    }

    public create(req:Request,res:Response){
        return this.tasksService.createTasks(req,res)
    }

    public delete(req:Request,res:Response){
        return this.tasksService.deleteTasks(req,res)
    }
}