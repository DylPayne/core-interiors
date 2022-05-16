import Layout from "../components/layout/layout";
import HeaderSection from "../components/header-section/headerSection";
import Testimonials from "../components/testimonials/testimonials";

export default function TestimonialsPage() {
  return (
    <Layout>
      <HeaderSection title="Testimonials" subtitle="Read what our clients have to say" />
      <Testimonials />
    </Layout>
  )
}