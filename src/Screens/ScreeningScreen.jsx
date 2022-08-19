import React, { useEffect, useState } from "react"
import { Container, Card, Form, Button, Modal } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const ScreeningScreen = () => {
  const [show, setShow] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const navigate = useNavigate()

  // Question # 01
  const [q1Ans, setQ1Ans] = useState("")
  const [q1_1Ans, setQ1_1Ans] = useState("")
  const [q1_1_1Ans, setQ1_1_1Ans] = useState("")

  // Question # 02
  const [q2Ans, setQ2Ans] = useState("")
  const [q2_1Ans, setQ2_1Ans] = useState("")

  // Question # 03
  const [q3Ans, setQ3Ans] = useState("")

  // Question # 04
  const [q4Ans, setQ4Ans] = useState("")
  const [q4_1Ans, setQ4_1Ans] = useState(Date.now())

  // Question # 05
  const [q5Ans, setQ5Ans] = useState("")

  // Question # 06
  const [q6Ans, setQ6Ans] = useState("")

  // Question # 07
  const [q7Ans, setQ7Ans] = useState("")

  // Question # 08
  const [q8Ans, setQ8Ans] = useState("")

  // Question # 09
  const [q9Ans, setQ9Ans] = useState("")

  // Question # 10
  const [q10Ans, setQ10Ans] = useState("")

  useEffect(() => {
    if (showResults) {
      handleSubmit()
    }
  }, [showResults])

  const handleSubmit = () => {
    // Collect all the answers and add them to one object
    if (
      q1Ans === "" ||
      q2Ans === "" ||
      q3Ans === "" ||
      q4Ans === "" ||
      q5Ans === "" ||
      q6Ans === "" ||
      q7Ans === "" ||
      q8Ans === "" ||
      q9Ans === "" ||
      q10Ans === ""
    ) {
      alert("Please answer all the questions")
      return
    }

    const answers = {
      q1: q1Ans,
      q1_1: q1_1Ans,
      q1_1_1: q1_1_1Ans,
      q2: q2Ans,
      q2_1: q2_1Ans,
      q3: q3Ans,
      q4: q4Ans,
      q4_1: q4_1Ans,
      q5: q5Ans,
      q6: q6Ans,
      q7: q7Ans,
      q8: q8Ans,
      q9: q9Ans,
      q10: q10Ans,
    }
    console.log(answers)
    navigate("/result")
    setShowResults(false)
  }

  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => {
    setShow(true)
  }

  return (
    <Container className="my-4">
      <h3 className="text-center text-success">
        Answer Carefully and Honestly!
      </h3>
      <Card className="my-4">
        <Card.Body>
          <h4 className="text-center">
            Over the last 2 weeks, how often have you been bothered by any of
            the following problems?
          </h4>
          <div className="questions mt-4">
            {/* ======================================================== */}

            {/* Question 1 */}
            <span>
              <p>1. Little interest or pleasure in doing things.</p>
              {/* Radio Buttons */}
              <div className="form-check form-check-inline">
                <Form.Check
                  inline
                  label="Not at All"
                  value="Not at All"
                  onChange={(e) => setQ1Ans(e.target.value)}
                  name="group1"
                  type={"radio"}
                  id={`q-1-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  onChange={(e) => setQ1Ans(e.target.value)}
                  value="Several days"
                  name="group1"
                  type={"radio"}
                  id={`q-1-2`}
                />
                <Form.Check
                  inline
                  label="More than half days"
                  value="More than half days"
                  onChange={(e) => setQ1Ans(e.target.value)}
                  name="group1"
                  type={"radio"}
                  id={`q-1-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  value="Nearly every day"
                  onChange={(e) => setQ1Ans(e.target.value)}
                  name="group1"
                  type={"radio"}
                  id={`q-1-4`}
                />
              </div>
            </span>
            {/* ======================================================== */}

            {q1Ans === "Nearly every day" && (
              <span className="ml-3">
                <p className="ms-3 text-success">
                  1.1 Did you take sleep properly.
                </p>
                {/* Radio Buttons */}
                <div className="form-check form-check-inline ms-3 text-success">
                  <Form.Check
                    inline
                    label="Yes"
                    value="Yes"
                    onChange={(e) => setQ1_1Ans(e.target.value)}
                    name="group1_1"
                    type={"radio"}
                    id={`q-1-1-1`}
                  />
                  <Form.Check
                    inline
                    label="No"
                    onChange={(e) => setQ1_1Ans(e.target.value)}
                    value="No"
                    name="group1_1"
                    type={"radio"}
                    id={`q-1-1-2`}
                  />
                </div>
              </span>
            )}
            {/* ======================================================== */}

            {q1Ans === "Nearly every day" && q1_1Ans === "No" && (
              <span className="ml-3">
                <p className="ms-3 text-success">
                  1.1.1 Describe the reason for not taking sleep properly.
                </p>
                {/* Radio Buttons */}
                <div className="form-check form-check-inline ms-3 text-success">
                  <div className="form-group py-1">
                    <input
                      type="text"
                      name="reasons"
                      required
                      value={q1_1_1Ans}
                      onChange={(e) => setQ1_1_1Ans(e.target.value)}
                      className="form-control"
                      placeholder="Reason"
                    />
                  </div>
                </div>
              </span>
            )}

            {/* ======================================================== */}
            {/* Question 2 */}
            <span>
              <p>2. Feeling down, depressed, or hopeless</p>
              {/* Radio Buttons */}
              <div className="form-check form-check-inline">
                <Form.Check
                  inline
                  label="Not at All"
                  value="Not at All"
                  onChange={(e) => setQ2Ans(e.target.value)}
                  name="group2"
                  type={"radio"}
                  id={`q-2-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  value="Several days"
                  onChange={(e) => setQ2Ans(e.target.value)}
                  name="group2"
                  type={"radio"}
                  id={`q-2-2`}
                />
                <Form.Check
                  inline
                  label="More than half days"
                  value="More than half days"
                  onChange={(e) => setQ2Ans(e.target.value)}
                  name="group2"
                  type={"radio"}
                  id={`q-2-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  value="Nearly every day"
                  onChange={(e) => setQ2Ans(e.target.value)}
                  name="group2"
                  type={"radio"}
                  id={`q-2-4`}
                />
              </div>
            </span>
            {q2Ans === "Nearly every day" && (
              <div className="ms-3 mt-2 text-success">
                <p>2.1 Did you facing any Issues in your Relationship?</p>
                {/* Radio Buttons */}
                <div className="form-check form-check-inline">
                  <Form.Check
                    inline
                    label="Yes"
                    value="Yes"
                    onChange={(e) => setQ2_1Ans(e.target.value)}
                    name="group2_1"
                    type={"radio"}
                    id={`q-2-1-1`}
                  />
                  <Form.Check
                    inline
                    label="No"
                    value="No"
                    onChange={(e) => setQ2_1Ans(e.target.value)}
                    name="group2_1"
                    type={"radio"}
                    id={`q-2-1-2`}
                  />
                </div>
              </div>
            )}
            {/* ======================================================== */}
            {/* Question 03 */}
            <span>
              <p>3. Trouble falling or staying asleep, or sleeping too much</p>
              {/* Radio Buttons */}
              <div className="form-check form-check-inline">
                <Form.Check
                  inline
                  label="Not at All"
                  value="Not at All"
                  name="group3"
                  onChange={(e) => setQ3Ans(e.target.value)}
                  type={"radio"}
                  id={`q-3-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  value="Several days"
                  onChange={(e) => setQ3Ans(e.target.value)}
                  name="group3"
                  type={"radio"}
                  id={`q-3-2`}
                />
                <Form.Check
                  inline
                  label="More than half days"
                  onChange={(e) => setQ3Ans(e.target.value)}
                  value="More than half days"
                  name="group3"
                  type={"radio"}
                  id={`q-3-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  onChange={(e) => setQ3Ans(e.target.value)}
                  value="Nearly every day"
                  name="group3"
                  type={"radio"}
                  id={`q-3-4`}
                />
              </div>
            </span>
            {/* ======================================================== */}
            {/* Question 4 */}
            <span>
              <p>4. Feeling tired or having little energy</p>
              {/* Radio Buttons */}
              <div className="form-check form-check-inline">
                <Form.Check
                  inline
                  label="Not at All"
                  onChange={(e) => setQ4Ans(e.target.value)}
                  value="Not at All"
                  name="group4"
                  type={"radio"}
                  id={`q-4-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  value="Several days"
                  onChange={(e) => setQ4Ans(e.target.value)}
                  name="group4"
                  type={"radio"}
                  id={`q-4-2`}
                />
                <Form.Check
                  inline
                  label="More than half days"
                  value="More than half days"
                  onChange={(e) => setQ4Ans(e.target.value)}
                  name="group4"
                  type={"radio"}
                  id={`q-4-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  onChange={(e) => setQ4Ans(e.target.value)}
                  value="Nearly every day"
                  name="group4"
                  type={"radio"}
                  id={`q-4-4`}
                />
              </div>
            </span>
            {(q4Ans === "Nearly every day" ||
              q4Ans === "More than half days") && (
              <span className="ml-3">
                <p className="ms-3 text-success">
                  4.1 When did you last check in with your doctor?
                </p>
                {/* Radio Buttons */}
                <div className="form-check form-check-inline ms-3 text-success">
                  <div className="form-group py-1">
                    <input
                      type="date"
                      className="form-control"
                      value={q4_1Ans}
                      onChange={(e) => setQ4_1Ans(e.target.value)}
                    />
                  </div>
                </div>
              </span>
            )}
            {/* ======================================================== */}
            {/* Question 5 */}
            <span>
              <p>5. Poor appetite or overeating</p>
              {/* Radio Buttons */}
              <div className="form-check form-check-inline">
                <Form.Check
                  inline
                  label="Not at All"
                  onChange={(e) => setQ5Ans(e.target.value)}
                  value="Not at All"
                  name="group5"
                  type={"radio"}
                  id={`q-5-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  value="Several days"
                  onChange={(e) => setQ5Ans(e.target.value)}
                  name="group5"
                  type={"radio"}
                  id={`q-5-2`}
                />
                <Form.Check
                  inline
                  label="More than half days"
                  value="More than half days"
                  onChange={(e) => setQ5Ans(e.target.value)}
                  name="group5"
                  type={"radio"}
                  id={`q-5-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  onChange={(e) => setQ5Ans(e.target.value)}
                  value="Nearly every day"
                  name="group5"
                  type={"radio"}
                  id={`q-5-4`}
                />
              </div>
            </span>
            {/* ======================================================== */}
            {/* Question 6 */}
            <span>
              <p>
                6. Feeling bad about yourself - or that you are a failure or
                have let yourself or your family down
              </p>
              {/* Radio Buttons */}
              <div className="form-check form-check-inline">
                <Form.Check
                  inline
                  label="Not at All"
                  onChange={(e) => setQ6Ans(e.target.value)}
                  value="Not at All"
                  name="group6"
                  type={"radio"}
                  id={`q-6-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  value="Several days"
                  onChange={(e) => setQ6Ans(e.target.value)}
                  name="group6"
                  type={"radio"}
                  id={`q-6-2`}
                />
                <Form.Check
                  inline
                  label="More than half days"
                  value="More than half days"
                  onChange={(e) => setQ6Ans(e.target.value)}
                  name="group6"
                  type={"radio"}
                  id={`q-6-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  onChange={(e) => setQ6Ans(e.target.value)}
                  value="Nearly every day"
                  name="group6"
                  type={"radio"}
                  id={`q-6-4`}
                />
              </div>
            </span>
            {/* ======================================================== */}
            {/* Question 7 */}
            <span>
              <p>
                7. Trouble concentrating on things, such as reading the
                newspaper or watching television
              </p>
              {/* Radio Buttons */}
              <div className="form-check form-check-inline">
                <Form.Check
                  inline
                  label="Not at All"
                  onChange={(e) => setQ7Ans(e.target.value)}
                  value="Not at All"
                  name="group7"
                  type={"radio"}
                  id={`q-7-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  value="Several days"
                  onChange={(e) => setQ7Ans(e.target.value)}
                  name="group7"
                  type={"radio"}
                  id={`q-7-2`}
                />
                <Form.Check
                  inline
                  label="More than half days"
                  value="More than half days"
                  onChange={(e) => setQ7Ans(e.target.value)}
                  name="group7"
                  type={"radio"}
                  id={`q-7-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  onChange={(e) => setQ7Ans(e.target.value)}
                  value="Nearly every day"
                  name="group7"
                  type={"radio"}
                  id={`q-7-4`}
                />
              </div>
            </span>
            {/* ======================================================== */}
            {/* Question 8 */}
            <span>
              <p>
                8. Moving or speaking so slowly that other people could have
                noticed
              </p>
              {/* Radio Buttons */}
              <div className="form-check form-check-inline">
                <Form.Check
                  inline
                  label="Not at All"
                  onChange={(e) => setQ8Ans(e.target.value)}
                  value="Not at All"
                  name="group8"
                  type={"radio"}
                  id={`q-8-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  value="Several days"
                  onChange={(e) => setQ8Ans(e.target.value)}
                  name="group8"
                  type={"radio"}
                  id={`q-8-2`}
                />
                <Form.Check
                  inline
                  label="More than half days"
                  value="More than half days"
                  onChange={(e) => setQ8Ans(e.target.value)}
                  name="group8"
                  type={"radio"}
                  id={`q-8-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  onChange={(e) => setQ8Ans(e.target.value)}
                  value="Nearly every day"
                  name="group8"
                  type={"radio"}
                  id={`q-8-4`}
                />
              </div>
            </span>
            {/* ======================================================== */}
            {/* Question 9 */}
            <span>
              <p>
                9. Thoughts that you would be better off dead, or of hurting
                yourself
              </p>
              {/* Radio Buttons */}
              <div className="form-check form-check-inline">
                <Form.Check
                  inline
                  label="Not at All"
                  onChange={(e) => setQ9Ans(e.target.value)}
                  value="Not at All"
                  name="group9"
                  type={"radio"}
                  id={`q-9-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  value="Several days"
                  onChange={(e) => setQ9Ans(e.target.value)}
                  name="group9"
                  type={"radio"}
                  id={`q-9-2`}
                />
                <Form.Check
                  inline
                  label="More than half days"
                  value="More than half days"
                  onChange={(e) => setQ9Ans(e.target.value)}
                  name="group9"
                  type={"radio"}
                  id={`q-9-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  onChange={(e) => setQ9Ans(e.target.value)}
                  value="Nearly every day"
                  name="group9"
                  type={"radio"}
                  id={`q-9-4`}
                />
              </div>
            </span>
            {/* ======================================================== */}
            {/* Question 10 */}
            <span>
              <p>
                10. If you checked off any problems, how difficult have these
                problems made it for you at work, home, or with other people?
              </p>
              {/* Radio Buttons */}
              <div className="form-check form-check-inline">
                <Form.Check
                  inline
                  label="Not at All"
                  onChange={(e) => setQ10Ans(e.target.value)}
                  value="Not at All"
                  name="group10"
                  type={"radio"}
                  id={`q-10-1`}
                />
                <Form.Check
                  inline
                  label="Several days"
                  value="Several days"
                  onChange={(e) => setQ10Ans(e.target.value)}
                  name="group10"
                  type={"radio"}
                  id={`q-10-2`}
                />
                <Form.Check
                  inline
                  label="More than half days"
                  value="More than half days"
                  onChange={(e) => setQ10Ans(e.target.value)}
                  name="group10"
                  type={"radio"}
                  id={`q-10-3`}
                />
                <Form.Check
                  inline
                  label="Nearly every day"
                  onChange={(e) => setQ10Ans(e.target.value)}
                  value="Nearly every day"
                  name="group10"
                  type={"radio"}
                  id={`q-10-4`}
                />
              </div>
            </span>
          </div>
          {/* ======================================================== */}
          <div className="d-flex justify-content-center my-4">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className="px-5 w-25"
              onClick={handleShow}
            >
              Submit
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Did you check your answers?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose()
              setShowResults(true)
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default ScreeningScreen
