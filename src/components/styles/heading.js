import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-family: var(--secondary-font-family);
  font-size: 35px;
  line-height: 44px;
  @media (min-width: 768px) {
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
