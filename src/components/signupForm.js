import React, { useState, useEffect } from "react";
import styled from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isIOS } from "react-device-detect";
import { Button } from "./styles";
import TextInput from "./textInput";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Your email doesn't look quite right")
    .required("Enter an email"),
});

const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  input {
    flex: 1 0 auto;
  }
  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    margin-top: -10px;
  }
`;

const SubmitButton = styled(Button)`
  flex: 0 0 auto;
  border-radius: 0px 2px 2px 0px;
`;

const SignupForm = ({ openModal }) => {
  const [isIOSBrowser, setisIOSBrowser] = useState(false);

  // FIX: react hydrate causing issues when using isIOS outside of lifecycle hook - https://github.com/gatsbyjs/gatsby/issues/9849
  useEffect(() => {
    setisIOSBrowser(isIOS);
  }, []);

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={SignupSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async ({ email }, { setSubmitting, setErrors, resetForm }) => {
        // extra info to send to mailchimp
        const listData = {};

        try {
          const result = await addToMailchimp(email, listData);

          if (result.result === "error") {
            const errorMessage = result.msg.includes("is already subscribed")
              ? "You're already on the list"
              : result.msg;
            setErrors({
              email: errorMessage,
            });
            trackCustomEvent({
              category: "Form",
              action: "Fail",
              label: "Signup Form",
            });
            setSubmitting(false);
          } else {
            trackCustomEvent({
              category: "Form",
              action: "Success",
              label: "Signup Form",
            });
            setSubmitting(false);
            resetForm();

            // open thank you modal
            openModal();
          }
        } catch (e) {
          if (e.message === "Timeout") {
            setErrors({
              email:
                "Looks like you are using an add blocking browser that's preventing this form from being submitted - please temporarily toggle off the 'Ads and trackers blocked' settings and then re-submit the form.",
            });
          }
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, errors, setErrors }) => (
        <StyledForm id="signup">
          <TextInput
            name="email"
            type="email"
            placeholder="Your email address"
            error={errors.email}
            isIOS={isIOSBrowser}
          />
          <SubmitButton
            error={errors.email}
            type="submit"
            disabled={errors.email}
          >
            {isSubmitting ? "Signing up" : "Sign up"}
          </SubmitButton>
          {errors.email && (
            <FontAwesomeIcon
              icon={["fal", "times-circle"]}
              color="var(--color-white)"
              size="2x"
              onClick={() => setErrors({})}
            />
          )}
        </StyledForm>
      )}
    </Formik>
  );
};

export default SignupForm;
