import express from 'express'
import { NewsClient } from '../news-client'
import { NewsIndexProps } from '../views'

export const routes = express.Router()

routes.get('/', async (req, res, next) => {
  try {
    const newsClient = new NewsClient()

    const sortedEntries = await newsClient.getSortedEntries()

    const vars: NewsIndexProps = {
      title: 'Latest news',
      entries: sortedEntries.map((entry) => ({
        title: entry.titel,
        synopsis: entry.anrisstext,
        displayDate: new Date(entry.datum),
      })),
    }

    res.render('index', vars)
  } catch (error) {
    next(error)
  }
})
