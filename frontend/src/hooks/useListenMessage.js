import { useEffect } from "react"

import { useSocketContext } from "../context/SocketContext"
import useConversations from "../store/useConversations"

import notifSound from "../assets/sounds/cat_sms_short.mp3"

const useListenMessage = () => {
  const {socket} = useSocketContext()
  const {messages, setMessages} = useConversations()

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
        const sound = new Audio(notifSound)
        sound.play()
        setMessages([...messages, newMessage])
    })

    return () => socket?.off("newMessage")
  }, [socket, setMessages, messages])
}

export default useListenMessage