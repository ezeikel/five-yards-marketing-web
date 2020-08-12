import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      background-color: #f0f0f0;
      &:before {
        content: "";
      }
    }
    .slick-active button {
      background-color: #04acba;
    }
  }
`;

const Carousel = ({ items, activeSlide, setActiveSlide }) => {
  const sliderEl = useRef(null);

  useEffect(() => {
    sliderEl.current.slickGoTo(activeSlide);
  }, [activeSlide]);

  const settings = {
    dots: true,
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
          dots: false,
        },
      },
    ],
    beforeChange: (prev, next) => setActiveSlide(next),
  };

  // if (!items) return null;

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
