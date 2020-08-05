import React from "react";
import styled from "styled-components";
import Cards from "./cards";

const FEATURES = [
  {
    image: "",
    heading: "Choose a fabric",
    body:
      "Get inspired by some popular fabrics and looks. Choose the type, colour and how many yards you need",
    note: "01",
  },
  {
    image: "",
    heading: "Place an order",
    body:
      "Find a tailor based your criteria and get accurate completion estimates and progress updates throughout the process",
    note: "02",
  },
  {
    image: "",
    heading: "Recieve your outfit",
    body:
      "Either get your outfit delivered or physically go and pick it up from your tailor. It’s your choice",
    note: "03",
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f8fc;
  padding: 40px 36px 40px;
`;

const Heading = styled.h2`
  font-size: 35px;
  font-family: var(--secondary-font-family);
  font-weight: 700;
  margin: 0 0 32px;
`;

const Features = () => (
  <Wrapper>
    <Heading>How it works</Heading>
    <Cards items={FEATURES} />
  </Wrapper>
);

export default Features;
