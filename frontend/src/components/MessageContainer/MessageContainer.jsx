import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversations from '../../store/useConversations'
import { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext'


const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversations()

  useEffect(() => {
    //Unmounting state via cleanup func
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className='md:min-w-[450px] flex flex-col border-l border-white border-4 bg-white'>
        {!selectedConversation ? (
        <NoChatSelected/>
        ) : (
        <>
          {/* Header */}
          <div className='bg-lime-300 px-4 py-2 mb-2'>
            <span className='label-text text-green-900'>To:</span> <span className='text-green-900 font-bold'>{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>)} 
    </div>
  )
}
 
export default MessageContainer

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
  console.log(authUser)
	return (
		<div className='flex items-center justify-center w-full h-full bg-yellow-100'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-emerald-600 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullname}</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};