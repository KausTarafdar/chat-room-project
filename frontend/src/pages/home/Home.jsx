import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/MessageContainer/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-yellow-200 bg-clip-padding bg-opacity-90 border-yellow-100'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home