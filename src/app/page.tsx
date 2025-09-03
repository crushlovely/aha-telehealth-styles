import { Header } from "@/components/header";
import { HeroFullWidth } from "@/components/hero-full-width";
import { NavCards } from "@/components/nav-cards";
import { HowItWorks } from "@/components/how-it-works";
import { HalfImageHalfCopyPromoRight } from "@/components/half-image-half-copy-promo";
import { FullWidthTestimonial } from "@/components/full-width-testimonial";
import { Footer } from "@/components/footer";
import { SpeedBump } from "@/components/speed-bump";

export default function Home() {
  return (
    <>
      <Header />
      <HeroFullWidth
        theme="aqua"
        image="/images/hero-homepage.jpg"
        overline="Center for telehealth"
        title="Advancing the Science of Virtual Care"
        body="Leading evidence-based research, convening healthcare experts, and advancing telehealth science through the trusted authority of the American Heart Association."
        button1="Explore the Latest from the Field"
      />
      <NavCards title="" content="p" num={3} withRedBox={true} />
      <FullWidthTestimonial />
      <HowItWorks />
      <HeroFullWidth
        theme="gray"
        image="/images/homepage-hero.jpg"
        title="Ready to Apply This Science?"
        body="Transform research into practice with our evidence-based training courses designed for healthcare professionals."
        button1="Explore Training Courses"
      />
      <Footer />
      <SpeedBump open={false} />
    </>
  );
}
