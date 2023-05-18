import { memo } from 'react'
import MDEditor from '@uiw/react-md-editor'

const MarkdownContent = ({ source }) => {
  return (
    <article className='prose prose-xl prose-pre:border prose-pre:text-gray-500 prose-pre:p-0 max-w-none w-full'>
      <MDEditor.Markdown source={source} className='bg-transparent' />
    </article>
  )
}

export default memo(MarkdownContent)
