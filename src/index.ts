import http from 'http'
import debug from 'debug'

import App from './server'
import { connect } from './db/database'


async function Bootstrap(): Promise<void> {
  debug('ts-express:server')

  const port: number | string | boolean = normalizePort(process.env.PORT || 3000)

  App.set('port', port)
  const server = http.createServer(App)
  server.listen(port)
  server.on('error', onError)
  server.on('listening', onListening)
  await connect()

  function normalizePort(val: number | string): number | string | boolean {
    const port: number = (typeof val === 'string') ? parseInt(val, 10) : val
    if (isNaN(port)) return val
    else if (port >= 0) return port
    else return false
  }

  function onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') throw error
    const bind = (typeof port === 'string') ? `Pipe ${port}` : `Port ${Number(port)}`
    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`)
        process.exit(1)
        break
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1)
        break
      default:
        throw error
    }
  }

  function onListening() {
    const addr = server.address()
    if (addr) {
      const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port || 3000}`
      debug(`Listening on ${bind}`)
    }
  }
}

Bootstrap();
