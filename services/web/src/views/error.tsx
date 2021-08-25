import { ReactElement } from 'react'
import { Layout } from './components/layout'

export interface ErrorProps {
  statusCode: number
  message: string
}

const Error = ({ statusCode, message }: ErrorProps): ReactElement => (
  <Layout title={`Error ${statusCode}`}>
    <h1>
      Error <code>{statusCode}</code>
    </h1>
    <p>{message}</p>
  </Layout>
)

export default Error
