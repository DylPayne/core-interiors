import Layout from "../components/layout/layout";
import HeaderSection from "../components/header-section/headerSection";
import Testimonials from "../components/testimonials/testimonials";
import React from "react";

export default function TestimonialsPage() {
  return (
    <Layout>
      <React.Fragment>
        <HeaderSection
          title="Testimonials"
          subtitle="Read what our clients have to say"
        />
        <Testimonials />
      </React.Fragment>
    </Layout>
  );
}
