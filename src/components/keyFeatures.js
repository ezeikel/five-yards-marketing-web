import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Carousel from "./carousel";
import { Heading } from "./styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-large);
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const StyledHeading = styled(Heading)`
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
      font-size: 2.5rem;
      line-height: 31px;
      padding: 13px 33px;
      & + li {
        margin-top: 56px;
      }
      &.active {
        color: var(--color-primary);
        box-shadow: var(--box-shadow);
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
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      reviewsImage: file(relativePath: { eq: "reviews.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      messagingImage: file(relativePath: { eq: "messaging.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      trackingImage: file(relativePath: { eq: "tracking.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dashboardImage: file(relativePath: { eq: "dashboard.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const KEY_FEATURES = [
    {
      title: "search",
      content: data.searchImage.childImageSharp.gatsbyImageData,
      label: "Criteria based search",
    },
    {
      title: "reviews",
      content: data.reviewsImage.childImageSharp.gatsbyImageData,
      label: "Customer reviews",
    },
    {
      title: "messaging",
      content: data.messagingImage.childImageSharp.gatsbyImageData,
      label: "Private messages",
    },
    {
      title: "tracking",
      content: data.trackingImage.childImageSharp.gatsbyImageData,
      label: "Order tracking",
    },
    {
      title: "dashboard",
      content: data.dashboardImage.childImageSharp.gatsbyImageData,
      label: "Personalised dashboard",
    },
  ];

  const handleClick = index => {
    setActiveSlide(index);
    window.gtag("event", "click", {
      category: "Carousel",
      action: `Navigation Click - ${KEY_FEATURES[index].label}`,
      label: "Key Features Carousel",
    });
  };

  return (
    <Wrapper>
      <StyledHeading level={2}>Key features</StyledHeading>
      <SliderNav>
        <SliderNavLinks>
          {KEY_FEATURES.map((slide, i) => (
            <li className={activeSlide === i ? "active" : ""} key={i}>
              <button type="button" onClick={() => handleClick(i)}>
                {slide.label}
              </button>
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
