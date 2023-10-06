import { styled } from "styled-components";
import Container from "../Container";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

const Nav = styled.nav`
  padding: 1.6rem 0;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  a:link,
  a:visited {
    color: #deffeb;
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
    transition: all 300ms;
  }

  a:hover,
  a:active {
    color: #24904e;
  }

  a.dark-green:link,
  a.dark-green:visited {
    color: #041e0e;
  }
  a.dark-green:hover,
  a.dark-green:active {
    color: #24904e;
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

const Logo = styled.img`
  display: block;
`;

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Nav>
      <Container>
        <NavBar>
          <Link to={"/"}>
            <Logo src="/logo.svg" />
          </Link>

          <NavList>
            <NavButton onClick={() => navigate("/playnow")}>Play Now</NavButton>
            <NavLink
              className={`${
                pathname === "/terms" || pathname === "/privacy"
                  ? "dark-green"
                  : ""
              }`}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={`${
                pathname === "/terms" || pathname === "/privacy"
                  ? "dark-green"
                  : ""
              }`}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={`${
                pathname === "/terms" || pathname === "/privacy"
                  ? "dark-green"
                  : ""
              }`}
              to="/#faqs"
            >
              FAQs
            </NavLink>
          </NavList>
        </NavBar>
      </Container>
    </Nav>
  );
};

export { Logo };
export default Navigation;
