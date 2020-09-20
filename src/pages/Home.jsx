import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Hero from "../components/Hero";

const Wrapper = styled.div`
  ${tw`w-full h-screen`}
`;

const Home = () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};

export default Home;
