import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AlertBanner } from "@/components/alert-banner";
import { Stats } from "@/components/stats";
import { Profiles } from "@/components/profiles";

export default function AdvisoryCommitteePage() {
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
      <Stats
        title="Advisory Committee"
        description="Our esteemed Advisory Committee comprises leading experts in telehealth and cardiovascular care, guiding our mission to advance virtual healthcare."
        stat1={{
          number: "6",
          description: "Distinguished Advisors",
        }}
        stat2={{
          number: "200+",
          description: "Combined Years Experience",
        }}
        stat3={{ number: "15+", description: "Patients Impacted" }}
      />
      <Profiles
        profiles={[
          {
            image: "/images/headshot.jpg",
            name: "Dr. Sarah Mitchell",
            title: "Chief Medical Officer",
            location: "Boston, MA",
            tags: ["Cardiology", "Telehealth", "Research"],
            description:
              "Dr. Mitchell is a leading cardiologist with over 15 years of experience in telehealth implementation. She has published extensively on remote patient monitoring and leads one of the nation's largest virtual cardiology programs.",
          },
          {
            image: "/images/headshot.jpg",
            name: "Michael Chen",
            title: "Director of Technology",
            location: "San Francisco, CA",
            tags: ["Healthcare IT", "Innovation"],
            description:
              "Michael oversees our technology initiatives and platform development for enhanced patient care.",
          },
          {
            image: "/images/headshot.jpg",
            name: "Michael Chen",
            title: "Director of Technology",
            location: "San Francisco, CA",
            tags: ["Healthcare IT", "Innovation"],
            description:
              "Michael oversees our technology initiatives and platform development for enhanced patient care.",
          },

          {
            image: "/images/headshot.jpg",
            name: "Michael Chen",
            title: "Director of Technology",
            location: "San Francisco, CA",
            tags: ["Healthcare IT", "Innovation"],
            description:
              "Michael oversees our technology initiatives and platform development for enhanced patient care.",
          },
          {
            image: "/images/headshot.jpg",
            name: "Michael Chen",
            title: "Director of Technology",
            location: "San Francisco, CA",
            tags: ["Healthcare IT", "Innovation"],
            description:
              "Michael oversees our technology initiatives and platform development for enhanced patient care.",
          },
        ]}
      />
      <Footer />
    </>
  );
}
