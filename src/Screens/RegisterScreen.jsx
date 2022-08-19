import axios from "axios"
import React, { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constants"
import { AuthContext } from "../utils/context"

const RegisterScreen = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    qualification: "",
    experience: "",
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

    if (!user.name) {
      return alert("Name is required")
    }
    if (user.name.length < 3) {
      return alert("Name must be at least 3 characters")
    }
    if (!user.email) {
      return alert("Email is required")
    }
    if (!user.password) {
      return alert("Password is required")
    }
    if (!user.confirmPassword) {
      return alert("Confirm Password is required")
    }
    if (user.password !== user.confirmPassword) {
      return alert("Passwords do not match")
    }
    if (user.password.length < 6) {
      return alert("Password must be at least 6 characters")
    }
    if (!user.role) {
      return alert("Role is required")
    }

    if (user.role === "doctor") {
      if (!user.qualification) {
        return alert("Qualification is required")
      }
      if (!user.experience) {
        return alert("Experience is required")
      }
    }
    const body = {
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      qualification: user.qualification,
      experience: user.experience,
    }

    try {
      const { data } = await axios.post(BASE_URL + "/user/register", body)
      if (data.msg === "Already Registered") {
        alert("Already Registered. Please login")
        return navigate("/login")
      }
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      signIn(data.user)
      alert(data.msg)
      navigate("/")
    } catch (error) {
      console.log(error)
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
                <label htmlFor="nameInput " className="py-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="form-control"
                  id="nameInput"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group py-2">
                <label htmlFor="exampleInputEmail1 " className="py-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group py-1">
                <label htmlFor="exampleInputPassword1" className="py-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="form-check form-check-inline py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  id="inlineRadio1"
                  value="patient"
                  onChange={handleChange}
                />
                <label className="form-check-label" for="inlineRadio1">
                  Normal User
                </label>
              </div>
              <div className="form-check form-check-inline py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  id="inlineRadio2"
                  value="doctor"
                  onChange={handleChange}
                />
                <label className="form-check-label" for="inlineRadio2">
                  Doctor
                </label>
              </div>
              {user.role === "doctor" && (
                <>
                  <div className="form-group py-2">
                    <label htmlFor="nameInput " className="py-2">
                      Qualification
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      value={user.qualification}
                      onChange={handleChange}
                      className="form-control"
                      id="nameInput"
                      placeholder=" Qualification"
                    />
                  </div>

                  <div className="form-group py-2">
                    <label htmlFor="nameInput " className="py-2">
                      Experience
                    </label>
                    <input
                      type="number"
                      name="experience"
                      value={user.experience}
                      onChange={handleChange}
                      className="form-control"
                      id="nameInput"
                      placeholder="Experience in years"
                    />
                  </div>
                </>
              )}
              <div className="d-grid gap-2 py-2">
                <button className="btn btn-primary" type="submit">
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
