import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  position: relative;
  line-height: normal;
  border-radius: 2px 0px 0px 2px;
  border: 1px solid var(--color-grey);
  width: 100%;
  padding: 10px 16px;
  font-size: 14px;

  ${({ isIOS }) =>
    isIOS
      ? `
    /* enlarge by 16/14 = 114.29% */
    border-radius: 2.29px 0 0 2.29px;
    border: 1.14px solid var(--color-grey);
    width: calc(100% / 0.88);
    padding: 11.43px 18.29px;
    font-size: 16px;

    /* scale down by 12/16 = 75% */
    transform: scale(0.88);
    transform-origin: left top;

    /* remove extra white space */
    margin-bottom: -6px;
    margin-right: calc(100% * 0.12);
  `
      : null};
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

const TextInput = ({ label, error, isIOS, ...props }) => {
  const [field, meta] = useField(props);

  console.log({ context: "textInput", isIOS });

  return (
    <Wrapper>
      <Input
        error={meta.touched && meta.error !== undefined}
        isIOS={isIOS}
        {...field}
        {...props}
      />
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default TextInput;
