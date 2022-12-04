import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  ArrowRight,List, PersonFill,Cart,Controller,Search} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';
import SearchBar from "./SearchBar/SearchBar";


function NavbarComponent() {
  return (
    <Navbar  expand="lg" style={{backgroundColor:'#282c34'}} >
      <Container>
        <Navbar.Brand as={Link} to="/"><Controller width='4em' height='4em' className="text-light"/></Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav"><List width='2em' height='2em' className="text-light"/></Navbar.Toggle>
        <Navbar.Collapse className="nbar text-light " id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link className=" fs-5 navhov"   as={Link} to="/">Home</Nav.Link>
            <Nav.Link className=" fs-5 navhov"   as={Link}  to="/about">About</Nav.Link>
            <Nav.Link className=" fs-5 navhov"   as={Link}  to="/reviews">Reviews</Nav.Link>
            <Nav.Link className=" fs-5 navhov"   as={Link}  to="/support">Support</Nav.Link>
            <Nav.Link className=" fs-5 navhov"   as={Link}  to="/ranking">Ranking</Nav.Link>
            <Nav.Link className=" fs-5 navhov"   as={Link}  to="/login"><PersonFill/></Nav.Link>

            <Nav.Link className="text-light fs-5"  as={Link}  to="/shoppingcar"> <Cart/></Nav.Link >
            <SearchBar className="text-light fs-5"/>
     
    
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;