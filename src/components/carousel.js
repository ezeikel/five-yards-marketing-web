import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselSlide from "./carouselSlide";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .slick-list {
    margin-bottom: 71px;
  }
  .slick-dots {
    margin-top: 71px;
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

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // if (!items) return null;

  return (
    <Wrapper>
      <Slider {...settings}>
        {items.map((item, index) => (
          <CarouselSlide key={index} data={item} />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Carousel;
