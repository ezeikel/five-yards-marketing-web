import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Carousel from "./carousel";
import Img from "gatsby-image";

const Wrapper = styled.div`
  display: block;
  flex-direction: column;
  padding: 40px 36px 40px;
`;

const Heading = styled.h2`
  font-size: 35px;
  font-family: var(--secondary-font-family);
  font-weight: 700;
  margin: 0 0 32px;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      searchImage: file(relativePath: { eq: "dashboard.png" }) {
        childImageSharp {
          fluid(maxWidth: 477) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reviewsImage: file(relativePath: { eq: "reviews.png" }) {
        childImageSharp {
          fluid(maxWidth: 477) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      messagingImage: file(relativePath: { eq: "messaging.png" }) {
        childImageSharp {
          fluid(maxWidth: 477) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trackingImage: file(relativePath: { eq: "tracking.png" }) {
        childImageSharp {
          fluid(maxWidth: 477) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dashboardImage: file(relativePath: { eq: "dashboard.png" }) {
        childImageSharp {
          fluid(maxWidth: 477) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const KEY_FEATURES = [
    {
      title: "search",
      content: data.searchImage.childImageSharp.fluid,
      label: "Criteria based search",
    },
    {
      title: "reviews",
      content: data.reviewsImage.childImageSharp.fluid,
      label: "Customer reviews",
    },
    {
      title: "messaging",
      content: data.messagingImage.childImageSharp.fluid,
      label: "Private messages",
    },
    {
      title: "tracking",
      content: data.trackingImage.childImageSharp.fluid,
      label: "Order tracking",
    },
    {
      title: "dashboard",
      content: data.dashboardImage.childImageSharp.fluid,
      label: "Personalised dashboard",
    },
  ];

  return (
    <Wrapper>
      <Heading>Key features</Heading>
      <Carousel items={KEY_FEATURES} />
    </Wrapper>
  );
};

export default Header;
