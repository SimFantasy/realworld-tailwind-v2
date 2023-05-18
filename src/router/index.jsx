import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Layout } from '@/components'
import { Home, Article, Auth, Editor, Profile, Settings } from '@/pages'
import Test from '@/pages/Test'

const router = createBrowserRouter([
  { path: '/', element: <Navigate to='/home' /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/login', element: <Auth /> },
      { path: '/register', element: <Auth /> },
      { path: '/settings', element: <Settings /> },
      { path: '/create', element: <Editor /> },
      { path: '/edit/:slug', element: <Editor /> },
      { path: '/article/:slug', element: <Article /> },
      { path: '/profile/:username', element: <Profile /> },
      { path: '/test', element: <Test /> }
    ]
  }
])

export default router
