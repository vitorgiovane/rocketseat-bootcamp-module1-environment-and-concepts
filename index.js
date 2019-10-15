const express = require("express")

const server = express()

const users = ["Vitor", "Diego", "Lucas"]

// Query params
server.get("/users", (request, response) => {
  const name = request.query.name
  response.json({ message: `Hello, ${name}` })
})

// Route params
server.get("/users/:index", (request, response) => {
  const { index } = request.params
  response.json({ name: users[index] })
})

// Request body

server.listen(3000)
