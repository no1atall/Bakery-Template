import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Hero from "../components/Hero";

const Wrapper = styled.div`
  ${tw`w-full h-screen`}
`;

const Anchor = styled.div`
  ${tw`h-full text-4xl flex justify-center items-center`}
`

const Home = () => {
  const heroButton = {
    id: "ImLinked",
    tag: "#ImLinked",
    text: "Come See!",
  };
  
  return (
    <Wrapper>
      <Hero id={heroButton.tag} text={heroButton.text} />
      <Anchor id={heroButton.id}>Some Linked text </Anchor>
    </Wrapper>
  );
};

export default Home;
