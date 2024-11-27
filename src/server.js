const http = require('http')
const app = require('./app')

const httpServer = http.createServer(app)
const { PORT } = require('./lib/index')

const startServer = () => {
  httpServer.listen(PORT, (request, response) => {
    // response.status(200).json({ message: 'Server is running hot. 🔥' })
    console.log(`Server running at port number: ${PORT} ✔️`)
  })
}

// start the server
startServer()
