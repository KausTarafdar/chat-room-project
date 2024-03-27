import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogOutButton from './LogOutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-white border-4 p-4 flex flex-col'>
        <SearchInput />
        <div className='divider before:bg-green-600 after:bg-green-600 px-3'></div>
        <Conversations />
        <LogOutButton />
    </div>
  )
}

export default Sidebar