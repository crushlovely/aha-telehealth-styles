import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AlertBanner } from "@/components/alert-banner";
import { HeroFullWidth } from "@/components/hero-full-width";
import { ResourceCards } from "@/components/resource-cards";

export default function InsightsPage() {
  return (
    <>
      <Header />
      <AlertBanner
        icon="/images/icon-buildings.png"
        label="Training for Organizations"
        text="Bulk pricing and custom solutions for healthcare institutions"
        ctaUrl="#"
        ctaText="Learn More"
        theme="red"
      />
      <HeroFullWidth
        theme="black"
        image="/images/hero-courses.jpg"
        title="Latest from the field"
        body="Stay current with cutting-edge research, expert insights, webinars, and convening opportunities that advance telehealth science and clinical practice."
      />
      <ResourceCards
        ctaText="View All Webinars"
        ctaUrl="#"
        resources={[
          {
            accent: true,
            label: "Live Webinar",
            title: "The Next Generation of Telehealth",
            date: "January 18, 2025 at 2:00 PM ET",
            person: "Dr. John Doe, MD",
            ctaText: "Register",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            accent: true,
            label: "Live Webinar",
            title: "Search 2026",

            date: "January 18, 2025 at 2:00 PM ET",
            person: "Dr. John Doe, MD",
            ctaText: "Register",
            ctaUrl: "/courses/intro-telehealth",
          },
        ]}
      />
      <ResourceCards
        title="Latest Content"
        filters={["All", "Policy", "Articles", "Webinars"]}
        ctaText="Load More"
        ctaUrl="#"
        resources={[
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Policy",
            title: "The Future of Remote Patient Monitoring in Cardiology",
            description:
              "New research reveals how continuous monitoring technologies are transforming cardiovascular care delivery and improving patient outcomes in rural communities.",
            duration: "4 hours",
            date: "January 18, 2025",
            person: "Dr. John Doe, MD",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
            featured: true,
          },
          {
            // thumbnail: "/images/homepage-hero.jpg",
            label: "Policy",
            title: "Introduction to Telehealth",
            description:
              "Master remote cardiac monitoring, ECG interpretation via telehealth, and virtual cardiovascular assessments. Learn evidence-based protocols for managing cardiac patients remotely.",
            duration: "4 hours",
            credits: "6 CE",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            // thumbnail: "/images/homepage-hero.jpg",
            label: "Policy",
            title: "Introduction to Telehealth",
            description:
              "Master remote cardiac monitoring, ECG interpretation via telehealth, and virtual cardiovascular assessments. Learn evidence-based protocols for managing cardiac patients remotely.",
            duration: "4 hours",
            credits: "6 CE",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            // thumbnail: "/images/homepage-hero.jpg",
            label: "Policy",
            title: "Introduction to Telehealth",
            description:
              "Master remote cardiac monitoring, ECG interpretation via telehealth, and virtual cardiovascular assessments. Learn evidence-based protocols for managing cardiac patients remotely.",
            duration: "4 hours",
            credits: "6 CE",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            // thumbnail: "/images/homepage-hero.jpg",
            label: "Policy",
            title: "Introduction to Telehealth",
            description:
              "Master remote cardiac monitoring, ECG interpretation via telehealth, and virtual cardiovascular assessments. Learn evidence-based protocols for managing cardiac patients remotely.",
            duration: "4 hours",
            credits: "6 CE",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            // thumbnail: "/images/homepage-hero.jpg",
            label: "Policy",
            title: "Introduction to Telehealth",
            description:
              "Master remote cardiac monitoring, ECG interpretation via telehealth, and virtual cardiovascular assessments. Learn evidence-based protocols for managing cardiac patients remotely.",
            duration: "4 hours",
            credits: "6 CE",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            // thumbnail: "/images/homepage-hero.jpg",
            label: "Policy",
            title: "Introduction to Telehealth",
            description:
              "Master remote cardiac monitoring, ECG interpretation via telehealth, and virtual cardiovascular assessments. Learn evidence-based protocols for managing cardiac patients remotely.",
            duration: "4 hours",
            credits: "6 CE",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
        ]}
      />

      <Footer />
    </>
  );
}
