import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "gatsby-image";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 40px;
  background-color: var(--color-black);
  color: var(--color-white);
`;

const Logo = styled.div`
  display: flex;
  width: 86px;
  height: 73px;
  margin-bottom: 19px;
  /* TODO: why do I have to do this? */
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  font-size: 14px;
  margin-bottom: 55px;
  li + li {
    margin-top: 40px;
  }
  a {
    color: var(--color-white);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;
  > span {
    font-family: var(--secondary-font-family);
    font-size: 20px;
    line-height: 50px;
    margin-bottom: 20px;
    text-align: center;
  }
  > ul {
    display: flex;
    flex-direction: row;
    li + li {
      margin-left: 16px;
    }
  }
`;

const Copyright = styled.div`
  display: flex;
  font-size: 14px;
  color: #bebebe;
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 199) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Logo>
        <Img
          fluid={data.logo.childImageSharp.fluid}
          imgStyle={{
            objectFit: "cover",
          }}
        />
      </Logo>
      <Links>
        <ul>
          <li>
            <OutboundLink href="">Privacy policy</OutboundLink>
          </li>
          <li>
            <OutboundLink href="">Join the team</OutboundLink>
          </li>
          <li>
            <OutboundLink href="">Get support</OutboundLink>
          </li>
        </ul>
      </Links>
      <SocialLinks>
        <span>Follow us</span>
        <ul>
          <li>
            <OutboundLink href="https://www.facebook.com/fiveyardsapp">
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                color="var(--color-white)"
                size="3x"
              />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://twitter.com/fiveyardsapp">
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                color="var(--color-white)"
                size="3x"
              />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://www.instagram.com/fiveyardsapp">
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                color="var(--color-white)"
                size="3x"
              />
            </OutboundLink>
          </li>
        </ul>
      </SocialLinks>
      <Copyright>
        &copy; Copyright 2020 Five Yards, all rights reserved.
      </Copyright>
    </Wrapper>
  );
};

export default Footer;
