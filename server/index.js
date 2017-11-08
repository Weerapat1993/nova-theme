const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const api = require('./routes/api')

server.use(middlewares)
server.use(jsonServer.bodyParser)

// Add custom routes before JSON Server router
server.use('/api/v1', api)

server.listen(8000, () => {
  console.log('JSON Server is running at http://localhost:8000')
})
