import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import CarouselSlide from "./carouselSlide";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 23px;
  width: 100%;
  .slick-list {
    margin-bottom: 71px;
  }
  .slick-dots {
    button {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: var(--color-caoursel-dots);
      &:before {
        content: "";
      }
    }
    .slick-active button {
      background-color: var(--color-accent);
    }
  }
  @media (min-width: 768px) {
    max-width: 760px;
    max-height: 430px;
    padding-bottom: 0;
    .slick-list {
      margin-bottom: 0;
    }
  }
`;

const Carousel = ({ items, activeSlide, setActiveSlide }) => {
  const sliderEl = useRef(null);

  useEffect(() => {
    sliderEl.current.slickGoTo(activeSlide);
  }, [activeSlide]);

  const settings = {
    dots: false,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        },
      },
    ],
    beforeChange: (prev, next) => setActiveSlide(next),
    swipe: (slick, direction) => {
      trackCustomEvent({
        category: "Carousel",
        action: `Swipe/Drag - ${direction}`,
        label: "Key Features Carousel",
      });
    },
  };

  return (
    <Wrapper>
      <Slider {...settings} ref={sliderEl}>
        {items.map((item, index) => (
          <CarouselSlide key={index} data={item} />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Carousel;
