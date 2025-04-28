import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <MetricsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <TechStackSection />
      <NewsletterSection />
    </div>
  );
}
