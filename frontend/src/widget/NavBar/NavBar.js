import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Images from "../../assets/Images";
import { products } from "../../components/Products/productsStore";
import "./Navbar.css";

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <Navbar
        collapseOnSelect={true}
        expand="lg"
        bg="dark"
        variant="dark"
        className="fixed-top"
        expanded={isExpanded}
      >
        <Link to="/">
          <Image
            variant="top"
            src={Images.blackWizardLogo}
            fluid
            className="w-150 br-5 logo-image"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setIsExpanded(isExpanded ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to={`/clothes`} className="nav-list text-white text-deco-none ml-1" onClick={() => setIsExpanded(false)}>
              Clothes
            </Link>
            <Link to={`/products`} className="nav-list text-white text-deco-none ml-1" onClick={() => setIsExpanded(false)}>
              Products
            </Link>
          </Nav>
          <Nav>
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
                  <Link to={`/clothes/${product.id}`} className="link-to-text" onClick={() => setIsExpanded(false)}>
                    {product.title}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
