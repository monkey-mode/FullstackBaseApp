import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { connect } from './db'

dotenv.config()

const app: Express = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.get('/data', (req: Request, res: Response) => {
  res.send('Data Express + TypeScript Server')
})

export const start = async () => {
  try {
    connect()
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
    })
  } catch (e) {
    console.error(e)
  }
}
