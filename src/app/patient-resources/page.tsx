import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AlertBanner } from "@/components/alert-banner";
import { HeroFullWidth } from "@/components/hero-full-width";
import { PHDVideo } from "@/components/phd-video";
import { NavCards } from "@/components/nav-cards";

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
      <NavCards title="" content="p" num={3} withRedBox={true} accent={true} />
      <NavCards title="" content="ul" num={2} accent={true} />
      <HeroFullWidth
        theme="gray-dark"
        image="/images/hero-homepage.jpg"
        title="Download Your Telehealth Checklist"
        body="Get a printable checklist with all the essential steps to prepare for your telehealth appointment. Keep it handy to ensure you don't miss anything important."
        button1="Download Checklist [PDF]"
      />
      <NavCards title="Need Additional Help?" content="p" num={3} />
      <Footer />
    </>
  );
}
