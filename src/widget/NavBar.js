import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Images from "../assets/Images";
import { products } from "../components/Products/productsStore";
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="fixed-top"
      >
        <Link to="/">
          <Image
            variant="top"
            src={Images.blackWizardLogo}
            fluid
            className="w-150 br-5 logo-image"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/clothes" className="nav-list text-white">
              Clothes
            </Nav.Link>
            <NavDropdown
              title="Categories"
              id="collasible-nav-dropdown"
              className="nav-list text-white"
            >
              {products.map((product, index) => (
                <NavDropdown.Item
                  className="text-center"
                  key={index}
                >
                  <Link to={`/clothes/${product.id}`} className="link-to-text">
                    {product.title}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

// const ProductsDropdown = () => (
//   <>
//     {products.map((product) => (
//       <NavDropdown.Item href={`/products/${product.id}`}>
//         {product.title}
//       </NavDropdown.Item>
//     ))}
//   </>
// );
