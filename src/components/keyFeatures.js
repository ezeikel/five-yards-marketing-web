import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f8fc;
  padding: 40px 36px 40px;
`;

const Heading = styled.h2`
  font-size: 35px;
  font-family: var(--secondary-font-family);
  font-weight: 700;
  margin: 0 0 32px;
`;

const Header = () => (
  <Wrapper>
    <Heading>Key features</Heading>
  </Wrapper>
);

export default Header;
