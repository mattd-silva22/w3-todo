import {Request ,Response } from "express"

export class TasksServices {
    constructor(){

    }

    public createTasks(req:Request,res:Response){
        return res.status(200).send({mensage:"foi"})
    }

    public updateTasks(req:Request,res:Response){
        return true
    }

    public deleteTasks(req:Request,res:Response){
        return true
    }

    public getAllTasks(req:Request,res:Response){
        return true
    }
}