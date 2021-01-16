import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import Logo from "./svgs/logo";
import GDPRLogo from "./svgs/gdprLogo";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--spacing-large);
  font-size: 1.4rem;
  @media (min-width: 768px) {
    padding: var(--spacing-huge);
    > div {
      &:first-of-type {
        display: flex;
      }
      > div {
        & + div {
          margin-left: var(--spacing-huge);
        }
      }
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-medium);
  svg {
    width: 86px;
    height: 73px;
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    svg {
      width: 132px;
      height: 113px;
    }
  }
  @media (min-width: 1280px) {
    margin-bottom: 0;
    svg {
      width: 138px;
      height: 118px;
    }
  }
`;

const Links = styled.div`
  display: flex;
  margin-bottom: var(--spacing-large);
  > div {
    flex: 0 1 50%;
    + div {
      margin-left: var(--spacing-large);
    }
    > ul {
      li + li {
        margin-top: var(--spacing-small);
      }
    }
    > span {
      display: flex;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: var(--spacing-medium);
    }
    a {
      color: var(--color-white);
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    > div {
      flex: 0 1 auto;
      + div {
        margin-left: var(--spacing-huge);
      }
      > span {
        font-size: 2rem;
      }
      > ul li {
        font-size: 1.4rem;
      }
    }
  }
  @media (min-width: 1280px) {
    > div {
      > ul li {
        font-size: 1.6rem;
      }
    }
  }
`;

const Social = styled.div`
  display: flex;
  margin-bottom: var(--spacing-large);
  > div {
    flex: 0 1 50%;
    + div {
      margin-left: var(--spacing-large);
    }
    &:first-of-type {
      > span {
        display: flex;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: var(--spacing-medium);
      }
      > ul {
        display: flex;
        li + li {
          margin-left: var(--spacing-medium);
        }
      }
    }
    &:last-of-type {
      svg {
        width: 105px;
        height: 39px;
      }
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    > div {
      flex: 0 1 auto;
      + div {
        margin-left: var(--spacing-huge);
      }
      &:first-of-type {
        > span {
          font-size: 2rem;
        }
      }
      &:last-of-type {
        svg {
          width: 142px;
          height: 53px;
        }
      }
    }
  }
  @media (min-width: 1280px) {
    > div {
      &:last-of-type {
        svg {
          width: 213px;
          height: 80px;
        }
      }
    }
  }
`;

const Copyright = styled.div`
  color: #bebebe;
  align-self: flex-end;
`;

const Footer = () => {
  return (
    <Wrapper className="full">
      <div>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Links>
          <div>
            <span>Join us</span>
            <ul>
              <li>
                <Link to="/">Tailor sign up</Link>
              </li>
              <li>
                <Link to="/">Fabric seller sign up</Link>
              </li>
            </ul>
          </div>
          <div>
            <span>Legal</span>
            <ul>
              <li>
                <Link to="/">Terms and conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/">Cookies</Link>
              </li>
              <li>
                <Link to="/">Site map</Link>
              </li>
            </ul>
          </div>
        </Links>
        <Social>
          <div>
            <span>Follow us</span>
            <ul>
              <li>
                <OutboundLink href="https://www.facebook.com/fiveyardsapp">
                  <FontAwesomeIcon
                    icon={["fab", "facebook-f"]}
                    color="var(--color-white)"
                    size="2x"
                  />
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href="https://twitter.com/fiveyardsapp">
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    color="var(--color-white)"
                    size="2x"
                  />
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href="https://www.instagram.com/fiveyardsapp">
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    color="var(--color-white)"
                    size="2x"
                  />
                </OutboundLink>
              </li>
            </ul>
          </div>
          <div>
            <GDPRLogo />
          </div>
        </Social>
      </div>
      <Copyright>
        &copy; {new Date().getFullYear()} Five Yards, all rights reserved.
      </Copyright>
    </Wrapper>
  );
};

export default Footer;
