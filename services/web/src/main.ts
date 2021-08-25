import { app } from './app'

const DEFAULT_PORT = 3000
const port = normalizePort(process.env.PORT ?? DEFAULT_PORT)

app.set('port', port)

function normalizePort(port: string | number) {
  if (!port || typeof port === 'number') {
    return port
  }

  return parseInt(port, 10)
}

const server = app.listen(port, () => {
  const address = server.address()

  const bind =
    typeof address === 'string'
      ? `pipe ${address}`
      : `port ${address?.port ?? '(unknown)'}`

  // eslint-disable-next-line no-console
  console.log(`Listening on ${bind}`)
})
