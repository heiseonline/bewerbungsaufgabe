import express, { NextFunction, Request, Response } from 'express'
import { setupReactViews } from 'express-tsx-views'
import morgan from 'morgan'
import path from 'path'
import { HttpException, HttpStatus, NotFoundException } from './http-exceptions'
import { routes } from './routes'

export const app = express()

setupReactViews(app, {
  prettify: true,
  viewsDirectory: path.join(__dirname, 'views'),
})

app.use(morgan('combined'))

const staticPath = path.dirname(require.resolve('@heise/frontend'))

app.use(express.static(staticPath))

app.use('/', routes)

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundException())
})

app.use(
  (
    err: Error | HttpException,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const statusCode =
      err instanceof HttpException
        ? err.statusCode
        : HttpStatus.InternalServerError

    res.locals.message = err.message
    res.locals.statusCode = statusCode

    console.error(err.message)

    res.status(statusCode)
    res.render('error')
  },
)
