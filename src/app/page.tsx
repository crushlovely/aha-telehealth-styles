import { Header } from "@/components/header";
import { HeroFullWidth } from "@/components/hero-full-width";
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
      <HowItWorks />

      <HeroFullWidth
        theme="white"
        title="Reach Goals with Resources"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        button1="Link Text"
      />

      <HalfImageHalfCopyPromoRight />
      <FullWidthTestimonial />
      <HalfImageHalfCopyPromoRight />
      <FullWidthTestimonial />
      <HeroFullWidth
        theme="white"
        title="Reach Goals with Resources"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        button1="Link Text"
      />
      <HeroFullWidth
        theme="gray"
        image="/images/homepage-hero.jpg"
        title="Benefits & Recognition"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        button1="Link Text"
      />

      <Footer />
      <SpeedBump open={false} />
    </>
  );
}
