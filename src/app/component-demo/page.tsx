import { HeroFullWidth } from "@/components/hero-full-width";
import { PHDCard } from "@/components/phd-card";
import { HalfImageHalfCopyPromoRight } from "@/components/half-image-half-copy-promo";
import { FullWidthTestimonial } from "@/components/full-width-testimonial";

export default function Home() {
  return (
    <>
      <HeroFullWidth />
      <HalfImageHalfCopyPromoRight />
      <PHDCard />
      <FullWidthTestimonial />
    </>
  );
}
