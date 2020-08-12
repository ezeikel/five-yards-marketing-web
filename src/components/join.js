import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 36px 40px;
  background-color: #f7f8fc;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto auto;
    margin-bottom: 127px;
    border-radius: 22px;
    padding: 60px 60px 69px;
  }
`;

const Heading = styled.h2`
  font-size: 35px;
  /* line-height: 44px; */
  font-family: var(--secondary-font-family);
  font-weight: 700;
  margin: 0 0 15px;

  @media (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    font-size: 60px;
    /* line-height: 35px; */
    margin: 0 0 25px;
  }
`;

const Body = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 44px;

  @media (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    margin: 0 0 125px;
    font-size: 25px;
    line-height: 35px;
  }
`;

const CheckboxFeatures = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 43px;
  > div {
    display: flex;
    align-items: center;
    & + div {
      margin-top: 20px;
    }
    span {
      /* &:first-of-type {
        width: 38px;
        height: 38px;
        background: tomato;
      } */
      max-width: 129px;
      font-weight: 600;
      &:first-of-type {
        margin-left: 44px;
      }
    }
  }

  @media (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    flex-direction: row;
    font-size: 25px;
    line-height: 31px;
    > div {
      & + div {
        margin: 0 0 0 40px;
      }
      span {
        &:first-of-type {
          margin-left: 25px;
        }
      }
    }
  }
`;

const Button = styled.button`
  width: 100%;
  color: var(--color-white);
  background-color: var(--color-accent);
  font-size: 14px;
  font-weight: 600;
  /* line-height: 8px; */
  padding: 10px 16px;
  border-radius: 2px;
  @media (min-width: 768px) {
    font-size: 25px;
    padding: 20px 67px;
  }
`;

const StyledAnchorLink = styled(AnchorLink)`
  @media (min-width: 768px) {
    grid-column: 2 / -1;
    grid-row: 1 / -1;
    place-self: center;
  }
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
      <StyledAnchorLink to="/#signup" title="Join the tribe">
        <Button>Sign up now</Button>
      </StyledAnchorLink>
    </Wrapper>
  );
};

export default Join;
