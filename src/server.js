import http from 'node:http' // Exportar a const http

// Criar um usuário (nome, email, senha)

// Stateful - Onde os dados da aplicação são armazenados em mémoria

// Como que o nosso front-end vai saber que o back devolveu uma respota em formtado de JSON?
// => Cabeçalhos (Requisição/resposta) => Metadados

const users = [] // Array vazio

const server = http.createServer((req, res) => {

  const { method, url } = req

  if(method == 'GET' && url == '/users') {
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if(method == 'POST' && url == '/users') {

    users.push({ // criação de um novo usuário pra dentro do array
      id: 1,
      name: "Jonh of God",
      email: "Jonh@example.com"
    })

    return res.writeHead(201).end() // writeHead --> vai informar o status code
  }


  return res.writeHead(404).end()
})

// localhost:3333

server.listen(3333)