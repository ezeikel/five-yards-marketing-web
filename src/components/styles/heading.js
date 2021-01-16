import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-family: var(--font-family-secondary);
  font-size: 3.5rem;
  line-height: 44px;
  margin: 0 0 var(--spacing-large);
  @media (min-width: 768px) {
    font-size: 4.4rem;
    line-height: 50px;
  }
  @media (min-width: 1280px) {
    font-size: 7rem;
    line-height: 80px;
  }
`;

const Heading = ({ level, ...props }) => {
  return <StyledHeading as={`h${level}`} {...props} />;
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
