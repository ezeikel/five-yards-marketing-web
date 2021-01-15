import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-family: var(--font-family-secondary);
  font-size: 35px;
  line-height: 44px;
  margin: 0 0 var(--spacing-medium);
  @media (min-width: 768px) {
    font-size: 44px;
    line-height: 50px;
  }
  @media (min-width: 1280px) {
    font-size: 70px;
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
