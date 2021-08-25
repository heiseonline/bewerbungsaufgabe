import { ReactElement } from 'react'
import { Layout } from './components/layout'
import { Teaser } from './components/teaser'

export interface Entry {
  title: string
  synopsis: string
  displayDate: Date
}

export interface NewsIndexProps {
  title: string
  entries: Entry[]
}

const NewsIndex = ({ title, entries }: NewsIndexProps): ReactElement => (
  <Layout title={title}>
    <ul className="divide-y divide-gray-200">
      {entries.map((entry, index) => (
        <li key={index} className="py-12">
          <Teaser {...entry} />
        </li>
      ))}
    </ul>
  </Layout>
)

export default NewsIndex
