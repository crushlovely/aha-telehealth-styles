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
      <ResourceCards
        title="Leading Research & Expert Convening"
        description="Discover groundbreaking research and connect with healthcare's foremost telehealth experts"
        ctaText="View All Courses"
        ctaUrl="/courses"
        resources={[
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Beginner",
            title: "Introduction to Telehealth",
            description:
              "Learn the fundamentals of virtual care delivery and patient engagement. Learn the fundamentals of virtual care delivery and patient engagement.",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Advanced",
            title: "Clinical Best Practices",
            description:
              "Master advanced techniques for effective remote patient care.",
            ctaText: "Learn More",
            ctaUrl: "/courses/clinical-practices",
          },
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Advanced",
            title: "Clinical Best Practices",
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
