import { Link } from 'react-router-dom'
import { RiCoreosFill } from 'react-icons/ri'
import { NavBar } from '@/components'

const Header = () => {
  return (
    <header className='w-screen h-14 bg-white shadow-md shadow-gray-100'>
      <div className='container flex justify-between items-center h-full'>
        <Link to='/home' className='flex justify-start items-center gap-2'>
          <RiCoreosFill size={32} className='text-green-600' />
          <span className='text-2xl text-green-700 font-semibold'>Conduit</span>
        </Link>
        <NavBar />
      </div>
    </header>
  )
}

export default Header
