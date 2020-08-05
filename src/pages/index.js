import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import HowItWorks from "../components/howItWorks";
import KeyFeatures from "../components/keyFeatures";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <HowItWorks />
    <KeyFeatures />
  </Layout>
);

export default IndexPage;
