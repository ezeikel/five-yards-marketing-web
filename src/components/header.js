import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Button from "./button";
import LogoWithMainTextHorizontal from "./svgs/LogoWithMainTextHorizontal";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-large);
  svg {
    width: 124px;
  }
  @media (min-width: 768px) {
    height: 100%;
    padding: 35px 0 0;
  }
  @media (min-width: 1280px) {
    svg {
      width: 190px;
    }
  }
`;

const LogoWrapper = styled.div`
  a {
    display: flex;
  }
  svg {
    width: 152px;
  }
`;

const Header = () => (
  <Wrapper>
    <LogoWrapper>
      <Link to="/">
        <LogoWithMainTextHorizontal fill="var(--color-black)" />
      </Link>
    </LogoWrapper>
    <AnchorLink to="/#signup" title="Join the tribe">
      <Button primary text="Sign up" />
    </AnchorLink>
  </Wrapper>
);

export default Header;
