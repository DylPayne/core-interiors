import Layout from "../components/layout/layout";
import Gallery from "../components/gallery/gallery";
import HeaderSection from "../components/header-section/headerSection";

export default function GalleryPage() {
  return (
    <Layout>
      <HeaderSection title="Gallery" subtitle="Take a look at our beautiful work" />
      <Gallery />
    </Layout>
  )
}