import React, { useState } from "react"
import { Button, Card, Container, Modal } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const ResultScreen = () => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => {
    setShow(true)
  }
  return (
    <Container className="mt-5">
      <h1 className="text-center text-success">Here’s your Result.</h1>
      <div className=" d-flex justify-content-center mt-5 h-25">
        <Card className="border p-4 w-50 bg-light justify-content-center ">
          <p className=" text-center">Your Mental screening test score was</p>
          <h3 className="text-center text-primary">Moderate State</h3>
          <div className="text-center">
            <Button variant="primary" className="mt-3 me-lg-5 me-md-5 px-5">
              Your Score : 06 / 10
            </Button>
            <Button
              variant="primary"
              className="mt-3 px-5"
              onClick={handleShow}
            >
              Email Results
            </Button>
          </div>
          <div className="text-center">
            <Button variant="primary" className="mt-3 mx-5 px-5">
              Take Another Test
            </Button>
          </div>
        </Card>
      </div>
      <div className="text-center">
        <Button
          variant="primary"
          className="mt-3 mx-5 px-5"
          onClick={() => navigate("/history")}
        >
          See History
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your result is sent to your email. However, you can your results in
          History page!
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default ResultScreen
