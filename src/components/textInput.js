import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  position: relative;
  border-radius: 8px;
  border: 1px solid var(--color-grey);
  padding: 16px 8px 16px 19px;
  width: 100%;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 16px;
  ${({ error }) =>
    error
      ? `
    background-color: #ff4c4c;
    color: var(--color-white);
    border: 1px solid transparent;

    ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--color-white);
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: var(--color-white);
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--color-white);
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--color-white);
  }
  ::placeholder {
    color: var(--color-white);
  }
  `
      : null}
  /* @media (min-width: 769px) {
    margin-bottom: ${({ error }) => (error ? "0" : "32px")};
  } */
`;

const Label = styled.label`
  display: flex;
`;

const ErrorMessage = styled.span`
  display: flex;
  align-items: center;
  background-color: #ff4c4c;
  color: var(--color-white);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 16px;
  padding: 10px 16px;
`;

const TextInput = ({ label, error, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Wrapper>
      <Input
        error={meta.touched && meta.error !== undefined}
        {...field}
        {...props}
      />
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default TextInput;
