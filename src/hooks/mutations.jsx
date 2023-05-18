import { useMutation, useQueryClient } from '@tanstack/react-query'
import { querykeys } from '@/service/queryKeys'
import api from '@/service/apis'
import { useAuth } from '@/hooks'

const User = {
  useLogin: () => {
    const { login } = useAuth()
    return useMutation(api.User.login, {
      onSuccess: data => {
        login(data)
      }
    })
  },
  useRegister: () => {
    const { login } = useAuth()
    return useMutation(api.User.register, {
      onSuccess: data => {
        login(data)
      }
    })
  },
  useUserUpdate: () => {
    const queryClient = useQueryClient()
    return useMutation(api.User.update, {
      onSuccess: () => {
        queryClient.invalidateQueries(querykeys.users.view._def)
      }
    })
  }
}

const Profile = {
  useFollow: (following, username) => {
    const queryClient = useQueryClient()
    return useMutation(following ? () => api.Profile.unfollow(username) : () => api.Profile.follow(username), {
      onSuccess: () => {
        queryClient.invalidateQueries(querykeys.profile.view._def)
        queryClient.invalidateQueries(querykeys.articles.view._def)
      }
    })
  }
}

const Article = {
  useArticleCreate: () => {
    const queryClient = useQueryClient()
    return useMutation(api.Article.create, {
      onSuccess: () => {
        queryClient.invalidateQueries(querykeys.articles.all._def)
        queryClient.invalidateQueries(querykeys.articles.feed._def)
      }
    })
  },
  useArticleUpdate: slug => {
    const queryClient = useQueryClient()
    return useMutation(article => api.Article.update(slug, article), {
      onSuccess: () => {
        queryClient.invalidateQueries(querykeys.articles.all._def)
        queryClient.invalidateQueries(querykeys.articles.feed._def)
      }
    })
  },
  useArticleDelete: slug => {
    const queryClient = useQueryClient()
    return useMutation(api.Article.delete, {
      onSuccess: () => {
        queryClient.invalidateQueries(querykeys.articles.all._def)
        queryClient.invalidateQueries(querykeys.articles.feed._def)
      }
    })
  }
}

const Comment = {
  useCommentCreate: slug => {
    const queryClient = useQueryClient()
    return useMutation(body => api.Comment.create(slug, body), {
      onSuccess: () => {
        queryClient.invalidateQueries(querykeys.comments.all._def)
      }
    })
  },
  useCommentDelete: (slug, id) => {
    const queryClient = useQueryClient()
    return useMutation(() => api.Comment.delete(slug, id), {
      onSuccess: () => {
        queryClient.invalidateQueries(querykeys.comments.all._def)
      }
    })
  }
}

const Favorite = {
  useFavorite: (slug, favorited) => {
    const queryClient = useQueryClient()
    return useMutation(favorited ? () => api.Favorite.unfavorite(slug) : () => api.Favorite.favorite(slug), {
      onSuccess: () => {
        queryClient.invalidateQueries(querykeys.articles.all._def)
        queryClient.invalidateQueries(querykeys.articles.feed._def)
        queryClient.invalidateQueries(querykeys.articles.view._def)
      }
    })
  }
}

export default {
  User,
  Profile,
  Article,
  Comment,
  Favorite
}
