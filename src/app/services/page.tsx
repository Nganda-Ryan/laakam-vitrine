import { ClientSuccess } from "@/components/services/ClientSuccess";
import { ProcessSection } from "@/components/services/ProcessSection";
import { ServiceComparison } from "@/components/services/ServiceComparison";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServicesList } from "@/components/services/ServicesList";
import { TechnologyStack } from "@/components/services/TechnologyStack";


export default function Home() {
  return (
    <div>
      <ServiceHero />
      <ServicesList />
      <ProcessSection />
      <TechnologyStack />
      <ServiceComparison />
      <ClientSuccess />
    </div>
  );
}
