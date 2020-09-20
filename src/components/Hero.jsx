import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Bread from "../images/bread.jpg";

const HeroWrapper = styled.section`
  ${tw`text-black w-full h-screen relative flex justify-center items-center`}
`;

const Image = styled.img`
  ${tw`w-full h-screen bg-cover absolute`}
`;

const ContentWrapper = styled.div`
  ${tw`text-4xl absolute text-white text-center`}
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Image src={Bread} />

      <ContentWrapper>
        <p>Some text which should be below my nav there is text here</p>
        <p>Some more Text</p>
        <button>Come and See Now!</button>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default Hero;
