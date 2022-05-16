import Layout from "../components/layout/layout";
import Services from "../components/services/services";
import HeaderSection from "../components/header-section/headerSection";
import React from "react";

export default function ServicesPage() {
  return (
    <main>
      <Layout>
        <React.Fragment>
          <HeaderSection
            title="Services"
            subtitle="Take a look at some of our services"
          />
          <Services />
        </React.Fragment>
      </Layout>
    </main>
  );
}
