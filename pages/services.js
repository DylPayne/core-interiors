import Layout from "../components/layout/layout";
import Services from "../components/services/services";
import HeaderSection from "../components/header-section/headerSection";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <HeaderSection
        title="Services"
        subtitle="Take a look at some of our services"
      />
      <Services />
      <Footer />
    </main>
  );
}
