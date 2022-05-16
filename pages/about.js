import Layout from "../components/layout/layout";
import HeaderSection from "../components/header-section/headerSection";
import About from "../components/about/about";
import React from "react";

export default function AboutPage() {
  return (
    <Layout>
      <React.Fragment>
        <HeaderSection title="About Us" subtitle="Learn about how we started" />
        <About />
      </React.Fragment>
    </Layout>
  );
}
