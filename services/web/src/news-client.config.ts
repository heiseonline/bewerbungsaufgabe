import dotenv from 'dotenv'

export class NewsClientConfig {
  constructor() {
    dotenv.config()
  }

  #get(key: string, defaultValue?: string): string {
    const value = process.env[key]

    if (defaultValue === undefined && value === undefined) {
      throw new Error(`Config value missing for key ${key}`)
    }

    return value ?? (defaultValue as string)
  }

  get username(): string {
    return this.#get('AUTH_USERNAME')
  }

  get password(): string {
    return this.#get('AUTH_PASSWORD')
  }

  get baseUrl(): string {
    return this.#get(
      'WEBSERVICE_BASE_URL',
      'https://wwwtest.heise.de/extras/devops',
    )
  }

  get timeout(): number {
    return parseInt(this.#get('TIMEOUT', '2000'))
  }
}
