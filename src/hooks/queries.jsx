import { useQuery } from '@tanstack/react-query'
import { querykeys } from '@/service/queryKeys'
import { useParams } from 'react-router-dom'

const User = {
  useUser: () => useQuery(querykeys.users.view())
}

const Profile = {
  useProfile: () => {
    const { username } = useParams()
    return useQuery(querykeys.profile.view(username))
  }
}

const Article = {
  useArticles: (limit, offset, author, favorited, tag) =>
    useQuery(querykeys.articles.all(limit, offset, author, favorited, tag)),
  useArticlesFeed: (limit, offset) => useQuery(querykeys.articles.feed(limit, offset)),
  useArticle: (slug, options) => {
    return useQuery(querykeys.articles.view(slug), options)
  }
}

const Comment = {
  useComments: slug => useQuery(querykeys.comments.all(slug))
}

const Tag = {
  useTags: () => useQuery(querykeys.tags.all())
}

export default {
  User,
  Profile,
  Article,
  Comment,
  Tag
}
