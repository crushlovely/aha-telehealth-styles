import { Header } from "@/components/header";
import { HeroFullWidth } from "@/components/hero-full-width";
import { EventsList } from "@/components/events-list";
import { Footer } from "@/components/footer";

export default function RecognizedOrganizations() {
  return (
    <>
      <Header />
      <HeroFullWidth
        theme="gray"
        image="/images/recognized-organizations-hero.jpg"
      />
      <EventsList />
      <Footer />
    </>
  );
}
