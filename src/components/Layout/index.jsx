import { Outlet } from 'react-router-dom'

import { Header, Footer } from '@/components'

const Layout = () => {
  return (
    <div className='w-screen min-h-screen'>
      <Header />
      <main className='content-area'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
