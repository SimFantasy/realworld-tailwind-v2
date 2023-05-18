import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory'
import api from '@/service/apis'

export const users = createQueryKeys('users', {
  view: () => ({
    queryKey: ['user'],
    queryFn: () => api.User.view()
  })
})

export const profile = createQueryKeys('profile', {
  view: username => ({
    queryKey: [username],
    queryFn: () => api.Profile.view(username)
  })
})

export const articles = createQueryKeys('articles', {
  all: (limit, offset, author = null, favorited = null, tag = null) => ({
    queryKey: [offset, author, favorited, tag],
    queryFn: () => api.Article.all(limit, offset, author, favorited, tag)
  }),
  feed: (limit, offset) => ({
    queryKey: [offset],
    queryFn: () => api.Article.feed(limit, offset)
  }),
  view: slug => ({
    queryKey: [slug],
    queryFn: () => api.Article.view(slug)
  })
})

export const comments = createQueryKeys('comments', {
  all: slug => ({
    queryKey: [slug],
    queryFn: () => api.Comment.all(slug)
  })
})

export const tags = createQueryKeys('tags', {
  all: () => ({
    queryKey: ['tags'],
    queryFn: () => api.Default.tags()
  })
})

export const querykeys = mergeQueryKeys(users, profile, articles, comments, tags)
