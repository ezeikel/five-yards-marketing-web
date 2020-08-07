import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextInput from "./textInput";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import addToMailchimp from "gatsby-plugin-mailchimp";

import GenericModal from "./genericModal";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter an email address"),
});

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-family: var(--secondary-font-family);
  font-size: 35px;
  line-height: 44px;
  color: var(--color-black);
  margin: 0 0 8px;
`;

const Subheading = styled.h2`
  color: var(--color-black);
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  margin: 0 0 16px;
`;

const AppPreview = styled.div`
  display: flex;
  width: 100%;
  height: 256px;
  margin-bottom: 60px;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledUiImage = styled(Img)`
  width: 372px;
  height: 252px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  transform: scale(0.9) translateY(40px);
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px;
  padding: 0 36px;
`;

const StyledForm = styled(Form)`
  display: flex;
  input {
    flex: 1 0 auto;
    padding: 10px 16px;
    font-size: 14px;
    line-height: 16px;
    border: 1px solid var(--color-grey);
    border-right: none;
    border-radius: 2px 0px 0px 2px;
  }
  button {
    flex: 0 0 auto;
    color: var(--color-white);
    background-color: var(--color-accent);
    font-size: 14px;
    padding: 10px 16px;
    border-radius: 0px 2px 2px 0px;
  }
`;

const More = styled.span`
  font-size: 12px;
  text-align: center;
  margin-bottom: 31px;
`;

const Thanks = styled.div`
  font-size: 12px;
  text-align: center;
  h3 {
    font-size: 25px;
    line-height: 30px;
    font-family: var(--secondary-font-family);
    margin: 0 0 29px;
  }
  p {
    font-size: 16px;
    line-height: 21px;
    margin: 0 0 31px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      width: 100%;
      padding: 10px 40px;
      max-width: 160px;
      border-radius: 2px;
      &.twitter {
        background-color: #3c9cd8;
      }
      &.facebook {
        background-color: #395aa1;
      }
      &.whatsapp {
        background-color: #23d366;
      }
    }
    li + li {
      margin-top: 21px;
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHero(context: { eq: "Home" }) {
        heading
        subHeading
      }
      fabricImage: file(relativePath: { eq: "fabric.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      uiImage: file(relativePath: { eq: "app-ui.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = async () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <AppPreview>
        <StyledBackgroundImage
          Tag="div"
          fluid={data.fabricImage.childImageSharp.fluid}
          imgStyle={{
            objectFit: "cover",
          }}
        >
          <StyledUiImage
            fluid={data.uiImage.childImageSharp.fluid}
            imgStyle={{
              objectFit: "cover",
            }}
          />
        </StyledBackgroundImage>
      </AppPreview>
      <CTA>
        <Heading>{data.contentfulHero.heading}</Heading>
        <Subheading>{data.contentfulHero.subHeading}</Subheading>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={SignupSchema}
          onSubmit={async (
            { email },
            { setSubmitting, setErrors, resetForm }
          ) => {
            // extra info to send to mailchimp
            const listData = {};

            try {
              const result = await addToMailchimp(email, listData);
              if (result.result === "error") {
                setErrors({
                  email: result.msg,
                });
                trackCustomEvent({
                  category: "Signup Form",
                  action: "Fail",
                  label: "Gatsby Google Analytics Signup Form",
                });
                setSubmitting(false);
              } else {
                trackCustomEvent({
                  category: "Signup Form",
                  action: "Success",
                  label: "Gatsby Google Analytics Signup Form",
                });
                setSubmitting(false);
                resetForm();

                // open thank you modal
                setIsOpen(true);
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
          {({ isSubmitting, errors }) => (
            <StyledForm>
              <TextInput
                name="email"
                type="email"
                placeholder="thomas@sankara.com"
              />
              <ErrorMessage component={Error} name="email" />
              <button type="submit">
                {isSubmitting ? "Signing up" : "Sign up"}
              </button>
            </StyledForm>
          )}
        </Formik>
      </CTA>
      <More>SEE MORE</More>
      <GenericModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        heading="Join the waitlisy"
        contentLabel=""
        close={closeModal}
      >
        <Thanks>
          <h3>Thank you for registering your interest in Five Yards.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqu.
          </p>
          <ul>
            <li className="twitter">
              <OutboundLink href="https://www.twitter.com/fiveyardsapp">
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  color="var(--color-white)"
                  size="2x"
                />
              </OutboundLink>
            </li>
            <li className="facebook">
              <OutboundLink href="https://facebook.com/fiveyardsapp">
                <FontAwesomeIcon
                  icon={["fab", "facebook-f"]}
                  color="var(--color-white)"
                  size="2x"
                />
              </OutboundLink>
            </li>
            <li className="whatsapp">
              <OutboundLink href="https://www.whatsapp.com">
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  color="var(--color-white)"
                  size="2x"
                />
              </OutboundLink>
            </li>
          </ul>
        </Thanks>
      </GenericModal>
    </Wrapper>
  );
};

export default Hero;
