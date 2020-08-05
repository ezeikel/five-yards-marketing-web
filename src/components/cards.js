import React from "react";
import styled from "styled-components";
import Card from "./card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f8fc;

  > div + div {
    margin-top: 45px;
  }
`;

const Cards = ({ items }) => (
  <Wrapper>
    {items.map(({ image, heading, body, note }) => (
      <Card image={image} heading={heading} body={body} note={note} />
    ))}
  </Wrapper>
);

export default Cards;
