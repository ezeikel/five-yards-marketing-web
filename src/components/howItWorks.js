import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Cards from "./cards";
import { Heading } from "./styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  padding: var(--spacing-large);
  @media (min-width: 768px) {
    border-radius: var(--border-radius);
  }
`;

const HowItWorks = () => {
  const data = useStaticQuery(graphql`
    query {
      usingIpadImage: file(relativePath: { eq: "using-ipad.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      tailorWorkingImage: file(relativePath: { eq: "tailor-working.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      receivingPackageImage: file(
        relativePath: { eq: "receiving-package.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const STEPS = [
    {
      image: data.usingIpadImage.childImageSharp.gatsbyImageData,
      heading: "Choose a fabric",
      body:
        "Get inspired by some popular fabrics and looks. Choose the type, colour and how many yards you need",
      note: "01",
    },
    {
      image: data.tailorWorkingImage.childImageSharp.gatsbyImageData,
      heading: "Place an order",
      body:
        "Find a tailor based your criteria and get accurate completion estimates and progress updates throughout the process",
      note: "02",
    },
    {
      image: data.receivingPackageImage.childImageSharp.gatsbyImageData,
      heading: "Receive your outfit",
      body:
        "Either get your outfit delivered or physically go and pick it up from your tailor. It’s your choice",
      note: "03",
    },
  ];

  return (
    <Wrapper>
      <Heading level={2}>How it works</Heading>
      <Cards items={STEPS} />
    </Wrapper>
  );
};

export default HowItWorks;
