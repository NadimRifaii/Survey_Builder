import app from './app.mjs'
import http from 'http'
import connectToMongo from './configs/mongodb.configs.mjs'
const server = http.createServer(app)
const PORT = process.env.PORT || 5000
async function startServer() {
  await connectToMongo()
  server.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
  })
}
startServer()