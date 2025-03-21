import React, { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

import {
  CButton,
  CCollapse,
  CContainer,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import { ShoppingCart, Search, User } from "lucide-react"; // Import icons

const Header = () => {
  const navigate = useNavigate();  
  const [visible, setVisible] = useState(false);

   const handleItemClick = () => {
     setVisible(false);
   };

  const handleSearchClick = () => {
    navigate('/search');
    setVisible(false);
  };
  

  return (
    <CNavbar expand="lg" className="bg-body-tertiary custom-navbar">
      <CContainer fluid>
        <CNavbarBrand>
          <Link to="/" className="text-decoration-none text-dark" onClick={handleItemClick}>Navbar</Link>
        </CNavbarBrand>
        {/* Toggler */}
        <CNavbarToggler onClick={() => setVisible(!visible)} />

        {/* Collapsible Navbar */}
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
          <CNavItem>
              <Link to="/" className="nav-link" onClick={handleItemClick}>Home</Link>
            </CNavItem>
            <CNavItem>
              <Link to="/products" className="nav-link" onClick={handleItemClick}>Products</Link> 
            </CNavItem>
            <CNavItem>
              <Link to="/contact" className="nav-link" onClick={handleItemClick}>Contact</Link> 
            </CNavItem>
            <CNavItem>
              <Link to="/about" className="nav-link" onClick={handleItemClick}>About</Link>
            </CNavItem>
        
          </CNavbarNav>

          {/* Right Side - Search, Profile, Cart Icons */}
          <CNavbarNav className="ms-auto d-flex align-items-center gap-3">
            {/* Search Bar */}

            <CButton color="success" variant="outline" onClick={handleSearchClick}>
            <Search size={20} />
          </CButton>

               {/* Cart Icon */}
               <CNavItem>
              <CNavLink href="/cart" onClick={handleItemClick}>
                <ShoppingCart size={24} />
              </CNavLink>
            </CNavItem>


            {/* Profile Icon */}
            <CNavItem>
              <CNavLink href="/login" onClick={handleItemClick}>
                <User size={24} />
              </CNavLink>
            </CNavItem>

         
          </CNavbarNav>

        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Header;
