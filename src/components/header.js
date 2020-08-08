import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Logo from "../images/logo.svg";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  svg {
    width: 124px;
  }
`;

const Button = styled.button`
  color: var(--color-white);
  background-color: var(--color-accent);
  font-size: 14px;
  padding: 10px 16px;
  border-radius: 2px;
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <AnchorLink to="/#signup" title="Join the tribe">
      <Button>Sign up</Button>
    </AnchorLink>
  </Wrapper>
);

export default Header;
