import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const MyButton = styled.div`
  ${tw`mt-12  py-3 border rounded-full`}
  
  ​
  
`;
const MyLink = styled.a`
  ${tw`px-8 py-4 mt-12 text-lg text-white text-xl  md:text-3xl no-underline border rounded-full hover:bg-yellow-600`}
  background-color: #954535;
    
  ​
`;



const Button = (data) => {
  console.log(data);
  return (
    <MyButton >
      <MyLink href={data.data.id}>{data.data.text}</MyLink>
    
    </MyButton>
  );
};

export default Button;
