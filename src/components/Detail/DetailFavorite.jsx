import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri'
import cx from 'clsx'
import { mutations } from '@/hooks'

const DetailFavorite = ({ slug, favorited, favoritesCount }) => {
  const { mutate, isLoading } = mutations.Favorite.useFavorite(slug, favorited)
  return (
    <button
      className={cx(
        'btn',
        {
          'border-green-500 text-green-500 bg-transparent hover:border-green-600 hover:text-green-600': !favorited
        },
        {
          'border-green-500 text-white bg-green-500 hover:bg-green-600 hover:border-green-600': favorited
        }
      )}
      onClick={() => mutate()}
      disabled={isLoading}
    >
      {favorited ? (
        <>
          <RiHeart3Fill />
          <span>Unfavorite Article ({favoritesCount})</span>
        </>
      ) : (
        <>
          <RiHeart3Line />
          <span>favorite Article ({favoritesCount})</span>
        </>
      )}
    </button>
  )
}

export default DetailFavorite
