import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "tailwind.macro";
import Burger from "./Nav/Burger";
import Nav from "./Nav/Nav";
import Logo from "./Nav/Logo";

const NavWrapper = styled.nav`
  ${tw`w-full h-20 bg-transparent text-primary flex flex-col cursor-pointer  fixed z-10`}
`;

const MenuWrapper = styled.div`
  ${tw`flex items-start justify-between`}
`;

const LinksWrapper = styled.ul`
  ${tw` w-screen right-0 absolute mt-32 py-4 list-none flex flex-col  items-center md:hidden border rounded-bl-full rounded-tr-full`};
  transform: ${({ navOpen }) =>
    navOpen ? "translateX(0%)" : "translateX(100%)"};
  transition: transform 0.5s ease-in-out;
  background: linear-gradient(
    90deg,
    rgba(230, 168, 23, 1) 0%,
    rgba(149, 69, 53, 1) 45%,
    rgba(123, 63, 0, 1) 100%
  );
  opacity: 95%;
`;

const Links = styled.li`
  ${tw`my-1`}
`;

const StyledLink = styled(Link)`
  ${tw`text-4xl text-white no-underline hover:text-yellow-500`}
`;

const Navbar = () => {
  const [navOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <NavWrapper>
      <MenuWrapper>
        <Logo />
        <Nav navOpen={navOpen} toggleOpen={toggleOpen} />
        <Burger navOpen={navOpen} toggleOpen={toggleOpen} />
      </MenuWrapper>
      <LinksWrapper navOpen={navOpen}>
        <Links>
          <StyledLink onClick={toggleOpen} to="/">
            Home
          </StyledLink>
        </Links>
        <Links>
          <StyledLink onClick={toggleOpen} to="/OurStory">
            OurStory
          </StyledLink>
        </Links>
        <Links>
          <StyledLink onClick={toggleOpen} to="/Menu">
            Let's Eat
          </StyledLink>
        </Links>
        <Links>
          <StyledLink onClick={toggleOpen} to="/Contact">
            Contact
          </StyledLink>
        </Links>
      </LinksWrapper>
    </NavWrapper>
  );
};

export default Navbar;
