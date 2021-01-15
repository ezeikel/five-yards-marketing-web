import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import HowItWorks from "../components/howItWorks";
import KeyFeatures from "../components/keyFeatures";
import Join from "../components/join";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <HowItWorks className="full" />
    {/* <KeyFeatures /> */}
    <Join />
  </Layout>
);

export default IndexPage;
