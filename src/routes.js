import { randomUUID } from 'node:crypto'
// import path from 'node:path'
import { buildRoutePath } from '../utils/build-route-path.js'
import { Database } from "./middlewares/database.js"


const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/users'),
    handler: (req, res) => {

    const users = database.select('users')

    return res.end(JSON.stringify(users))
    }
  },

  {
    method: 'POST',
    path: buildRoutePath('/users'),
    handler: (req, res) => {

      const { name, email} = req.body

      const user = { // criação de um novo usuário pra dentro do array
        id: randomUUID(),
        name,
        email,
      }
  
      database.insert('users', user)
  
      return res.writeHead(201).end() 
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),  // caminho
    handler: (req, res) => {
      return res.end()
    }
  }
]



