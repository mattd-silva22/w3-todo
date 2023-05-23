import express from 'express'

import { Router, Request, Response } from 'express';
import { tasksRoutes } from './routes/tasks.routes';

const app = express();

const route = Router()

app.use(express.json())
app.use("/tasks",tasksRoutes)
route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)


app.listen(3333, () => 'server running on port 3333')