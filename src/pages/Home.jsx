import { useAuth } from '@/hooks'
import { HomeBanner, MainView, Tags } from '@/components'

const Home = () => {
  const { isAuth } = useAuth()

  return (
    <div className='flex flex-col'>
      {!isAuth && <HomeBanner />}
      <div className='container grid grid-cols-8 gap-6'>
        <div className='col-span-6'>
          <MainView />
        </div>
        <div className='col-span-2'>
          <Tags />
        </div>
      </div>
    </div>
  )
}

export default Home
