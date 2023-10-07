import styled from "styled-components";
import Image from "../Image";
import { Text } from "../Typo";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const StyledMobileNav = styled.div`
  background: #feeb62;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;

  padding: 2.4rem 3.2rem;
  transform: translateX(110%);

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  transition: transform 300ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &.open {
    transform: translateX(0);
  }
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MobileNavList = styled.ul`
  list-style: none;
  flex: 1;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6.2rem;
  margin-top: 4rem;
`;

const MobileNavItem = styled.li`
  a:link,
  a:visited {
    text-decoration: none;
    color: #2f825a;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const MobileNavFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  P {
    color: #4b5850;
    font-feature-settings: "cv09" on, "cv04" on, "ss01" on, "cv03" on, "ss03" on,
      "cv06" on;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.8rem; /* 175% */
  }
`;

const NavButton = styled.button`
  cursor: pointer;
  border: 0;
  padding: 1rem 2rem;
  text-decoration: none;
  display: inline-block;
  color: #3a3939;
  background-color: #fecc0b;
  border-radius: 10rem;

  font-family: Mona Sans, sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  outline: 0;
  transition: all 300ms;

  &:hover {
    background-color: #f3c408;
  }
`;

const MobileNav = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <StyledMobileNav className={isOpen ? "open" : ""}>
      <MobileNavHeader>
        <NavButton onClick={() => navigate("/playnow")}>Play Now</NavButton>

        <Image src="/icon_close.svg" onClick={onClose} />
      </MobileNavHeader>

      <MobileNavList onClick={onClose}>
        <MobileNavItem>
          <Link to={"/"}>Home</Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to={"/about"}>About</Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to={"https://triplewire.ng/blog"}>Blog</Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to={"/#faq"}>FAQs</Link>
        </MobileNavItem>
      </MobileNavList>

      <MobileNavFooter>
        <Image src="/logo.png" />
        <Text>© Copyright Company.com</Text>
      </MobileNavFooter>
    </StyledMobileNav>
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default MobileNav;
