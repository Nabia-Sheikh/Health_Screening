import React, { useContext, useEffect, useRef } from "react"
import { axiosPrivate } from "../../utils/axios"
import { AuthContext } from "../../utils/context"
import ConversationBox from "./ConversationBox"

const PeopleList = ({ handleActiveConversation, allConversations }) => {
  const [conversations, setConversations] = React.useState([])
  const onlineUsers = useContext(AuthContext).onlineUsers
  const user = JSON.parse(localStorage.getItem("user"))

  // API

  const getConversations = async () => {
    try {
      const { data } = await axiosPrivate.get(`/conversations/${user._id}`)
      setConversations(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (conversations.length > 0) {
      allConversations(conversations)
    }
  }, [conversations])

  useEffect(() => {
    if (user) {
      getConversations()
    }
  }, [])

  return (
    <div id="plist" className="people-list">
      <ul className="list-unstyled chat-list mt-2 mb-0">
        {conversations.map((conversation) => (
          <ConversationBox
            onlineUsers={onlineUsers}
            key={conversation._id}
            conversation={conversation}
            user={user}
            handleActiveConversation={handleActiveConversation}
          />
        ))}
    
      </ul>
    </div>
  )
}

export default PeopleList
