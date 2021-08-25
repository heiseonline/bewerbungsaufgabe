import { ReactElement } from 'react'

export interface TeaserProps {
  title: string
  synopsis: string
  displayDate: Date
}

export const Teaser = ({
  title,
  synopsis,
  displayDate,
}: TeaserProps): ReactElement => (
  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
    <dl>
      <dt className="sr-only">Published on</dt>
      <dd className="text-base font-medium text-gray-500">
        <time
          title={displayDate.toLocaleString()}
          dateTime={displayDate.toISOString()}
        >
          {displayDate.toLocaleString()}
        </time>
      </dd>
    </dl>
    <div className="space-y-5 xl:col-span-3">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="prose max-w-none text-gray-500">{synopsis}</p>
    </div>
  </article>
)
