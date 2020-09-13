import styled from "styled-components";

const Button = styled.button`
  color: ${({ error }) =>
    error ? "var(--color-error-text)" : "var(--color-white)"};
  background-color: ${({ error }) =>
    error ? "var(--color-error)" : "var(--color-accent)"};
  border: 1px solid
    ${({ error }) => (error ? "var(--color-error)" : "var(--color-accent)")};
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 2px;
  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 31px;
    padding: 16px 20px;
  }
`;

export default Button;
