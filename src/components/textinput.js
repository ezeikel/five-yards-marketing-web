import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Wrapper = styled.span`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  position: relative;
  border-radius: 8px;
  border: solid 1px ${({ error }) => (error ? "var(--color-red)" : "#666666")};
  /* margin-bottom: ${({ error }) => (error ? "10px" : "16px")}; */
  padding: 16px 8px 16px 19px;
  width: 100%;
  /* @media (min-width: 769px) {
    margin-bottom: ${({ error }) => (error ? "0" : "32px")};
  } */
`;

const Label = styled.label`
  display: flex;
`;

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Wrapper>
      {/* {meta.touched && meta.error !== undefined && <Asterix src="/star.svg" />} */}
      <Input
        dirty={meta.touched && field.value.length > 0}
        error={meta.touched && meta.error !== undefined}
        {...field}
        {...props}
      />
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
    </Wrapper>
  );
};

export default TextInput;
