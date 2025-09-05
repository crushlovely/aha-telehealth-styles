import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AlertBanner } from "@/components/alert-banner";
import { HeroFullWidth } from "@/components/hero-full-width";
import { HalfImageHalfCopyPromoRight } from "@/components/half-image-half-copy-promo";
import { PHDRichText } from "@/components/phd-rich-text";
import { CourseCards } from "@/components/course-cards";

export default function CoursesPage() {
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
        overline="Center for Telehealth"
        title="Telehealth Training Courses"
        body="Evidence-based education that transforms healthcare practice and drives better patient outcomes"
      />
      <PHDRichText />
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

      <HalfImageHalfCopyPromoRight />
      <HeroFullWidth
        theme="white"
        title="Questions? We're Here to Help"
        body="Our team is ready to discuss your organization's specific training needs and help you create a customized learning solution."
        button1="Email: sales@heart.org"
      />
      <Footer />
    </>
  );
}
