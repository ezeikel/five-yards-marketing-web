import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-family: var(--secondary-font-family);
  font-size: 35px;
  line-height: 44px;
  color: var(--color-black);
  margin: 0 0 8px;
`;

const Subheading = styled.h2`
  color: var(--color-black);
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  margin: 0 0 16px;
`;

const AppPreview = styled.div`
  display: flex;
  width: 100%;
  height: 256px;
  margin-bottom: 60px;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledUiImage = styled(Img)`
  width: 372px;
  height: 252px;
  transform: scale(0.9);
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px;
  padding: 0 36px;
`;

const StyledForm = styled.form`
  display: flex;
  input {
    flex: 1 0 auto;
    padding: 10px 16px;
    font-size: 16px;
    border: 1px solid var(--color-grey);
    border-right: none;
    border-radius: 2px 0px 0px 2px;
  }
  button {
    color: var(--color-white);
    background-color: var(--color-accent);
    font-size: 14px;
    padding: 10px 16px;
    border-radius: 0px 2px 2px 0px;
  }
`;

const More = styled.span`
  font-size: 12px;
  text-align: center;
  margin-bottom: 31px;
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
      uiImage: file(relativePath: { eq: "app-ui.png" }) {
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
      <AppPreview>
        <StyledBackgroundImage
          Tag="div"
          fluid={data.fabricImage.childImageSharp.fluid}
          imgStyle={{
            objectFit: "cover",
          }}
        >
          <StyledUiImage
            fluid={data.uiImage.childImageSharp.fluid}
            imgStyle={{
              objectFit: "cover",
            }}
          />
        </StyledBackgroundImage>
      </AppPreview>
      <CTA>
        <Heading>{data.contentfulHero.heading}</Heading>
        <Subheading>{data.contentfulHero.subHeading}</Subheading>
        <StyledForm>
          <input type="email" placeholder="Your email" />
          <button type="submit">Sign up</button>
        </StyledForm>
      </CTA>
      <More>SEE MORE</More>
    </Wrapper>
  );
};

export default Hero;
