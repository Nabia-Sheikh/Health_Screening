import React, { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AuthContext } from "../../utils/context"
import "./Chat.css"
import ChatBox from "./ChatBox"
import PeopleList from "./PeopleList"

function ChatScreen() {
  const user = JSON.parse(localStorage.getItem("user"))
  const [activeConversation, setActiveConversation] = useState(null)
  const onlineUsers = useContext(AuthContext).onlineUsers
  const [doctor, setDoctor] = useState(null)
  const { state } = useLocation()
  useEffect(() => {
    if (state && state.conversation) {
      setActiveConversation(state.conversation)
      setDoctor(state.doctor)
    }
  }, [state])

  const handleActiveConversation = (conversation, doctor) => {
    setActiveConversation(conversation)
    setDoctor(doctor)
  }
  const handleAllConversations = (conversations) => {
    // console.log(conversations)
  }

  return (
    <>
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <PeopleList
                onlineUsers={onlineUsers}
                allConversations={handleAllConversations}
                handleActiveConversation={handleActiveConversation}
              />
              {activeConversation && user ? (
                <ChatBox
                  activeConversation={activeConversation}
                  doctor={doctor}
                  user={user}
                />
              ) : (
                <div className="chat ">
                  <div className="chat-history d-flex align-items-center justify-content-center">
                    <h3>
                      You can directly contact to Consultants to get the best
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatScreen
