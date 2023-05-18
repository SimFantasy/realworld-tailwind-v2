import { useEffect, useState } from 'react'
import { ProfileBanner, Loading, ArticleList, TabBar } from '@/components'
import cx from 'clsx'
import { queries } from '@/hooks'
import { PAGE_SIZE } from '@/constants/config'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('favorited')
  const [myPage, setMyPage] = useState(1)
  const [favoritedPage, setFavoritedPage] = useState(1)
  const myOffset = (myPage - 1) * PAGE_SIZE
  const favoritedOffset = (favoritedPage - 1) * PAGE_SIZE

  const tabs = [
    { title: 'My Article', name: 'my', auth: 'any' },
    { title: 'Favorite Article', name: 'favorited', auth: 'any' }
  ]

  const { data, isLoading } = queries.Profile.useProfile()

  const author = data?.profile?.username
  const favorited = data?.profile?.username

  const { data: myData, isLoading: myIsLoading } = queries.Article.useArticles(PAGE_SIZE, myOffset, author)

  const { data: favoritedData, isLoading: favoritedIsLoading } = queries.Article.useArticles(
    PAGE_SIZE,
    favoritedOffset,
    null,
    favorited
  )
  if (isLoading) return <Loading />

  return (
    <div className='flex flex-col gap-10'>
      {isLoading || myIsLoading ? (
        <Loading />
      ) : (
        <>
          <ProfileBanner {...data?.profile} />

          <div className='container flex flex-col'>
            <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === 'favorited' ? (
              <ArticleList
                data={favoritedData}
                isLoading={favoritedIsLoading}
                page={favoritedPage}
                setPage={setFavoritedPage}
              />
            ) : (
              <ArticleList data={myData} isLoading={myIsLoading} page={myPage} setPage={setMyPage} />
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Profile
