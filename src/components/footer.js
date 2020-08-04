import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";

const Wrapper = styled.footer`
  display: flex;
  background-color: var(--color-black);
  color: var(--color-white);
`;

const Header = () => <Wrapper />;

export default Header;
