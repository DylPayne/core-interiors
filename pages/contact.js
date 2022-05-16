import Layout from "../components/layout/layout";
import HeaderSection from "../components/header-section/headerSection";
import Contact from "../components/contact/contact";

export default function ContactPage() {
  return (
    <Layout>
      <HeaderSection title="Contact Us" subtitle="Get in touch today" />
      <Contact />
    </Layout>
  );
}
