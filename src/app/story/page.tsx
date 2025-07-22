import { AJAXNewsletter } from "@/components/ajax-newsletter";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroFullWidth } from "@/components/hero-full-width";
import { PHDSectionHeading } from "@/components/phd-section-heading";
import { PHDRichText } from "@/components/phd-rich-text";
import { PHDVideoPromo } from "@/components/phd-video-promo";
import { PHDVideo } from "@/components/phd-video";
export default function StoryPage() {
  return (
    <>
      <Header />
      <HeroFullWidth
        theme="orange-alt"
        title={"First Last name's long Story"}
        body={"Title goes here"}
      />
      <PHDSectionHeading
        title={"Section Heading Title"}
        body={
          "Employees living with burnout are more likely to be exhausted, disengaged, and have lower job performance. Employee disengagement alone costs U.S. businesses $1.9 trillion in lost productivity. Chronic stress can have harmful effects on employees and companies, increasing the risk of conditions like heart disease and stroke."
        }
      />
      <PHDRichText />
      <PHDVideoPromo />
      <HeroFullWidth
        theme="aqua"
        image="https://placehold.co/936x496?text=Burnout+Placeholder"
        body="Nine best practices to beat burnout "
      />
      <PHDSectionHeading
        title={"Section Heading Title"}
        body={
          "Employees living with burnout are more likely to be exhausted, disengaged, and have lower job performance. Employee disengagement alone costs U.S. businesses $1.9 trillion in lost productivity. Chronic stress can have harmful effects on employees and companies, increasing the risk of conditions like heart disease and stroke."
        }
      />
      <PHDRichText />
      <PHDVideo />
      <AJAXNewsletter />
      <Footer />
    </>
  );
}
