import http from 'node:http' // Exportar a const http

// Criar um usuário (nome, email, senha)

const server = http.createServer((req, res) => {
  return res.end("Hello, World!")
})

// localhost:3333

server.listen(3333)