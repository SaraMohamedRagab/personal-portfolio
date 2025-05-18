import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Github } from "lucide-react";
import { allProjects } from "../lib/data";

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === id);

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-[#E5DEFF] to-purple-200 dark:from-purple-950 dark:via-purple-900 dark:to-purple-950 py-20">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-primary hover:text-purple-700 mb-8">
          ← Back to Projects
        </Link>

        <Card className="overflow-hidden">
          <div className="aspect-video w-full">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-contain" />
          </div>
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-primary mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{project.details}</p>

            <div className="flex flex-wrap gap-4">
              {project.type === "ux" ? (
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer">
                    View on Behance <ArrowRight className="ml-2" />
                  </a>
                </Button>
              ) : (
                <>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" /> View on GitHub
                    </a>
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetails;
