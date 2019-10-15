const express = require("express")

const server = express()

// Query params
server.get("/users", (request, response) => {
  const name = request.query.name
  response.json({ message: `Hello, ${name}` })
})

// Route params
server.get("/users/:id", (request, response) => {
  const { id } = request.params
  response.json({ message: `Searching the id: ${id}.` })
})

// Request body

server.listen(3000)
