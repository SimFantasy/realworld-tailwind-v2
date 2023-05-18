import { useParams } from 'react-router-dom'
import { queries } from '@/hooks'
import { Loading, ArticleMeta, TagList, Comment, MarkdownContent } from '@/components'

const Article = () => {
  const { slug } = useParams()
  const { data, isLoading } = queries.Article.useArticle(slug)

  if (isLoading) return <Loading />

  return (
    <div className='flex flex-col'>
      <div className='py-6 min-h-[120px] bg-gray-800'>
        <div className='container flex flex-col gap-4 text-white'>
          <h2 className='text-2xl font-semibold'>{data?.article?.title}</h2>
          <ArticleMeta
            slug={data?.article?.slug}
            author={data?.article?.author}
            createdAt={data?.article?.createdAt}
            favorited={data?.article?.favorited}
            favoritesCount={data?.article?.favoritesCount}
          />
        </div>
      </div>

      <div className='container flex flex-col py-6'>
        <MarkdownContent source={data?.article?.body} />
        <div className='flex justify-start items-center gap-2 h-10 my-6'>
          <TagList tagList={data?.article?.tagList} />
        </div>

        <div className='flex justify-center items-center py-6 border-t border-gray-200'>
          <ArticleMeta
            slug={data?.article?.slug}
            author={data?.article?.author}
            createdAt={data?.article?.createdAt}
            favorited={data?.article?.favorited}
            favoritesCount={data?.article?.favoritesCount}
          />
        </div>

        <div className='w-[60vw] mx-auto'>
          <Comment slug={data?.article?.slug} author={data?.article?.author} />
        </div>
      </div>
    </div>
  )
}

export default Article
