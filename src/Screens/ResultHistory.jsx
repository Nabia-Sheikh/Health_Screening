import React from "react"
import { Container, Button, Card } from "react-bootstrap"

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

const ResultHistory = () => {
  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>History</h3>
        <Button variant="outline-primary" size="lg">
          Generate Chart
        </Button>
      </div>
      <div>
        {results.map((result) => (
          <Card className="my-4">
            <Card.Body>
              <h6>
                <span className="font-weight-bold me-2">Dated:</span>
                <span className="text-muted">{result.date}</span>
              </h6>
              <h1
                className={
                  result.health < 50
                    ? "text-danger"
                    : result.health < 70
                    ? "text-warning"
                    : "text-success"
                }
              >
                {result.summary}
              </h1>
              <h2>
                <span className="font-weight-bold me-2">Health:</span>
                <span className="text-muted">{result.health + "%"}</span>
              </h2>
              <Button variant="outline-primary" size="lg">
                See Answers
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

export default ResultHistory
