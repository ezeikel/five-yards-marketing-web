import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Features from "../components/features";
import Cta from "../components/cta";
import HowItWorks from "../components/howItWorks";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <HowItWorks />
    <Features />
    <Cta />
  </Layout>
);

export default IndexPage;
