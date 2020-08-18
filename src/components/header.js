import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Logo from "../images/logo.svg";
import { Button } from "./styles";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  svg {
    width: 124px;
  }
  @media (min-width: 768px) {
    height: 100%;
    padding: 16px 0;
    svg {
      width: 190px;
    }
  }
`;

const StyledButton = styled(Button)`
  @media (min-width: 768px) {
    padding: 16px 20px;
  }
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <AnchorLink to="/#signup" title="Join the tribe">
      <StyledButton>Sign up</StyledButton>
    </AnchorLink>
  </Wrapper>
);

export default Header;
