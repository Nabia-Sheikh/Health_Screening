import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Health Screening</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Link to={"/login"}>
            <Button variant="outline-success" className="mx-2">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="outline-danger">Signup</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
