import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Cards from "./cards";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f8fc;
  padding: 40px 36px 40px;
  @media (min-width: 768px) {
    padding: 60px 66px 79px;
    border-radius: 22px;
  }
`;

const Heading = styled.h2`
  font-size: 35px;
  font-family: var(--secondary-font-family);
  font-weight: 700;
  margin: 0 0 32px;
  @media (min-width: 768px) {
    font-size: 70px;
  }
`;

const HowItWorks = () => {
  const data = useStaticQuery(graphql`
    query {
      usingIpadImage: file(relativePath: { eq: "using-ipad.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 477) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tailorWorkingImage: file(relativePath: { eq: "tailor-working.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 477) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      receivingPackageImage: file(
        relativePath: { eq: "receiving-package.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 477) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const STEPS = [
    {
      image: data.usingIpadImage.childImageSharp.fluid,
      heading: "Choose a fabric",
      body:
        "Get inspired by some popular fabrics and looks. Choose the type, colour and how many yards you need",
      note: "01",
    },
    {
      image: data.tailorWorkingImage.childImageSharp.fluid,
      heading: "Place an order",
      body:
        "Find a tailor based your criteria and get accurate completion estimates and progress updates throughout the process",
      note: "02",
    },
    {
      image: data.receivingPackageImage.childImageSharp.fluid,
      heading: "Receive your outfit",
      body:
        "Either get your outfit delivered or physically go and pick it up from your tailor. It’s your choice",
      note: "03",
    },
  ];

  return (
    <Wrapper>
      <Heading>How it works</Heading>
      <Cards items={STEPS} />
    </Wrapper>
  );
};

export default HowItWorks;
