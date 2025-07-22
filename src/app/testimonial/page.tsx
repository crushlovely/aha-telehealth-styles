import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroFullWidth } from "@/components/hero-full-width";
import { TestimonialForm } from "@/components/testimonial-form";
export default function DashboardPage() {
  return (
    <>
      <Header />
      <HeroFullWidth theme="orange" title="Submit a Testimonial" />
      <TestimonialForm />
      <Footer />
    </>
  );
}
