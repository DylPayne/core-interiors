import Layout from "../components/layout/layout";
import HeaderSection from "../components/header-section/headerSection";
import About from "../components/about/about";

export default function AboutPage() {
  return(
    <Layout>
      <HeaderSection title="About Us" subtitle="Learn about how we started" />
      <About />
    </Layout>
  )
}