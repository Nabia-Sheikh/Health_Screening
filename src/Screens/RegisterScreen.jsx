import React from "react"
import { Card, Col, Row } from "react-bootstrap"

const RegisterScreen = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <Row className="d-flex justify-content-center align-items-center ">
        <Col md={12}>
          <Card className="border p-4">
            <h3 className="text-primary text-center">
              Welcome to Health Screening
            </h3>
            <p className="text-center">Please login to continue</p>
            <form>
              <div className="form-group py-2">
                <label htmlFor="exampleInputEmail1 " className="py-2">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group py-1">
                <label htmlFor="exampleInputPassword1" className="py-2">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-check form-check-inline py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" for="inlineRadio1">
                  Doctor
                </label>
              </div>
              <div className="form-check form-check-inline py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineRadio2">
                  Normal User
                </label>
              </div>

              <div className="d-grid gap-2 py-2">
                <button className="btn btn-primary" type="button">
                  Register
                </button>
              </div>
            </form>
            <p className="text-center">
              Already have an account? <a href="/login">Login</a>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default RegisterScreen
