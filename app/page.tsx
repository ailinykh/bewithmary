import SiteScripts from "./site-scripts";
import {
  AboutSection,
  ApproachSection,
  BackToTop,
  BookSection,
  FaqSection,
  Footer,
  Header,
  Hero,
  HelpSection,
  OutcomesSection,
  PricingSection,
  ProcessSection,
} from "./_sections";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ApproachSection />
      <HelpSection />
      <ProcessSection />
      <OutcomesSection />
      <AboutSection />
      <PricingSection />
      <FaqSection />
      <BookSection />
      <Footer />
      <BackToTop />
      <SiteScripts />
    </>
  );
}
