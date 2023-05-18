import { RiAddCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import cx from 'clsx'
import { mutations } from '@/hooks'

const DetailFollow = ({ slug, username, following }) => {
  const { mutate, isLoading } = mutations.Profile.useFollow(following, username)
  return (
    <button
      disabled={isLoading}
      onClick={() => mutate()}
      className={cx(
        'btn',
        {
          'border-gray-300 text-gray-300 bg-transparent hover:border-gray-400 hover:text-white': !following
        },
        {
          'border-gray-500 text-white bg-gray-500 hover:bg-gray-600 hover:border-gray-600': following
        }
      )}
    >
      {following ? (
        <>
          <RiCheckboxCircleFill />
          <span>UnFollow {username}</span>
        </>
      ) : (
        <>
          <RiAddCircleLine />
          <span>Follow {username}</span>
        </>
      )}
    </button>
  )
}

export default DetailFollow
