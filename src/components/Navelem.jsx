import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navelem = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="/modal">Gestorsoft</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/turnos">Turnos</Nav.Link>
            <Nav.Link href="/historial">Historial de servicios</Nav.Link>
            <Nav.Link href="#link">Servicios disponibles</Nav.Link>
            <NavDropdown title="Acciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Realizar Turno</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Modificar Turno</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Consultar Turno</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navelem