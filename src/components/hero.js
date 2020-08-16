import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "./textInput";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { isIOS } from "react-device-detect";
import GenericModal from "./genericModal";
import { Heading, Button } from "./styles";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Your email doesn't look quite right")
    .required("Enter an email"),
});

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    grid-column-gap: 32px;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 8px;
  @media (min-width: 768px) {
    margin: 0 0 20px;
  }
`;

const Subheading = styled.h2`
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  margin: 0 0 16px;
  @media (min-width: 768px) {
    font-size: 25px;
    line-height: 32px;
    margin: 0 0 60px;
  }
`;

const AppPreview = styled.div`
  display: flex;
  width: 100%;
  height: 256px;
  margin-bottom: 60px;
  @media (min-width: 768px) {
    justify-content: flex-end;
    height: auto;
    grid-column: 2 / -1;
    grid-row: 1 / span 1;
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: 674px;
    height: 782px;
    &:before,
    &:after {
      border-radius: 4px;
    }
  }
`;

const StyledUiImage = styled(Img)`
  min-width: 372px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  transform: scale(0.9) translateY(40px);
  @media (min-width: 768px) {
    width: 523px;
    height: 392px;
    transform: none;
    position: absolute !important;
    top: 50%;
    margin-top: -196px;
    right: -30px;
  }
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px;
  padding: 0 36px;
  @media (min-width: 768px) {
    justify-content: center;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    width: 100%;
    max-width: 773px;
    padding: 0;
  }
`;

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

const More = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 31px;
  svg {
    display: none;
  }
  @media (min-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 2 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    line-height: 30px;
    svg {
      display: block;
      flex: 0 1 auto;
    }
  }
`;

const Thanks = styled.div`
  font-size: 12px;
  text-align: center;
  h3 {
    font-family: var(--secondary-font-family);
    font-weight: 800;
    font-size: 25px;
    line-height: 30px;
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
      padding: 10px 20px;
      max-width: 160px;
      border-radius: 2px;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        line-height: 28px;
        color: var(--color-white);
      }
      svg {
        margin-right: 12px;
        flex: 0 0 auto;
      }
      &.twitter {
        background-color: var(--color-twitter);
      }
      &.facebook {
        background-color: var(--color-facebook);
      }
      &.whatsapp {
        background-color: var(--color-whatsapp);
      }
    }
    li + li {
      margin: 21px 0 0;
    }
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 70px;
      line-height: 80px;
      margin-bottom: 30px;
    }

    p {
      font-size: 25px;
      line-height: 32px;
      margin-bottom: 81px;
    }

    ul {
      justify-content: center;
      flex-direction: row;
      li {
        padding: 16px 33px;
        max-width: 250px;
        a {
          font-size: 29px;
          line-height: 45px;
        }
        svg {
          margin-right: 30px;
        }
      }
      li + li {
        margin: 0 0 0 56px;
      }
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
          fluid(maxWidth: 523) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      uiImage: file(relativePath: { eq: "app-ui-old.png" }) {
        childImageSharp {
          fluid(maxWidth: 523) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [isOpen, setIsOpen] = useState(false);
  const [isIOSBrowser, setisIOSBrowser] = useState(false);

  // FIX: react hydrate causing issues when using isIOS outside of lifecycle hook - https://github.com/gatsbyjs/gatsby/issues/9849
  useEffect(() => {
    setisIOSBrowser(isIOS);
  }, []);

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
        <StyledHeading>{data.contentfulHero.heading}</StyledHeading>
        <Subheading>{data.contentfulHero.subHeading}</Subheading>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={SignupSchema}
          validateOnBlur={false}
          validateOnChange={false}
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
      </CTA>
      <More>
        <span>SEE MORE </span>
        <FontAwesomeIcon
          icon={["fal", "angle-down"]}
          color="var(--color-black)"
          size="lg"
        />
      </More>
      <GenericModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        heading="Join the waitlisy"
        contentLabel=""
        close={closeModal}
      >
        <Thanks>
          <h3>Welcome to the Tribe!</h3>
          <p>
            You are now on the waitlist. We'd really appreciate if you could
            spread the word
          </p>
          <ul>
            <li className="twitter">
              <OutboundLink
                href="http://twitter.com/share?text=I just became part of the @fiveyardsapp tribe. You should join too! - &url=https://get.fiveyards.app&hashtags=fiveyards,africantailor,africanfabric"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  color="var(--color-white)"
                  size="lg"
                />
                Twitter
              </OutboundLink>
            </li>
            <li className="facebook">
              <OutboundLink
                href="https://www.facebook.com/sharer/sharer.php?u=https://get.fiveyards.app"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "facebook-f"]}
                  color="var(--color-white)"
                  size="lg"
                />
                Facebook
              </OutboundLink>
            </li>
            <li className="whatsapp">
              <OutboundLink
                href="whatsapp://send?text=I just became part of the Five Yards tribe. You should join too! https://get.fiveyards.app"
                data-action="share/whatsapp/share"
              >
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  color="var(--color-white)"
                  size="lg"
                />
                WhatsApp
              </OutboundLink>
            </li>
          </ul>
        </Thanks>
      </GenericModal>
    </Wrapper>
  );
};

export default Hero;
