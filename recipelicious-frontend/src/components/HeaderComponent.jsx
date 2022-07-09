import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function HeaderComponent() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" style={{fontSize:'35px',fontWeight:'bolder',fontFamily:'fantasy',marginTop:'10px'}}>Recipelicious</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{fontSize:'20px',fontWeight:'bold',fontFamily:'sans-serif'}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/add-recipe" style={{fontSize:'20px',fontWeight:'bold',fontFamily:'sans-serif'}}>Add Recipe</Nav.Link>
            <Nav.Link as={Link} to="/recipes" style={{fontSize:'20px',fontWeight:'bold',fontFamily:'sans-serif'}}>View Recipes</Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
   <br></br>
   <br></br>
   
    </div>
  );
}

export default HeaderComponent;