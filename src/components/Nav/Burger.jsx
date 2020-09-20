import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

const BurgerWrapper = styled.div`
  ${tw`block md:hidden text-white text-5xl  mt-8 mr-8 cursor-pointer `}
`;

const Icon = styled.div``;

const Burger = ({ navOpen, toggleOpen }) => {
  return (
    <BurgerWrapper>
      <Icon onClick={toggleOpen}>
        <i className={navOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </Icon>
    </BurgerWrapper>
  );
};

export default Burger;
