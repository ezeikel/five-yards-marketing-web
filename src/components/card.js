import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: 0 0 22px 22px;
  box-shadow: 0px 0px 10px #00000029;

  @media (min-width: 768px) {
    flex: 1 1 33.33%;
    /* max-width: 477px; */
  }
`;

const Note = styled.span`
  font-family: var(--secondary-font-family);
  display: flex;
  font-size: 20px;
  color: #04acba;
  margin-bottom: 12px;
  opacity: 0.49;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

const Heading = styled.h4`
  font-family: var(--secondary-font-family);
  font-size: 28px;
  font-weight: 600;
  color: #2f2f2f;
  margin: 0 0 8px;
  @media (min-width: 768px) {
    font-size: 30px;
    margin: 0 0 10px;
  }
`;

const Body = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #2f2f2f;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const StyledImg = styled(Img)`
  margin-bottom: 20px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
`;

const Bottom = styled.div`
  padding: 16px;
  @media (min-width: 768px) {
    padding: 0 20px 70px;
  }
`;

const Card = ({ image, heading, body, note }) => (
  <Wrapper>
    <StyledImg
      fluid={image}
      imgStyle={{
        objectFit: "cover",
      }}
    />
    <Bottom>
      <Note>{note}</Note>
      <Heading>{heading}</Heading>
      <Body>{body}</Body>
    </Bottom>
  </Wrapper>
);

export default Card;
