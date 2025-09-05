import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AlertBanner } from "@/components/alert-banner";
import { HeroFullWidth } from "@/components/hero-full-width";
import { PHDVideo } from "@/components/phd-video";

export default function PatientResourcesPage() {
  return (
    <>
      <Header />
      <AlertBanner
        icon="/images/icon-buildings.png"
        label="Training for Organizations"
        text="Bulk pricing and custom solutions for healthcare institutions"
        ctaUrl="#"
        ctaText="Learn More"
        theme="black"
      />
      <HeroFullWidth
        theme="red"
        title="Make the most of your Telehealth appointment"
        body="Make the most of your virtual healthcare visit with our comprehensive preparation guide. Follow these simple steps to ensure a smooth, effective telehealth experience."
      />
      <PHDVideo />
      <HeroFullWidth
        theme="red"
        title="Make the most of your Telehealth appointment"
        body="Make the most of your virtual healthcare visit with our comprehensive preparation guide. Follow these simple steps to ensure a smooth, effective telehealth experience."
      />
      <Footer />
    </>
  );
}
