import Layout from "../components/layout/layout";
import HeaderSection from "../components/header-section/headerSection";
import Contact from "../components/contact/contact";
import React from "react";

export default function ContactPage() {
  return (
    <Layout>
      <React.Fragment>
        <HeaderSection title="Contact Us" subtitle="Get in touch today" />
        <Contact />
      </React.Fragment>
    </Layout>
  );
}
