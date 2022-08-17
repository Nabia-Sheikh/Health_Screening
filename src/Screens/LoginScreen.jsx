import React, { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { AuthContext } from "../utils/context"

const LoginScreen = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })
  const signIn = useContext(AuthContext).signIn

  const navigate = useNavigate()
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(BASE_URL + "/user/login", {
        email: user.email,
        password: user.password,
      })
      console.log(res)
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data.user))
        signIn(res.data.user)
        navigate("/")
      }
    } catch (error) {
      console.log(error)
      if (error.response.status === 400) {
        alert(error.response.data.msg)
      }
    }
  }

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
            <form onSubmit={handleSubmit}>
              <div className="form-group py-2">
                <label htmlFor="exampleInputEmail1 " className="py-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={user.email}
                  onChange={handleChange}
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
                  required
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <div className="d-grid gap-2 py-2">
                <button className="btn btn-primary" type="submit">
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
