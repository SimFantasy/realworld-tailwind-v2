import { useState } from 'react'
import cx from 'clsx'
import { TabBar, ArticleList } from '@/components'
import { queries } from '@/hooks'
import { PAGE_SIZE } from '@/constants/config'

const MainView = () => {
  const tabs = [
    { title: 'You Feed', name: 'feed', auth: true },
    { title: 'Global Feed', name: 'global', auth: 'any' }
  ]

  const [activeTab, setActiveTab] = useState('global')
  const [globalPage, setGlobalPage] = useState(1)
  const [feedPage, setFeedPage] = useState(1)

  const glboaloffset = (globalPage - 1) * PAGE_SIZE
  const feedoffset = (feedPage - 1) * PAGE_SIZE

  const { data: globalData, isLoading: globalIsLoading } = queries.Article.useArticles(PAGE_SIZE, glboaloffset)
  const { data: feedData, isLoading: feedIsLoading } = queries.Article.useArticlesFeed(PAGE_SIZE, feedoffset)

  return (
    <div className='flex flex-col mt-8'>
      <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'global' ? (
        <ArticleList data={globalData} isLoading={globalIsLoading} page={globalPage} setPage={setGlobalPage} />
      ) : (
        <ArticleList data={feedData} isLoading={feedIsLoading} page={feedPage} setPage={setFeedPage} />
      )}
    </div>
  )
}

export default MainView
