import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'


const LoginScreen = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <Row className="d-flex justify-content-center align-items-center ">
        <Col md={12}>
            <Card className="border p-4" >
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

          <div class="d-grid gap-2 py-2">
            <button class="btn btn-primary" type="button">
              Login
            </button>
       
          </div>

      
        </form>
        <p className="text-center">
          Don't have an account? <a href="/register">Register</a>
        </p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LoginScreen