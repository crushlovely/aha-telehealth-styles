import { Header } from "@/components/header";
import { HeroFullWidth } from "@/components/hero-full-width";
import { NavCards } from "@/components/nav-cards";
import { HowItWorks } from "@/components/how-it-works";
import { FullWidthTestimonial } from "@/components/full-width-testimonial";
import { Footer } from "@/components/footer";
import { Stats } from "@/components/stats";
import { SpeedBump } from "@/components/speed-bump";

export default function Home() {
  return (
    <>
      <Header />
      <Stats
        title="Distinguished Advisory Committee"
        description="Our esteemed advisory committee comprises the nation's most distinguished healthcare leaders, researchers, and innovators who guide our mission to advance telehealth science and practice through their unparalleled expertise."
        stat1={{
          number: "6",
          description: "Distinguished Advisors",
        }}
        stat2={{
          number: "200+",
          description: "Combined Years Experience",
        }}
        stat3={{ number: "15M+", description: "Patients Impacted" }}
      />
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
      <Footer />
      <SpeedBump open={false} />
    </>
  );
}
