import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Bread from "../images/bread.jpg";

const HeroWrapper = styled.main`
  ${tw`text-2xl text-white relative flex justify-center`}
`;

const ImageWrapper = styled.div`
  ${tw``}
`;

const Image = styled.img`
  ${tw`bg-cover max-w-screen h-screen lg:w-screen `}
`;

const ContentWrapper = styled.div`
  ${tw`absolute z-10 text-white flex flex-col items-center`}
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <ImageWrapper>
        <Image src={Bread} />
      </ImageWrapper>
      <ContentWrapper></ContentWrapper>
    </HeroWrapper>
  );
};

export default Hero;
