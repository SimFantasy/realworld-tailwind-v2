import { useState } from 'react'
import queries from '@/hooks/queries'
import { querykeys } from '@/service/queryKeys'

import { PAGE_SIZE } from '@/constants/config'

const Test = () => {
  const [page, setPage] = useState(1)
  const limit = PAGE_SIZE
  const offset = (page - 1) * limit
  // 通过key仓库查询queryKey
  const articleKey = querykeys.articles.all(limit, offset).queryKey
  // 通过hooks查询articles数据
  const { data, isLoading } = queries.Article.useArticles(limit, offset)

  const storeKey = actions.getKey()

  if (isLoading) return <div>Loading</div>

  console.log('data', data)
  console.log('articleKey', articleKey)
  console.log('allKey', allKey)
  console.log('storeKey', storeKey)

  return <div>Test</div>
}

export default Test
