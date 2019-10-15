const express = require("express")

const server = express()

server.use(express.json())

const users = ["Vitor", "Diego", "Lucas"]

server.get("/users", (request, response) => {
  response.json(users)
})

server.get("/users/:index", (request, response) => {
  const { index } = request.params
  response.json({ name: users[index] })
})

server.post("/users", (request, response) => {
  const { name } = request.body
  users.push(name)
  return response.json(users)
})

server.put("/users/:index", (request, response) => {
  const { index } = request.params
  const { name } = request.body

  users[index] = name

  return response.json(users[index])
})

server.delete("/users/:index", (request, response) => {
  const { index } = request.params
  users.splice(index, 1)

  return response.send()
})

server.listen(3000)
