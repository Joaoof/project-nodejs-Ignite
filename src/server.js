import http from 'node:http' // Exportar a const http
import { extractQueryParams } from '../utils/extract-query-paramers.js'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

// Criar um usuário (nome, email, senha)

// Stateful - Onde os dados da aplicação são armazenados em mémoria

// Como que o nosso front-end vai saber que o back devolveu uma respota em formtado de JSON?
// => Cabeçalhos (Requisição/resposta) => Metadados

const server = http.createServer(async(req, res) => {

  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method == method && route.path.test(url)
  })

  if(route) {

    const routeParams = req.url.match(route.path)

    // console.log(extractQueryParams(routeParams.groups.query))

    const { query, ...params } = routeParams.groups

    req.params = params
    req.query = query ? extractQueryParams(query) : {}

    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

// localhost:3333

server.listen(3333)