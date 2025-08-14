import { HeroSection } from '@/components/home/HeroSection';
import { AdvantagesSection } from '@/components/home/AdvantagesSection';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AdvantagesSection />
      <FeaturedProjects />
    </div>
  );
};

export default Index;
