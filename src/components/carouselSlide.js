import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 10px solid red;
`;

const StyledImg = styled(Img)`
  margin-bottom: var(--spacing-large);
`;

const Label = styled.span`
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  flex: 0 0 auto;
  @media (min-width: 768px) {
    display: none;
  }
`;

const CarouselSlide = ({ data }) => {
  if (!data) return null;

  return (
    <Wrapper>
      <StyledImg
        fluid={data.content}
        imgStyle={{
          objectFit: "cover",
        }}
      />
      <Label>{data.label}</Label>
    </Wrapper>
  );
};

export default CarouselSlide;
