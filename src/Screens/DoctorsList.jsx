import React from "react"
import { Container, Button, Card } from "react-bootstrap"
import Image from "react-bootstrap/Image"

const results = [
  {
    date: "01/01/2020",
    health: "90",
    summary: "Moderate State",
  },
  {
    date: "01/01/2020",
    health: "30",
    summary: "Danger",
  },
  {
    date: "01/01/2020",
    health: "50",
    summary: "Severe State",
  },
]

const DoctorsList = () => {
  return (
    <Container className="my-4">
      <h3>Doctor's List</h3>

      <div>
        {results.map((result) => (
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
                    Dr. John Doe
                    <br />
                    <span className="text-muted">MD, PhD</span>
                  </h6>
                </div>
              </div>

              <h6 className="ms-1 my-2">
                <span className="font-weight-bold me-2">Experience:</span>
                <span className="text-muted">5 years</span>
              </h6>

              <div className="d-flex  align-items-center">
                <div>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span className="text-muted">
                    <span className="font-weight-bold ms-2">Voice Call</span>
                  </span>
                </div>
                <div className="mx-3 my-3">
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <span className="text-muted">
                    <span className="font-weight-bold ms-2">Video Call</span>
                  </span>
                </div>
              </div>
              <Button variant="outline-primary" className="px-5" size="sm">
                Send Email
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
