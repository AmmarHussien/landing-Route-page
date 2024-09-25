import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as LinkToRoute } from "react-router-dom";

// Styled components for the NavBar
const NavBarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ bgColor }) => bgColor || "#20232a"};
  color: #ffffff;
  box-shadow: ${({ show }) => (show ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none")};
  transition: all 0.3s ease;
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-100%)")};
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ show }) => (show ? "90%" : "100%")};
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Logo = styled.img`
  height: 40px; /* Adjust size as needed */

  @media (max-width: 768px) {
    height: 30px; /* Adjust logo size for mobile */
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 60px; /* Adjust based on logo height and padding */
    right: 0;
    background: #20232a;
    width: 100%;
    padding: 1rem;
    transform: ${({ showMobileMenu }) =>
      showMobileMenu ? "translateX(0)" : "translateX(110%)"};
    transition: transform 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(LinkToRoute)`
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #f5a201;
    transform: scale(1.03);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #f5a201;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:focus {
    outline: 2px solid #f5a201;
    outline-offset: 2px;
  }
`;

const MenuToggle = styled.button`
  margin-right: 20px;
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  @media (max-width: 708px) {
    display: block;
  }
`;

// NavBar Component
const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavBarContainer show={showNavBar} bgColor="#20232a">
      <NavWrapper show={showNavBar}>
        <Logo src="/Logo.svg" alt="Logo" />
        <MenuToggle onClick={toggleMobileMenu}>☰</MenuToggle>
        <NavLinks showMobileMenu={showMobileMenu}>
          <NavLink onClick={() => setShowMobileMenu(false)} to="/landing-page">
            Home
          </NavLink>
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/landing-page/privacy-policy"
          >
            {" "}
            Privacy Policy
          </NavLink>
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/landing-page/terms-of-service"
          >
            Terms of Service
          </NavLink>
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/landing-page/contact-us"
          >
            Contact Us
          </NavLink>
        </NavLinks>
      </NavWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
