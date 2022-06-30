import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="px-5 header-nav">
        <Navbar.Brand href="#home"><span className="nav-title">ToolTasks</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="btn"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="btn-2">
          <Nav className="ms-auto nav-menu">
            <Nav.Link className="text-white mx-3" href="#features">
              Completed Tasks
            </Nav.Link>
            <Nav.Link className="text-white mx-3" href="#pricing">
              To-Do
            </Nav.Link>
            <Nav.Link className="text-white mx-3 me-5" href="#pricing">
              Calendar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
