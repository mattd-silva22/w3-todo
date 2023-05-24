import { Task } from "../interface/task.interface";


export class Database {
    _database: Task[]
    constructor(){
        this._database = [
            { id: 1, titulo: "Aprender React", concluida: true },
            { id: 2, titulo: "Estudar NodeJS", concluida: false },
            { id: 3, titulo: "Praticar TypeScript", concluida: false }
            ];
    }

    add(task:Task){
        this._database = [...this._database, task]
        return true
    }

    remove(id:number){
        this._database = this._database.filter(task => task.id != id)
        return true
    }

    update(updatedTask:Task){
        this._database = this._database.map( task => {
            if(updatedTask.id === task.id){
                return updatedTask
            } else {
                return task
            }
        })
        return true
    }

    findMany(){
        return this._database
    }

    findOne(id:number){
        return this._database.filter(task => task.id === id)
    }
}

