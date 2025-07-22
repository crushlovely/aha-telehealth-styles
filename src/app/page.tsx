import { AJAXNewsletter } from "@/components/ajax-newsletter";
import { Header } from "@/components/header";
import { HeroFullWidth } from "@/components/hero-full-width";
import { MultiLinks } from "@/components/multi-links";
import { MultiLogos } from "@/components/multi-logos";
import { HowItWorks } from "@/components/how-it-works";
import { PHDCard } from "@/components/phd-card";
import { HalfImageHalfCopyPromoRight } from "@/components/half-image-half-copy-promo";
import { FullWidthTestimonial } from "@/components/full-width-testimonial";
import { Footer } from "@/components/footer";
import { SpeedBump } from "@/components/speed-bump";

export default function Home() {
  return (
    <>
      <Header />
      <HeroFullWidth
        theme="red"
        image="/images/homepage-hero.jpg"
        overline="Workforce well-being"
        title="Well-being Works Better"
        body="Your business is only as healthy as your employees."
        button1="Get Started with the Scorecard"
      />
      <MultiLinks />
      <HowItWorks />
      <PHDCard />
      <PHDCard />
      <PHDCard />
      <HeroFullWidth
        theme="white"
        title="Reach Goals with Resources"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        button1="Link Text"
      />
      <PHDCard image={false} />
      <PHDCard image={false} />
      <PHDCard image={false} />
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
      <MultiLogos />
      <AJAXNewsletter />
      <Footer />
      <SpeedBump open={false} />
    </>
  );
}
