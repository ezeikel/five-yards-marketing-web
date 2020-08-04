/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Header from "./header";
import Footer from "./footer";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 465px;
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
