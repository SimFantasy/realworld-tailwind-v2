const HomeBanner = () => {
  return (
    <div className='min-h-[240px] bg-[url("@/assets/images/banner-bg.jpg")] bg-no-repeat bg-[center_-480px] relative'>
      <div className=' absolute top-0 left-0 w-full h-full bg-green-500/60 grid'>
        <div className='m-auto text-white text-center'>
          <h2 className='text-6xl mb-2'>Conduit</h2>
          <p className='text-lg'>A place to share your knowledge.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
