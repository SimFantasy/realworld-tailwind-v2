import { useNavigate } from 'react-router-dom'
import { RiEdit2Line, RiDeleteBin6Line } from 'react-icons/ri'
import toast from 'react-hot-toast'
import { UserInfo, DetailFavorite, DetailFollow } from '@/components'
import { useAuth, mutations } from '@/hooks'

const ArticleMeta = ({ slug, author, createdAt, favorited, favoritesCount }) => {
  const navigate = useNavigate()
  const { authUser } = useAuth()
  const canEdit = authUser.user.username === author.username

  const handleEdit = () => {
    navigate(`/edit/${slug}`)
  }

  const { mutate, isLoading } = mutations.Article.useArticleDelete(slug)

  const handleDelete = () => {
    mutate(slug, {
      onSuccess: () => {
        toast.success('Article delete success ~')
        navigate('/home')
      }
    })
  }

  return (
    <div className='flex justify-start items-center gap-4 h-10'>
      <UserInfo author={author} date={createdAt} />
      {canEdit ? (
        <>
          <button
            className='btn border-blue-300 text-blue-300 bg-transparent hover:border-blue-400 hover:text-blue-400'
            onClick={handleEdit}
          >
            <RiEdit2Line />
            <span>Edit Article</span>
          </button>
          <button
            className='btn border-red-300 text-red-300 bg-transparent hover:border-red-400 hover:text-red-400'
            disabled={isLoading}
            onClick={handleDelete}
          >
            <RiDeleteBin6Line />
            <span>Delete Article</span>
          </button>
        </>
      ) : (
        <>
          <DetailFollow slug={slug} username={author?.username} following={author?.following} />
          <DetailFavorite slug={slug} favorited={favorited} favoritesCount={favoritesCount} />
        </>
      )}
    </div>
  )
}

export default ArticleMeta
