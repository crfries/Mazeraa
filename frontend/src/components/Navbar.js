import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import logo from "../images/blacklogo.png";

const NavBar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    dispatch(logout());
  };

  return (
    <header>
      <Container
        style={{
          display: "flex",
        }}
      >
        <Navbar
          bg='light'
          variant='light'
          expand='lg'
          collapseOnSelect
          className='navbar'
        >
          <LinkContainer to='/' className='navLogoContainer'>
            <Image className='navLogo' src={logo}></Image>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='navLinks'>
              <LinkContainer to='/' exact>
                <Nav.Link>. shop</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/about'>
                <Nav.Link>. about</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>. contact</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart' />
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default NavBar;
