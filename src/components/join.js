import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Heading } from "./styles";
import Button from "./button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-large);
  background-color: var(--color-background);

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto auto;
    grid-column-gap: var(--spacing-large);
    margin-bottom: 127px;
    border-radius: var(--border-radius);
    padding: 60px 60px 69px;
  }
`;

const StyledHeading = styled(Heading)`
  @media (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    font-size: 6rem;
    line-height: 50px;
  }
`;

const Body = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  margin: 0 0 var(--spacing-large);

  @media (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    margin: 0 0 125px;
    font-size: 2.5rem;
    line-height: 35px;
  }
`;

const CheckboxFeatures = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  line-height: 25px;
  margin-bottom: var(--spacing-large);
  > div {
    display: flex;
    align-items: center;
    & + div {
      margin-top: var(--spacing-medium);
    }
    span {
      max-width: 129px;
      font-weight: 600;
      &:first-of-type {
        margin-left: var(--spacing-large);
      }
    }
  }

  @media (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    flex-direction: row;
    font-size: 2.5rem;
    line-height: 31px;
    > div {
      & + div {
        margin: 0 0 0 var(--spacing-large);
      }
      span {
        &:first-of-type {
          margin-left: var(--spacing-large);
        }
      }
    }
  }
`;

const StyledAnchorLink = styled(AnchorLink)`
  button {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 100%;
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
      <StyledHeading level={2}>Join the tribe. Sign up now</StyledHeading>
      <Body>
        Unlock what’s possible - with Five Yards. The marketplace that puts
        customers, fabric vendors and tailors all in one place.
      </Body>
      <CheckboxFeatures>
        {CHECKBOX_FEATURES.map((feature, index) => (
          <div key={index}>
            <FontAwesomeIcon
              icon={["fal", "check-circle"]}
              color="var(--color-primary)"
              size="2x"
            />
            <span>{feature}</span>
          </div>
        ))}
      </CheckboxFeatures>
      <StyledAnchorLink to="/#signup" title="Join the tribe">
        <Button primary>Sign up now</Button>
      </StyledAnchorLink>
    </Wrapper>
  );
};

export default Join;
