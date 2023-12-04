import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from '../../styles/navbarcomp.module.css'

//images
import Logo from '../../images/logo.png'

function BasicExample() {
  return (
    <div className='navbar-expand-md'>
      <Navbar expand="lg" className={`"bg-body-tertiary" + ${style.background}`} fixed='top'>
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="" width="100px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;