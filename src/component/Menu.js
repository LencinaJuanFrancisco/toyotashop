import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carrito} from './Carrito.js'
export function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Toyota SHOP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Modelos</Nav.Link>
          <Nav.Link href="#pricing">Repuestos</Nav.Link>
        </Nav>
        <Navbar.Brand href=""><Carrito/></Navbar.Brand>
      </Container>
    </Navbar>
  );
}
