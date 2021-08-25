import { ReactElement, ReactNode } from 'react'

export interface LayoutProps {
  title: string
  children: ReactNode
}

export const Layout = ({ title, children }: LayoutProps): ReactElement => (
  <html>
    <head>
      <title>{title}</title>
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body className="pt-8 bg-gray-50 text-800 dark:text-100 dark:bg-gray-900">
      <section className="container mx-auto">
        <section className="pb-4 pt-0 md:py-6 bg-white dark:bg-gray-800 px-4 md:p-6">
          <section className="grid md:py-4 place-items-center">
            <section className="grid md:place-content-center gap-6 md:gap-y-12 max-w-3xl mb-12">
              <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-[4rem] md:leading-[3.5rem]">
                  {title}
                </h1>
              </div>
              {children}
            </section>
          </section>
        </section>
      </section>
    </body>
  </html>
)
