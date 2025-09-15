import { Header } from "@/components/header";
import { HeroFullWidth } from "@/components/hero-full-width";
import { NavCards } from "@/components/nav-cards";
import { HowItWorks } from "@/components/how-it-works";
import { FullWidthTestimonial } from "@/components/full-width-testimonial";
import { Footer } from "@/components/footer";
import { Stats } from "@/components/stats";
import { ResourceCards } from "@/components/resource-cards";
import { SpeedBump } from "@/components/speed-bump";

export default function Home() {
  return (
    <>
      <Header />
      <HeroFullWidth
        theme="aqua"
        image="/images/hero-homepage.jpg"
        overline="American heart association Center for telehealth™"
        title="Advancing Virtual Care"
        body="We are driving standardization by advancing telehealth science, improving access to care through evidence-based research, and convening healthcare experts."
        button1="Explore the Latest from the Field"
      />
      <NavCards title="" content="p" num={3} withRedBox={true} accent={true} />
      <FullWidthTestimonial />
      <HowItWorks />
      <HeroFullWidth
        theme="gray"
        image="/images/homepage-hero.jpg"
        title="Ready to level up your onboarding and training?"
        body="Evidence-based approach to improved quality of patient care."
        button1="Explore Training Courses"
      />
      <Stats
        stat1={{
          number: "74%",
          description:
            "Physicians reporting telehealth use in their medical practices, according to the American Medical Association",
        }}
        stat2={{
          number: "330K+",
          description:
            "Individuals have come to the American Heart Association Professional Education Hub for their education needs",
        }}
        stat3={{ number: "20M", description: "People trained annually in CPR" }}
      />
      <ResourceCards
        title="Expert-Led Telehealth Curriculum"
        description="Get started now with these Complimentary modules"
        ctaText="Explore Telehealth Portfolio"
        ctaUrl="/courses"
        resources={[
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Research",
            title: "Incorporating AI in Digital Health",
            description:
              "Learn the fundamentals of virtual care delivery and patient engagement. Learn the fundamentals of virtual care delivery and patient engagement.",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Webinar",
            title: "Opioid & Controlled Substances in Telehealth",
            description:
              "Master advanced techniques for effective remote patient care.",
            ctaText: "Learn More",
            ctaUrl: "/courses/clinical-practices",
          },
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Convening",
            title:
              "Take Health to Heart: Use of Telehealth to Advance Women’s Heart Health, Especially in the Most Vulnerable Patient Populations",
            description:
              "Master advanced techniques for effective remote patient care.",
            ctaText: "Learn More",
            ctaUrl: "/courses/clinical-practices",
          },
        ]}
      />
      <Footer />
      <SpeedBump open={false} />
    </>
  );
}
