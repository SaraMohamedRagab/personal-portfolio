import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  id?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, id = "1" }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow group h-full flex flex-col min-w-[300px] max-w-[400px]">
      <div className="aspect-video rounded-t-lg overflow-hidden ">
        <img src={imageUrl} alt={title} className="rounded-t-lg w-full h-full object-cover object-top block transition-transform group-hover:scale-105 duration-300"
/>
      </div>
      <CardContent className="flex-1 py-4 px-4 flex flex-col">
        <div className="font-semibold text-lg mb-1">{title}</div>
        <div className="text-muted-foreground text-sm mb-3">{description}</div>
        <Link
          to={`/project/${id}`}
          className="mt-auto inline-flex items-center gap-1 text-primary hover:underline hover:text-primary/80 font-medium transition-colors"
        >
          View Project <ArrowRight className="w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
};
