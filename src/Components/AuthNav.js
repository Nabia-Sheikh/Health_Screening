import { useContext } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import { AuthContext } from "../utils/context"

function AuthNav() {
  const { signOut: logout, user } = useContext(AuthContext)
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Health Screening
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {user?.role === "patient" && (
              <>
                <Nav.Link as={Link} to="/screening">
                  Screening
                </Nav.Link>
                <Nav.Link as={Link} to="/history">
                  History
                </Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/chats">
              Chats
            </Nav.Link>
            <Nav.Link as={Link} to="/doctors">
              Available Doctors
            </Nav.Link>
          </Nav>

          <Button variant="outline-danger " onClick={logout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AuthNav
