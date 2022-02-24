import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Your email doesn't look quite right")
    .required("Enter an email"),
});

const SignupForm = ({ openModal, errors, touched }) => {
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
          const result = await addToMailchimp(email, listData, null);

          if (result.result === "error") {
            const errorMessage = result.msg.includes("is already subscribed")
              ? "You're already on the list"
              : result.msg;
            setErrors({
              email: errorMessage,
            });

            typeof window !== "undefined" &&
              window.gtag("event", "waiting_list_signup_fail", { email });

            setSubmitting(false);
          } else {
            typeof window !== "undefined" &&
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
      {({ isSubmitting }) => (
        <Form id="signup" className="mt-3 sm:flex">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Field
            type="email"
            name="email"
            className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300"
            placeholder="Your email"
          />
          {touched.email && errors.email && <div>{errors.email}</div>}
          <button
            type="submit"
            // disabled={isSubmitting}
            className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
          >
            {isSubmitting ? "Sending.." : "Notify me"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
