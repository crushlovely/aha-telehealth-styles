import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AlertBanner } from "@/components/alert-banner";
import { HeroFullWidth } from "@/components/hero-full-width";
import { CourseCards } from "@/components/course-cards";

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
      <CourseCards
        courses={[
          {
            label: "Live Webinar",
            title: "Mental Health Innovation in Digital Platforms",
            date: "January 18, 2025 at 2:00 PM ET",
            person: "Dr. John Doe, MD",
            ctaText: "Register",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            label: "Live Webinar",
            title: "Rural Healthcare Access Through Virtual Care",
            date: "January 18, 2025 at 2:00 PM ET",
            person: "Dr. John Doe, MD",
            ctaText: "Register",
            ctaUrl: "/courses/intro-telehealth",
          },
          // {
          //   label: "Live Webinar",
          //   title: "Mental Health Innovation in Digital Platforms",
          //   duration: "1 hour",
          //   credits: "1 CME",
          //   date: "January 18, 2025 at 2:00 PM ET",
          //   person: "Dr. John Doe, MD",
          //   ctaText: "Register",
          //   ctaUrl: "/courses/intro-telehealth",
          // },
        ]}
      />
      <CourseCards
        title="Latest Content"
        courses={[
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Beginner",
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
            thumbnail: "/images/homepage-hero.jpg",
            label: "Beginner",
            title: "Introduction to Telehealth",
            description:
              "Master remote cardiac monitoring, ECG interpretation via telehealth, and virtual cardiovascular assessments. Learn evidence-based protocols for managing cardiac patients remotely.",
            duration: "4 hours",
            credits: "6 CE",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Beginner",
            title: "Introduction to Telehealth",
            description:
              "Master remote cardiac monitoring, ECG interpretation via telehealth, and virtual cardiovascular assessments. Learn evidence-based protocols for managing cardiac patients remotely.",
            duration: "4 hours",
            credits: "6 CE",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Beginner",
            title: "Introduction to Telehealth",
            description:
              "Master remote cardiac monitoring, ECG interpretation via telehealth, and virtual cardiovascular assessments. Learn evidence-based protocols for managing cardiac patients remotely.",
            duration: "4 hours",
            credits: "6 CE",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Beginner",
            title: "Introduction to Telehealth",
            description:
              "Master remote cardiac monitoring, ECG interpretation via telehealth, and virtual cardiovascular assessments. Learn evidence-based protocols for managing cardiac patients remotely.",
            duration: "4 hours",
            credits: "6 CE",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Beginner",
            title: "Introduction to Telehealth",
            description:
              "Master remote cardiac monitoring, ECG interpretation via telehealth, and virtual cardiovascular assessments. Learn evidence-based protocols for managing cardiac patients remotely.",
            duration: "4 hours",
            credits: "6 CE",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Beginner",
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

      <CourseCards
        courses={[
          {
            thumbnail: "/images/homepage-hero.jpg",
            label: "Beginner",
            title: "Introduction to Telehealth",
            description:
              "Learn the fundamentals of virtual care delivery and patient engagement. Learn the fundamentals of virtual care delivery and patient engagement.",
            duration: "4 hours",
            date: "January 18, 2025",
            person: "Dr. John Doe, MD",
            ctaText: "Learn More",
            ctaUrl: "/courses/intro-telehealth",
          },
        ]}
      />

      <CourseCards
        title="Leading Research & Expert Convening"
        description="Discover groundbreaking research and connect with healthcare's foremost telehealth experts"
        ctaText="View All Courses"
        ctaUrl="/courses"
        courses={[
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
    </>
  );
}
