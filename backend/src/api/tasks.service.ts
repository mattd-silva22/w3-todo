import {Request ,Response } from "express"
import { Database } from "../database/database"
import { Task } from "../interface/task.interface"

export class TasksServices {
    database: Database
    taskList : Task[]

    constructor(){
        this.database = new Database()
        this.taskList = this.database.findMany()
    }

    public createTasks(req:Request,res:Response){
        return res.status(200).send({mensage:"foi"})
    }

    public updateTasks(req:Request,res:Response){
        return res.status(200).send({mensage:"foi"})
    }

    public deleteTasks(req:Request,res:Response){
        return res.status(200).send({mensage:"foi"})
    }

    public getAllTasks(req:Request,res:Response){
        return res.status(200).send({tasks : this.taskList})
    }
}