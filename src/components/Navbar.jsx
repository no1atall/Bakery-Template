import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Burger from "./Nav/Burger";
import Nav from "./Nav/Nav";
import Logo from "./Nav/Logo";

const NavWrapper = styled.nav`
  ${tw`w-full h-20 bg-transparent text-primary flex items-start justify-between fixed z-10`}
`;

const MenuWrapper = styled.div``;

const Navbar = () => {
  const [navOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <NavWrapper>
      <Logo />
      <MenuWrapper>
        <Nav navOpen={navOpen} toggleOpen={toggleOpen} />
        <Burger navOpen={navOpen} toggleOpen={toggleOpen} />
      </MenuWrapper>
    </NavWrapper>
  );
};

export default Navbar;