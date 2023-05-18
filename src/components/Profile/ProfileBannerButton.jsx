import { useNavigate } from 'react-router-dom'
import { RiSettingsLine, RiAddCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import cx from 'clsx'
import { useAuth, mutations } from '@/hooks'

const ProfileBannerButton = ({ username, following }) => {
  const navigate = useNavigate()
  const { authUser } = useAuth()

  const canUpdateProfile = authUser?.user?.username === username

  const { mutate, isLoading } = mutations.Profile.useFollow(following, username)

  const handleEditSettings = () => {
    navigate(`/settings`)
  }

  console.log('following', following)

  return (
    <>
      {canUpdateProfile ? (
        <button
          className='btn border-gray-300 text-gray-300 hover:bg-gray-500/50 hover:border-gray-100 hover:text-gray-100'
          onClick={handleEditSettings}
        >
          <RiSettingsLine size={16} />
          Edit Profile Settings
        </button>
      ) : (
        <button
          className={cx(
            'btn',
            {
              'border-gray-300 text-gray-300 bg-transparent hover:border-gray-400 hover:text-white': !following
            },
            {
              'border-gray-500 text-white bg-gray-500 hover:bg-gray-600 hover:border-gray-600': following
            }
          )}
          onClick={() => mutate()}
          disabled={isLoading}
        >
          {following ? (
            <>
              <RiCheckboxCircleFill size={16} />
              <span>UnFollow {username}</span>
            </>
          ) : (
            <>
              <RiAddCircleLine size={16} />
              <span>follow {username}</span>
            </>
          )}
        </button>
      )}
    </>
  )
}

export default ProfileBannerButton
