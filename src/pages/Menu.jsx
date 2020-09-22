import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import bread2 from "../images/bread2.jpg";

const Wrapper = styled.main`
  ${tw`relative flex justify-center items-center`}
`;

const Image = styled.img`
  ${tw`h-screen w-full object-cover`}
`;

const Menu = () => {
  return (
    <Wrapper>
      <Image src={bread2} alt="Table of Bread" />
    </Wrapper>
  );
};

export default Menu;
