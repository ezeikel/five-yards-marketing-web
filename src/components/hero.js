import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import FabricImage from "../images/fabric.png";
// import Img from "gatsby-image";
// import BackgroundImage from "gatsby-background-image";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 36px;
`;

const Heading = styled.h1`
  font-family: var(--secondary-font-family);
  font-size: 44px;
  color: var(--color-black);
  margin-bottom: 8px;
`;

const Subheading = styled.h2`
  color: var(--color-black);
  font-size: 22px;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 16px;
`;

const AppPreview = styled.div`
  display: flex;
  width: 100%;
  height: 256px;
  background-color: yellow;
`;

const Fabric = styled.div`
  background-image: url(${FabricImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
  input {
    padding: 10px 16px;
    font-size: 16px;
    border: 1px solid var(--color-grey);
  }
  button {
    color: var(--color-white);
    background-color: var(--color-accent);
    font-size: 14px;
    padding: 10px 16px;
    border-radius: 2px;
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHero(context: { eq: "Home" }) {
        heading
        subHeading
      }
      fabricImage: file(relativePath: { eq: "fabric.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      {/* <AppPreview>
        <BackgroundImage
          Tag="div"
          fluid={data.fabricImage.childImageSharp.fluid}
          imgStyle={{
            objectFit: "contain",
          }}
        />
      </AppPreview> */}
      <AppPreview>
        {/* <Img
          fluid={data.fabricImage.childImageSharp.fluid}
          imgStyle={{
            objectFit: "cover",
          }}
        /> */}
        <Fabric />
      </AppPreview>
      <CTA>
        <Heading>{data.contentfulHero.heading}</Heading>
        <Subheading>{data.contentfulHero.subHeading}</Subheading>
        <StyledForm>
          <input type="email" placeholder="Your email" />
          <button type="submit">Sign up</button>
        </StyledForm>
      </CTA>
    </Wrapper>
  );
};

export default Hero;
