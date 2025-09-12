import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AlertBanner } from "@/components/alert-banner";
import { HeroFullWidth } from "@/components/hero-full-width";
import { ResourceCards } from "@/components/resource-cards";
import { Stats } from "@/components/stats";
import { HalfImageHalfCopyPromoRight } from "@/components/half-image-half-copy-promo";

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
      <ResourceCards
        title="Professional Recognition That Sets You Apart"
        titleIcon="/images/icon-medal.png"
        description="Unlike training courses, our certifications provide formal recognition of your telehealth expertise. Backed by the American Heart Association's authority, these credentials distinguish you as a qualified telehealth professional in your field."
        resources={[
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
      <Stats
        title="Join the Ranks of AHA-Certified Professionals"
        description="Our certification programs provide the professional recognition that sets you apart"
        stat1={{
          number: "1,200+",
          description: "AHA-Certified Professionals",
        }}
        stat2={{
          number: "95%",
          description: "Career Advancement Rate",
        }}
        stat3={{
          number: "4.8/5",
          description: "Professional Recognition Rating",
        }}
      />
      <HalfImageHalfCopyPromoRight />
      <Footer />
    </>
  );
}
