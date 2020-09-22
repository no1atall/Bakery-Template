import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Wheat from "../images/wheat.jpg";
import Form from "../components/Form";

const Wrapper = styled.main`
  ${tw`relative flex justify-center items-center`}
`;

const Image = styled.img`
  ${tw`h-screen w-full object-cover`}
`;

const Contact = () => {
  return (
    <Wrapper>
      <Image src={Wheat} alt="Wheat Field"></Image>
      <Form />
    </Wrapper>
  );
};

export default Contact;
