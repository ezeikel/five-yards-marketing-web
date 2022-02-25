import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

type SignUpFormProps = {
  openModal: () => void;
};

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Your email doesn't look quite right")
    .required("Enter an email"),
});

const SignupForm = ({ openModal }: SignUpFormProps) => {
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
          const result = await addToMailchimp(
            email.toLocaleLowerCase(),
            listData,
            null,
          );

          if (result.result === "error") {
            const errorMessage = result.msg.includes("is already subscribed")
              ? "You're already on the list"
              : result.msg;
            setErrors({
              email: errorMessage,
            });

            typeof window !== "undefined" &&
              window.gtag &&
              window.gtag("event", "waiting_list_signup_fail", { email });

            setSubmitting(false);
          } else {
            typeof window !== "undefined" &&
              window.gtag &&
              window.gtag("event", "waiting_list_signup_success", { email });

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
      {({ isSubmitting, errors, touched }) => {
        const hasError = touched.email && errors.email;
        const textInputClassname = classNames(
          "block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300",
          {
            "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm":
              hasError,
          },
        );
        return (
          <Form id="signup" className="mt-3 sm:flex">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="w-full">
              <div className="w-full sm:flex">
                <div className="mt-1 relative rounded-md shadow-sm flex-1">
                  <Field
                    type="email"
                    name="email"
                    className={textInputClassname}
                    placeholder="Your email"
                    aria-invalid={hasError}
                    aria-describedby={hasError ? "email-error" : ""}
                  />
                  {hasError ? (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ExclamationCircleIcon
                        className="h-5 w-5 text-red-500"
                        aria-hidden="true"
                      />
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  {isSubmitting ? "Sending.." : "Notify me"}
                </button>
              </div>
              {hasError ? (
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
