import { AJAXNewsletter } from "@/components/ajax-newsletter";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Dashboard } from "@/components/dashboard";
export default function DashboardPage() {
  return (
    <>
      <Header />
      <Dashboard />
      <AJAXNewsletter />
      <Footer />
    </>
  );
}
