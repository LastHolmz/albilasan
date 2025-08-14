import { useState } from 'react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { mockProjects, projectCategories } from '@/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('جميع الفئات');
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'جميع الفئات') {
      setFilteredProjects(mockProjects);
    } else {
      setFilteredProjects(mockProjects.filter(project => project.category === category));
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            جميع المشاريع
          </h1>
          <p className="text-xl text-muted-foreground">
            اكتشف أفضل الفرص الاستثمارية المتاحة
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">فلترة حسب الفئة:</span>
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {projectCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">
                  عدد المشاريع:
                </span>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {filteredProjects.length}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-xl text-muted-foreground">
                لا توجد مشاريع متاحة في هذه الفئة حالياً
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Projects;