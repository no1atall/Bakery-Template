import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "tailwind.macro";
import Burger from "./Nav/Burger";
import Nav from "./Nav/Nav";
import Logo from "./Nav/Logo";

const NavWrapper = styled.nav`
  ${tw`w-full h-20 bg-transparent text-primary flex flex-col  fixed z-10`}
`;

const MenuWrapper = styled.div`
  ${tw`flex items-start justify-between`}
`;

const LinksWrapper = styled.ul`
  ${tw`bg-yellow-900 w-screen right-0 absolute mt-32 py-4 list-none flex flex-col  items-center`}
`;

const Links = styled.li``;

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
      <LinksWrapper>
        <Links>
          <StyledLink to="/">Home</StyledLink>
        </Links>
        <Links>
          <StyledLink to="/OurStory">OurStory</StyledLink>
        </Links>
        <Links>
          <StyledLink to="/Menu">Let's Eat</StyledLink>
        </Links>
        <Links>
          <StyledLink to="/Contact">Contact</StyledLink>
        </Links>
      </LinksWrapper>
    </NavWrapper>
  );
};

export default Navbar;
