import { useAuthContext } from "../../context/AuthContext"
import useConversations from "../../store/useConversations"
import { getExactTime } from "../../utils/getExactTime"

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversations()
  const fromSender = message.senderId === authUser._id
  console.log(message.createdAt)
  const formattedDate = getExactTime(message.createdAt)
  const chatClassName = fromSender ? "chat-end" : 'chat-start'
  const profilePic = fromSender ? authUser.profilePic : selectedConversation?.profilePic
  const chatBgColor = fromSender ? "bg-amber-400" : "bg-blue-950"

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic}/>
        </div>
      </div>
      <div className={`chat-bubble text-white bg-amber-400 ${chatBgColor} pb-2`}>{message.message}</div>
      <div className='chat-footer text-xs flex gap-1 item-center text-black'>{formattedDate}</div>
    </div>
  )
}

export default Message