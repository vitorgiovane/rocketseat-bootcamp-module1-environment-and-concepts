const express = require("express")

const server = express()

server.use(express.json())

server.use((request, response, next) => {
  console.log(`Method: ${request.method}, URL: ${request.url}`)
  next()
})

const users = ["Vitor", "Diego", "Lucas"]

const checkUserNameExistsInRequest = (request, response, next) => {
  if (!request.body.name) {
    return response.status(400).json({ error: "User name is required." })
  }

  next()
}

const checkUserInArray = (request, response, next) => {
  const { index } = request.params
  if (!users[index]) {
    return response.status(400).json({ error: "User doesn't exists." })
  }

  next()
}

server.get("/users", (request, response) => {
  response.json(users)
})

server.get("/users/:index", checkUserInArray, (request, response) => {
  const { index } = request.params
  response.json({ name: users[index] })
})

server.post("/users", checkUserNameExistsInRequest, (request, response) => {
  const { name } = request.body
  users.push(name)
  return response.json(users)
})

server.put(
  "/users/:index",
  checkUserInArray,
  checkUserNameExistsInRequest,
  (request, response) => {
    const { index } = request.params
    const { name } = request.body

    users[index] = name

    return response.json(users[index])
  }
)

server.delete("/users/:index", checkUserInArray, (request, response) => {
  const { index } = request.params
  users.splice(index, 1)

  return response.send()
})

server.listen(3000)
