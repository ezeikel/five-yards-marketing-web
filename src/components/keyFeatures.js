import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import Carousel from "./carousel";
import { Heading } from "./styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 36px 40px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 32px;
  @media (min-width: 768px) {
    margin: 0 0 52px;
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
  }
`;

const StyledCarousel = styled(Carousel)`
  @media (min-width: 768px) {
    grid-column: 2 / -1;
    grid-row: 1 / -1;
  }
`;

const SliderNav = styled.div`
  display: none;
  @media (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 2 / -1;
    display: flex;
  }
`;

const SliderNavLinks = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    li {
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      font-size: 25px;
      line-height: 31px;
      padding: 13px 33px;
      & + li {
        margin-top: 56px;
      }
      &.active {
        color: var(--color-accent);
        box-shadow: 0px 0px 15px #00000015;
      }
    }
  }
`;

const Header = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const data = useStaticQuery(graphql`
    query {
      searchImage: file(relativePath: { eq: "search.png" }) {
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

  const handleClick = index => {
    setActiveSlide(index);
    trackCustomEvent({
      category: "Carousel",
      action: `Navigation Click - ${index}`,
      label: "Key Features Carousel",
    });
  };

  return (
    <Wrapper>
      <StyledHeading level={2}>Key features</StyledHeading>
      <SliderNav>
        <SliderNavLinks>
          {KEY_FEATURES.map((slide, i) => (
            <li
              onClick={() => handleClick(i)}
              className={activeSlide === i ? "active" : ""}
              key={i}
            >
              {slide.label}
            </li>
          ))}
        </SliderNavLinks>
      </SliderNav>
      <StyledCarousel
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        items={KEY_FEATURES}
      />
    </Wrapper>
  );
};

export default Header;
