import React, { useContext } from 'react'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import CartContext from '../store/cart-context';

const NavBar = (props) => {
const handleClick=()=>{
props.show()
  
} 
let cartCtx=useContext(CartContext)


  return  (
    <>
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container fluid>
        <Navbar.Collapse>
          <Nav className="me-auto justify-content-center w-100">
            <Nav.Link href="/" style={{ color: "white" }}>
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link href="/store" style={{ color: "white" }}>
              <h4>Store</h4>
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: "white" }}>
              <h4>About</h4>
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: "white" }}>
              <h4>Contact Us</h4>
            </Nav.Link>
          </Nav>
          <Nav className="me-auto justify-content-end">
            <Button onClick={handleClick} variant="dark" style={{ color: "white",border:"4px solid rgb(86,204,242) ",width:"80px",borderRadius:"30px" }}>
              <h6>Cart</h6>
            </Button>
            <h6>
              <Badge bg="secondary">{cartCtx.items.length}</Badge>
            </h6>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div
    style={{
      backgroundColor: "rgb(119, 119, 119)",
      color: "white",
      textAlign: "center",
      padding: "50px 0",
    }}
  >
    <h1 style={{ fontSize: "5rem", fontWeight: "bolder", margin: "0 50px 0px 50px",paddingTop:"0px 50px 0px 50px" }}>
      The Generics
    </h1>
  </div>
  </>
  );
}

export default NavBar