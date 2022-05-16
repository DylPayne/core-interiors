import Layout from "../components/layout/layout";
import Services from "../components/services/services";
import HeaderSection from "../components/header-section/headerSection";

export default function ServicesPage() {
  return (
    <Layout>
      <HeaderSection
        title="Services"
        subtitle="Take a look at some of our services"
      />
      <Services />
    </Layout>
  );
}
