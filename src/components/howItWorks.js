import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const HowItWorks = () => {
  const data = useStaticQuery(graphql`
    query {
      usingIpadImage: file(relativePath: { eq: "using-ipad.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      tailorWorkingImage: file(relativePath: { eq: "tailor-working.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      receivingPackageImage: file(
        relativePath: { eq: "receiving-package.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const STEPS = [
    {
      image: data.usingIpadImage.childImageSharp.gatsbyImageData,
      heading: "Choose a fabric",
      body: "Get inspired by some popular fabrics and looks. Choose the type, colour and how many yards you need",
      note: "01",
    },
    {
      image: data.tailorWorkingImage.childImageSharp.gatsbyImageData,
      heading: "Place an order",
      body: "Find a tailor based your criteria and get accurate completion estimates and progress updates throughout the process",
      note: "02",
    },
    {
      image: data.receivingPackageImage.childImageSharp.gatsbyImageData,
      heading: "Receive your outfit",
      body: "Either get your outfit delivered or physically go and pick it up from your tailor. It’s your choice",
      note: "03",
    },
  ];

  return (
    <div className="pb-16 sm:pb-24 lg:pb-32">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {STEPS.map(({ image, heading, body, note }) => (
          <li key={note} className="col-span-1 bg-white rounded-lg shadow">
            <GatsbyImage
              image={image}
              className="[clip-path:polygon(0_0,_100%_0,_100%_75%,_0_100%)]"
            />
            <div className="p-6">
              <div className="text-lg leading-6 font-medium opacity-50 text-gray-900 mb-2">
                {note}
              </div>
              <h4 className="mb-2 font-bold text-2xl">{heading}</h4>
              <p className="text-base text-gray-500">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowItWorks;
