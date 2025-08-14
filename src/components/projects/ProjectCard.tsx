import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, DollarSign } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden card-lift bg-card border-border">
      <div className="relative">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
          {project.category}
        </Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
          {project.title}
        </h3>

        {project.location && (
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <MapPin className="ml-1 h-4 w-4" />
            {project.location}
          </div>
        )}

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              الإيراد الشهري
            </span>
            <div className="flex items-center text-success font-semibold">
              <TrendingUp className="ml-1 h-4 w-4" />
              {project.revenue}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              الإيجار الشهري
            </span>
            <div className="flex items-center text-foreground font-semibold">
              <DollarSign className="ml-1 h-4 w-4" />
              {project.rentPrice}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">سعر البيع</span>
            <div className="flex items-center font-semibold">
              {/* <DollarSign className="ml-1 h-4 w-4" /> */}
              {/* {project.price} */}
              <a target="_blank" href="https://wa.me/+2188666458">
                <Button variant="outline">تواصل معنا</Button>
              </a>{" "}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          asChild
          className="w-full btn-lift bg-primary text-primary-foreground hover:bg-primary-hover"
        >
          <Link to={`/projects/${project.id}`}>عرض التفاصيل</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
