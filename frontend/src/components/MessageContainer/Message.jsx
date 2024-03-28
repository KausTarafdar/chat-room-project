import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'/>
        </div>
      </div>
      <div className={'chat-bubble text-white bg-amber-400'}>Hi what is up?</div>
      <div className='chat-footer text-xs flex gap-1 item-center text-black'>18:11pm</div>
    </div>
  )
}

export default Message