import axios, { AxiosInstance } from 'axios'
import { NewsClientConfig } from './news-client.config'

export interface NewsItem {
  anrisstext: string
  Container: number
  titel: string
  datum: string
}

export class NewsClient {
  readonly #http: AxiosInstance

  constructor(
    config = new NewsClientConfig(),
    http = axios.create({
      auth: {
        username: config.username,
        password: config.password,
      },
      baseURL: config.baseUrl,
      timeout: config.timeout,
    }),
  ) {
    this.#http = http
  }

  async getEntries(): Promise<NewsItem[]> {
    const response = await this.#http.get<NewsItem[]>('/latest-news')

    return response.data
  }

  async getSortedEntries(): Promise<NewsItem[]> {
    const entries = await this.getEntries()

    return entries.sort(
      (a, b) => new Date(b.datum).valueOf() - new Date(a.datum).valueOf(),
    )
  }
}
