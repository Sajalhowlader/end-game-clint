import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-5">
     
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Completed Tasks</Nav.Link>
              <Nav.Link href="#pricing"> To-Do</Nav.Link>
              <Nav.Link href="#pricing"> Calendar</Nav.Link>
            </Nav>
          </Navbar.Collapse>

      </Navbar>
    </div>
  );
};

export default Header;
