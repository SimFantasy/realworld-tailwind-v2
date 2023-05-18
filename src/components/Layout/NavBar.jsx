import { NavLink, useNavigate } from 'react-router-dom'
import { RiShutDownLine, RiSettingsLine, RiPencilLine } from 'react-icons/ri'
import toast from 'react-hot-toast'
import { useAuth } from '@/hooks'
import avatarImage from '@/assets/images/avatar.png'

const NavBar = () => {
  const { isAuth, logout, authUser } = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    toast.success('logout success ~')
    navigate('/login')
  }
  return (
    <nav className='navs flex justify-end items-center gap-4 h-full'>
      <NavLink to='/home'>Home</NavLink>
      {isAuth && (
        <>
          <NavLink to='/create' className='flex justify-center items-center gap-2'>
            <RiPencilLine size={16} />
            Write
          </NavLink>
          <NavLink to='/settings' className='flex justify-center items-center gap-2'>
            <RiSettingsLine size={16} />
            Settings
          </NavLink>
          <NavLink to={`/profile/${authUser?.user?.username}`} className='flex justify-start items-center gap-2'>
            <img src={authUser?.user?.image ? authUser?.user?.image : avatarImage} className='w-8 h-8 rounded-full' />
            <span className='text-gray-700'>{authUser?.user?.username}</span>
          </NavLink>
          <button
            className='flex justify-center items-center w-8 h-8 rounded bg-green-100 text-green-400 hover:bg-green-200 hover:text-green-500'
            onClick={handleLogout}
          >
            <RiShutDownLine />
          </button>
        </>
      )}
      {!isAuth && (
        <>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </>
      )}
    </nav>
  )
}

export default NavBar
