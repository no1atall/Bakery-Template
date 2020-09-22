import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Bread from "../images/bread.jpg";
import Button from "./Button";

const HeroWrapper = styled.section`
  ${tw`text-black w-full h-screen relative flex justify-center items-center`}
`;

const Image = styled.img`
  ${tw`w-full h-screen object-cover absolute`}
`;

const ContentWrapper = styled.header`
  ${tw`text-4xl absolute text-white text-center`}
`;

const Contenth1 = styled.h1`
  ${tw` text-2xl  md:text-6xl`}
`;

const Contenth2 = styled.h2`
  ${tw`mt-8 md:mt-4 text-2xl md:text-5xl`}
`;

const ContnetText = styled.p`
  ${tw` mt-8 sm:mt-12`}
`;

const Hero = (props) => {
  console.log(props);

  return (
    <HeroWrapper>
      <Image src={Bread} />

      <ContentWrapper>
        <Contenth1>Gramma's Oven</Contenth1>
        <Contenth2>
          <ContnetText>Fresh. European.</ContnetText>
          <ContnetText>Delicious!</ContnetText>
        </Contenth2>
        <Button data={props} />
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default Hero;
