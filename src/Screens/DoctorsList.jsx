import React, { useContext, useEffect, useState } from "react"
import { Container, Button, Card } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import { BASE_URL } from "../utils/constants"
import axios from "axios"
import { AuthContext } from "../utils/context"
import { useNavigate } from "react-router-dom"

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([])
  const user = useContext(AuthContext).user
  const navigate = useNavigate()

  const getDoctors = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/doctors`)
      setDoctors(response.data.result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDoctors()
  }, [])

  // Handle chat with doctor
  const handleChat = async (doctor) => {
    try {
      const response = await axios.post(`${BASE_URL}/conversations/`, {
        senderId: user._id,
        receiverId: doctor._id,
      })
      if (response.data.msg === "Conversation already exists") {
        const convo = response.data.result
        return navigate("/chats", {
          state: {
            conversation: convo,
            doctor: doctor,
          },
        })
      }
      const convoID = response.data._id
      navigate("/chats", {
        state: {
          conversation: convoID,
          doctor: doctor,
        },
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container className="my-4">
      <h3>Doctor's List</h3>

      <div>
        {doctors.map((doctor) => (
          <Card className="my-4">
            <Card.Body>
              <div className="d-flex  align-items-center">
                <Image
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  roundedCircle
                  className="me-3"
                  alt="Doctor's Avatar"
                  width="50"
                  height="50"
                />
                <div className="flex-grow-1">
                  <h6>
                    Dr. {doctor?.name}
                    <br />
                    <span className="text-muted">{doctor?.qualification}</span>
                  </h6>
                </div>
              </div>

              <h6 className="ms-1 my-2">
                <span className="font-weight-bold me-2">Experience:</span>
                <span className="text-muted">
                  {doctor?.experience
                    ? doctor?.experience > 1
                      ? doctor?.experience + " years"
                      : doctor?.experience + " year"
                    : "N/A"}
                </span>
              </h6>

              <div className="d-flex  align-items-center">
                <div>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span className="text-muted">
                    <span className="font-weight-bold ms-2">Voice Call</span>
                  </span>
                </div>
                <div className="mx-3 my-3">
                  <i className="fa fa-video-camera" aria-hidden="true"></i>
                  <span className="text-muted">
                    <span className="font-weight-bold ms-2">Video Call</span>
                  </span>
                </div>
              </div>
              <Button
                variant="outline-primary"
                className="px-5 me-3"
                size="sm"
                onClick={() => handleChat(doctor)}
              >
                Chat
              </Button>
              <Button variant="outline-primary" className="px-5" size="sm">
                Send History
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/01/2020</td>
              <td>90</td>
              <td>
                <Button variant="outline-primary" size="sm">
                  View
                </Button>
              </td>
            </tr>
            <tr>
              <td>01/01/2020</td>
              <td>90</td>
              <td>
                <Button variant="outline-primary" size="sm">
                  View
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </Container>
  )
}

export default DoctorsList
