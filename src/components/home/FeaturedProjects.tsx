import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { mockProjects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';

export function FeaturedProjects() {
  // Show first 6 projects as featured
  const featuredProjects = mockProjects.slice(0, 6);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            المشاريع المميزة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف أفضل المشاريع الجاهزة والمربحة المتاحة للبيع والإيجار
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            className="btn-lift bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-4"
          >
            <Link to="/projects" className="flex items-center gap-2">
              عرض جميع المشاريع
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}