import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import breadBoard from "../images/bread-board.jpg";

const Wrapper = styled.main`
  ${tw`relative flex justify-center items-center`}
`;

const Image = styled.img`
  ${tw`h-screen w-full object-cover`}
`;

const OurStory = () => {
  return (
    <Wrapper>
      <Image src={breadBoard} alt="Table of bread" />
    </Wrapper>
  );
};

export default OurStory;
