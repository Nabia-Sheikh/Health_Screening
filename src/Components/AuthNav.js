import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

function AuthNav() {
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
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Screening</Nav.Link>
            <Nav.Link href="#action2">History</Nav.Link>
            <Nav.Link href="#action2">Available Doctors</Nav.Link>
          </Nav>

          <Button variant="outline-danger ">Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AuthNav
