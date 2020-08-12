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

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle, faTimesCircle } from "@fortawesome/pro-light-svg-icons";

library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faCheckCircle,
  faTimesCircle
);

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr auto;
  min-height: 100vh;

  @media (min-width: 768px) {
    grid-template-rows: 97px 1fr auto;
    grid-template-columns: 70px 1fr 70px;
    > * {
      grid-column: 2 / -2;
    }
    > .full {
      grid-column: 1 / -1;
    }
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-top: 50px;
  }
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
