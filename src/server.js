import http from 'node:http' // Exportar a const http
import { Database } from './middlewares/database.js'
import { json } from './middlewares/json.js'

// Criar um usuário (nome, email, senha)

// Stateful - Onde os dados da aplicação são armazenados em mémoria

// Como que o nosso front-end vai saber que o back devolveu uma respota em formtado de JSON?
// => Cabeçalhos (Requisição/resposta) => Metadados

const database = new Database()

const server = http.createServer(async(req, res) => {

  const { method, url } = req

  await json(req, res)

  if(method == 'GET' && url == '/users') {

    const users = database.select('users')

    return res.end(JSON.stringify(users))
  }

  if(method == 'POST' && url == '/users') {
    const { name, email} = req.body

    const user = { // criação de um novo usuário pra dentro do array
      id: 1,
      name,
      email,
    }

    database.insert('users', user)

    return res.writeHead(201).end() // writeHead --> vai informar o status code
  }


  return res.writeHead(404).end()
})

// localhost:3333

server.listen(3333)