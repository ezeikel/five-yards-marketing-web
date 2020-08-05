import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Wrapper = styled.div`
  display: block;
`;

const CarouselSlide = ({ data }) => {
  if (!data) return null;

  return (
    <Wrapper>
      <Img
        fluid={data.content}
        imgStyle={{
          objectFit: "cover",
        }}
      />
    </Wrapper>
  );
};

export default CarouselSlide;
