import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "tailwind.macro";

const LinksWrapper = styled.div`
  ${tw`hidden md:flex text-3xl mt-8 pr-2 lg:pr-10 xl:pr-16`}
`;

const LinkList = styled.ul`
  ${tw`flex list-none`}
`;
const Links = styled.li`
  ${tw`mr-4 `}
`;
const NavLink = styled(Link)`
  ${tw`text-white no-underline hover:text-secondary`}
`;

const Nav = () => {
  return (
    <LinksWrapper>
      <LinkList>
        <Links>
          <NavLink to="/OurStory">Our Story</NavLink>
        </Links>
        <Links>
          <NavLink to="/Menu">Let's Eat</NavLink>
        </Links>
        <Links>
          <NavLink to="/Contact">Contact</NavLink>
        </Links>
      </LinkList>
    </LinksWrapper>
  );
};

export default Nav;
