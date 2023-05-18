import { RiLoader5Fill } from 'react-icons/ri'

const Loading = () => {
  return (
    <div className='w-full p-6 flex justify-center items-center'>
      <div className='w-8 h-8 flex justify-center items-center text-green-500 animate-spin'>
        <RiLoader5Fill size={32} />
      </div>
    </div>
  )
}

export default Loading
