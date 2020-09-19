import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const BurgerWrapper = styled.div`
  ${tw`block md:hidden`}
`;

const Burger = () => {
  return <BurgerWrapper> Burger Here</BurgerWrapper>;
};

export default Burger;
