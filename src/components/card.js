import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  background-color: var(--color-white);
  border-radius: 0 0 22px 22px;
`;

const Note = styled.span`
  display: flex;
  font-size: 20px;
  color: #04acba;
  margin-bottom: 12px;
  opacity: 0.5;
`;

const Heading = styled.h4`
  font-family: var(--secondary-font-family);
  font-size: 28px;
  font-weight: 600;
  color: #2f2f2f;
  margin: 0 0 8px;
`;

const Body = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #2f2f2f;
  margin-bottom: 8px;
`;

const Card = ({ image, heading, body, note }) => (
  <Wrapper>
    <img src={image} />
    <div>
      <Note>{note}</Note>
      <Heading>{heading}</Heading>
      <Body>{body}</Body>
    </div>
  </Wrapper>
);

export default Card;
