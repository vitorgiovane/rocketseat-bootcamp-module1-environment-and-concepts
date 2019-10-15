const express = require("express")

const server = express()

server.get("/test", (request, response) => {
  response.json({ message: "Hello, world!" })
})

server.listen(3000)
