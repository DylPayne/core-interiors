import Layout from "../components/layout/layout";
import Gallery from "../components/gallery/gallery";
import HeaderSection from "../components/header-section/headerSection";
import React from "react";

export default function GalleryPage() {
  return (
    <Layout>
      <React.Fragment>
        <HeaderSection
          title="Gallery"
          subtitle="Take a look at our beautiful work"
        />
        <Gallery />
      </React.Fragment>
    </Layout>
  );
}
