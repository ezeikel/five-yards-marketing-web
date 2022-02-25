import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Steps from "../components/steps";
import Features from "../components/features";
import CTA from "../components/cta";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Steps />
    <Features />
    <CTA />
  </Layout>
);

export default IndexPage;
