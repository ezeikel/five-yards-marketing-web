import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.section`
  display: flex;
`

const Heading = styled.h1`
  font-family: var(--secondary-font-family);
  font-size: 72px;
  color: #000f1c;
`

const Subheading = styled.h2`
  color: #000f1c;
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHero(context: { eq: "Home" }) {
        heading
        subHeading
      }
    }
  `)

  return (
    <Wrapper>
      <Heading>{data.contentfulHero.heading}</Heading>
      <Subheading>{data.contentfulHero.subHeading}</Subheading>
    </Wrapper>
  )
}

export default Hero
