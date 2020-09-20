import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "tailwind.macro";

import ReactLogo from "../../images/react.svg";

const LogoWrapper = styled(Link)`
  ${tw`text-2xl sm:text-3xl mt-12 md:mt-8 pl-2 sm:pl-10 md:pl-16 no-underline text-white flex hover:text-yellow-500`}
`;

const TextWrapper = styled.h3`
  ${tw`text-2xl sm:text-3xl`}
`;

// Adjust the height and width of the logo Image here. Uncomment to use.
// const ImageWrapper = styled.img`
//   ${tw`h-8 w-8 mr-2`}
// `;

const LogoIconWrapper = styled.div`
  ${tw`mr-2`}
`;

const logoData = {
  text: "Grandma's Oven",
  icon: "fas fa-bread-slice",
  src: ReactLogo,
};

const Logo = () => {
  return (
    <LogoWrapper to="/">
      {/* Unncomment this part for an Image logo */}
      {/* <ImageWrapper src={logoData.src}></ImageWrapper> */}

      {/* Uncomment this part for an Icon logo. This is set up to work with FontAwsome Icons */}
      <LogoIconWrapper>
        <i className={logoData.icon}></i>
      </LogoIconWrapper>

      {/* This part is for a text Logo */}
      <TextWrapper>{logoData.text}</TextWrapper>
    </LogoWrapper>
  );
};

export default Logo;
