import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 36px 40px;
  background-color: #f7f8fc;
`;

const Heading = styled.h2`
  font-size: 35px;
  line-height: 44px;
  font-family: var(--secondary-font-family);
  font-weight: 700;
  margin: 0 0 15px;
`;

const Body = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 44px;
`;

const CheckboxFeatures = styled.div`
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 43px;
  > div {
    display: flex;
    align-items: center;
    + div {
      margin-top: 20px;
    }
    span {
      /* &:first-of-type {
        width: 38px;
        height: 38px;
        background: tomato;
      } */
      max-width: 129px;
      &:first-of-type {
        margin-left: 44px;
      }
    }
  }
`;

const Button = styled.button`
  color: var(--color-white);
  background-color: var(--color-accent);
  font-size: 14px;
  /* line-height: 8px; */
  padding: 10px 16px;
  border-radius: 2px;
`;

const Join = () => {
  const CHECKBOX_FEATURES = [
    "Mark your favourites",
    "Pay securely",
    "Track progress",
  ];

  return (
    <Wrapper>
      <Heading>Join the tribe. Sign up now</Heading>
      <Body>
        Unlock what’s possible - with Five Yards. The marketplace that puts
        customers, fabric vendors and tailors all in one place.
      </Body>
      <CheckboxFeatures>
        {CHECKBOX_FEATURES.map((feature, index) => (
          <div key={index}>
            <FontAwesomeIcon
              icon={["fal", "check-circle"]}
              color="var(--color-accent)"
              size="2x"
            />
            <span>{feature}</span>
          </div>
        ))}
      </CheckboxFeatures>
      <Button>Sign up now</Button>
    </Wrapper>
  );
};

export default Join;
