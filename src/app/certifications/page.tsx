import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AlertBanner } from "@/components/alert-banner";
import { HeroFullWidth } from "@/components/hero-full-width";
import { CourseCards } from "@/components/course-cards";

export default function CertificationsPage() {
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
        title="AHA Telehealth Certifications"
        body="Earn professional recognition with American Heart Association telehealth certifications that validate your expertise and distinguish you in the field of virtual healthcare."
      />
      <CourseCards
        title="Professional Recognition That Sets You Apart"
        titleIcon="/images/icon-medal.png"
        description="Unlike training courses, our certifications provide formal recognition of your telehealth expertise. Backed by the American Heart Association's authority, these credentials distinguish you as a qualified telehealth professional in your field."
        courses={[
          {
            title: "Digital Health in Cardiac Care",
            description:
              "For professionals who use digital heath technology to help patients manage and prevent heart conditions.",
            duration: "3-hour exam",
            price: "$575",
            credits: "15 CE required",
            secondaryTitle: "What You'll Master:",
            secondaryDescription:
              "<ul><li>Advanced cardiac telehealth protocols</li><li>Remote ECG interpretation and monitoring</li><li>Digital cardiovascular risk assessment</li><li>Patient engagement in cardiac care</li><li>Technology integration for heart health</li></ul>",
            secondaryCtaText: "Learn More",
            secondaryCtaUrl: "#",
            ctaText: "FAQ",
            ctaUrl: "#",
            cta2Text: "Candidate Handbook",
            cta2Url: "#",
          },
          {
            title: "Digital Health in Cardiac Care",
            description:
              "For professionals who use digital heath technology to help patients manage and prevent heart conditions.",
            duration: "3-hour exam",
            price: "$575",
            credits: "15 CE required",
            secondaryTitle: "What You'll Master:",
            secondaryDescription:
              "<ul><li>Advanced cardiac telehealth protocols</li><li>Remote ECG interpretation and monitoring</li><li>Digital cardiovascular risk assessment</li><li>Patient engagement in cardiac care</li><li>Technology integration for heart health</li></ul>",
            secondaryCtaText: "Learn More",
            secondaryCtaUrl: "#",
            ctaText: "FAQ",
            ctaUrl: "#",
            cta2Text: "Candidate Handbook",
            cta2Url: "#",
          },
          {
            title: "Digital Health in Cardiac Care",
            description:
              "For professionals who use digital heath technology to help patients manage and prevent heart conditions.",
            duration: "3-hour exam",
            price: "$575",
            credits: "15 CE required",
            secondaryTitle: "What You'll Master:",
            secondaryDescription:
              "<ul><li>Advanced cardiac telehealth protocols</li><li>Remote ECG interpretation and monitoring</li><li>Digital cardiovascular risk assessment</li><li>Patient engagement in cardiac care</li><li>Technology integration for heart health</li></ul>",
            secondaryCtaText: "Learn More",
            secondaryCtaUrl: "#",
            ctaText: "FAQ",
            ctaUrl: "#",
            cta2Text: "Candidate Handbook",
            cta2Url: "#",
          },
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
