import React from "react";
import styled from "styled-components";
import Card from "./card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);

  > div + div {
    margin: var(--spacing-large) 0 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    > div + div {
      margin: 0 0 0 var(--spacing-large);
    }
  }
`;

const Cards = ({ items }) => (
  <Wrapper>
    {items.map(({ image, heading, body, note }, index) => (
      <Card
        key={index}
        image={image}
        heading={heading}
        body={body}
        note={note}
      />
    ))}
  </Wrapper>
);

export default Cards;
