import React, { useContext, useEffect, useRef, useState } from "react"
import { axiosPrivate } from "../../utils/axios"
import { format } from "timeago.js"
import { io } from "socket.io-client"
import { AuthContext } from "../../utils/context"
import { BASE_URL } from "../../utils/constants"

const ChatBox = ({
  activeConversation,
  doctor,
  user,
  allConversations,
  handleOnlineUsers,
}) => {
  const [messages, setMessages] = useState(null)
  const [newMessage, setNewMessage] = useState("")
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const { onlineUsers, setOnlineUsers } = useContext(AuthContext)

  const messagesEndRef = useRef(null)
  const socket = useRef()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    console.log("MESSAGES", messages)
  }, [messages])
  useEffect(() => {
    if (messages && activeConversation) {
      scrollToBottom()
    }
  }, [messages, activeConversation])

  const getMessages = async () => {
    try {
      console.log("GET MESSAGES")
      const res = await axiosPrivate.get(`/messages/${activeConversation._id}`)
      setMessages(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMessages()
  }, [activeConversation])

  const handleNewMessage = async (e) => {
    e.preventDefault()

    if (!newMessage) {
      return
    }

    const message = {
      conversationId: activeConversation._id,
      text: newMessage,
      sender: user._id,
    }
    console.log(activeConversation)

    const receiverId = activeConversation.members.find(
      (member) => member !== user._id
    )
    console.log(receiverId)

    if (!receiverId) {
      return
    }
    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    })
    try {
      const res = await axiosPrivate.post("/messages", message)
      setMessages([...messages, res.data])
      setNewMessage("")
    } catch (error) {
      console.log(error)
    }
  }

  // Socket IO Work
  useEffect(() => {
    socket.current = io(BASE_URL)
    socket.current.on("getMessage", (data) => {
      getMessages()
      console.log("MESSAGGE RECEIVED", data)
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      })
    })
    socket.current.on("updateByYourself", (msg) => {
      console.log(msg)
      getMessages()
    })

    return () => {
      socket.current.disconnect()
    }
  }, [])

  useEffect(() => {
    if (user) {
      socket.current.emit("addUser", user._id)
      socket.current.on("getUsers", (users) => {
        setOnlineUsers(users)
      })
    }
  }, [user])

  useEffect(() => {
    arrivalMessage &&
      activeConversation?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]) &&
      console.log("Update Messages!")
  }, [arrivalMessage || activeConversation])

  return (
    <div className="chat">
      <div className="chat-header clearfix">
        <div className="row">
          <div className="col-lg-6">
            <a href="#" data-toggle="modal" data-target="#view_info">
              <img
                src="https://ethelartconnect.store/wp-content/uploads/2021/01/profile.jpg"
                alt="avatar"
              />
            </a>
            <div className="chat-about">
              <h6>
                {doctor && doctor.name}
                <br />
                {onlineUsers.find((o) => o.userId === doctor._id) ? (
                  <small>
                    <i className="fa fa-circle online"></i> Online{" "}
                  </small>
                ) : (
                  <small>
                    <i className="fa fa-circle offline"></i>{" "}
                    <span className="small">Offline</span>
                  </small>
                )}{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-history">
        <ul className="m-b-0">
          {messages &&
            messages.length > 0 &&
            messages?.map((message) => (
              <li key={message._id} className="clearfix" ref={messagesEndRef}>
                <div
                  className={
                    message.sender === user._id
                      ? "message-data float-right"
                      : "message-data"
                  }
                >
                  <span
                    className={
                      message.sender === user._id
                        ? "message my-message"
                        : "message other-message"
                    }
                  >
                    {message.text}
                  </span>
                  <div className="message-data  my-2">
                    {" "}
                    <small className="message-data-time">
                      {format(message.createdAt)}
                    </small>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="chat-message clearfix">
        <form onSubmit={handleNewMessage}>
          <div className="input-group mb-0">
            <input
              className="form-control"
              placeholder="Type message..."
              rows="3"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <div className="input-group-prepend" onClick={handleNewMessage}>
              <span className="input-group-text h-100 w-100">
                <i className="fa fa-send" />
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChatBox
