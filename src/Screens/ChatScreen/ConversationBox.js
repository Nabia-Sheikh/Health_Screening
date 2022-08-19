import React, { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../utils/constants"

const ConversationBox = ({
  conversation,
  user,
  handleActiveConversation,
  onlineUsers,
}) => {
  const [doctor, setDoctor] = useState(null)
  const getDoctor = async (doctorID) => {
    try {
      const res = await axios.get(BASE_URL + "/user/doctor/" + doctorID)
      setDoctor(res.data.result)
    } catch (error) {
      console.log(error)
    }
  }

  const setActiveConversation = (conversation) => {
    handleActiveConversation(conversation, doctor)
  }

  useEffect(() => {
    const doctorID = conversation.members.find((m) => m !== user._id)
    getDoctor(doctorID)
  }, [])

  return (
    <>
      {doctor && (
        <li
          className="clearfix"
          onClick={() => setActiveConversation(conversation)}
        >
          <img
            src={
              "https://ethelartconnect.store/wp-content/uploads/2021/01/profile.jpg"
            }
            alt="User"
          />
          <div className="about">
            <div className="name mt-2 fw-bold">{doctor.name}</div>
            <div className="status">
              {onlineUsers.find((o) => o.userId === doctor._id) ? (
                <>
                  <i className="fa fa-circle online"></i> Online{" "}
                </>
              ) : (
                <>
                  <i className="fa fa-circle offline"></i> Offline
                </>
              )}{" "}
            </div>
          </div>
        </li>
      )}
    </>
  )
}

export default ConversationBox
