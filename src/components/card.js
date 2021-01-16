import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  box-shadow: var(--box-shadow);

  @media (min-width: 768px) {
    flex: 1 1 33.33%;
    /* max-width: 477px; */
  }
`;

const Note = styled.span`
  font-family: var(--font-family-secondary);
  display: flex;
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 12px;
  opacity: 0.49;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
`;

const Heading = styled.h4`
  font-family: var(--font-family-secondary);
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0 0 var(--spacing-medium);
`;

const Body = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  margin: 0;
`;

const StyledImg = styled(Img)`
  margin-bottom: var(--spacing-large);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
`;

const Bottom = styled.div`
  padding: var(--spacing-medium);
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
