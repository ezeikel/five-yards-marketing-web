import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenericModal from "./genericModal";
import { Heading } from "./styles";
import SignupForm from "./signupForm";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    grid-column-gap: var(--spacing-large);
  }
`;

const Subheading = styled.h2`
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: 400;
  margin: 0 0 var(--spacing-huge);
`;

const AppPreview = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: var(--spacing-large);
  @media (min-width: 768px) {
    justify-content: flex-end;
    padding-right: 66px;
    height: auto;
    grid-column: 2 / -1;
    grid-row: 1 / span 1;
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--spacing-large) var(--spacing-large) 0;
  @media (min-width: 768px) {
    padding: var(--spacing-large);
    /* height: 782px; TODO: replace fixed value */
    align-items: center;
    &:before,
    &:after {
      border-radius: 4px;
    }
  }
`;

const StyledUiImage = styled(Img)`
  box-shadow: 0px 0px 10px #00000029;
  margin: 0 0 calc(var(--spacing-large) * -1);
  width: 100%;
  @media (min-width: 768px) {
    margin: 0;
    transform: translateX(
      102px
    ); /* 36px + 66px to match existing page padding */
  }
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-large);
  @media (min-width: 768px) {
    justify-content: center;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    width: 100%;
    max-width: 773px; /*TODO: replace fixed value */
    padding: 0;
  }
`;

const Thanks = styled.div`
  font-size: 1.2rem;
  text-align: center;
  h3 {
    font-family: var(--secondary-font-family);
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 30px;
    margin: 0 0 29px;
  }
  p {
    font-size: 1.8rem;
    line-height: 1.5;
    margin: 0 0 var(--spacing-large);
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      width: 100%;
      padding: var(--spacing-small) var(--spacing-medium);
      border-radius: var(--border-radius);
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
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
      margin: var(--spacing-medium) 0 0;
    }
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 7rem;
      line-height: 80px;
      margin-bottom: 30px;
    }

    p {
      font-size: 2.5rem;
      line-height: 32px;
      margin-bottom: 81px;
    }

    ul {
      justify-content: center;
      flex-direction: row;
      li {
        padding: 16px 33px;
        max-width: 250px; /* TODO: replace fixed value */
        a {
          font-size: 2.9rem;
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
      uiImage: file(relativePath: { eq: "app-ui.png" }) {
        childImageSharp {
          fluid(maxWidth: 523) {
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
              objectPosition: "top center",
            }}
          />
        </StyledBackgroundImage>
      </AppPreview>
      <CTA>
        <Heading>{data.contentfulHero.heading}</Heading>
        <Subheading>{data.contentfulHero.subHeading}</Subheading>
        <SignupForm openModal={openModal} />
      </CTA>
      <GenericModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        heading="Join the waitlisy"
        contentLabel=""
        close={closeModal}
      >
        <Thanks>
          <Heading>Welcome to the Tribe!</Heading>
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
