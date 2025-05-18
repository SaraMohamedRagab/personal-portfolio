import { Clock, Calendar, History, Layers, Layers3, List, ListOrdered, ListTodo, GraduationCap, Briefcase, Book } from "lucide-react";
import { cn } from "../lib/utils";

type IconName = "calendar" | "clock" | "history" | "layers" | "layers-3" | "list" | "list-ordered" | "list-todo" | "book" | "briefcase";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: IconName;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline = ({ events }: TimelineProps) => {
  const getIcon = (icon: IconName) => {
    switch (icon) {
      case "calendar":
        return <Calendar className="h-5 w-5" />;
      case "clock":
        return <Clock className="h-5 w-5" />;
      case "history":
        return <History className="h-5 w-5" />;
      case "layers":
        return <Layers className="h-5 w-5" />;
      case "layers-3":
        return <Layers3 className="h-5 w-5" />;
      case "list":
        return <List className="h-5 w-5" />;
      case "list-ordered":
        return <ListOrdered className="h-5 w-5" />;
      case "list-todo":
        return <ListTodo className="h-5 w-5" />;
      case "book":
        return <Book className="h-5 w-5" />;
      case "briefcase":
        return <Briefcase className="h-5 w-5" />;
      default:
        return <History className="h-5 w-5" />;
    }
  };

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-300 before:via-purple-400 before:to-purple-300 before:opacity-80">
      {events.map((event, index) => (
        <div key={index} className={cn(
          "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group",
          index === events.length - 1 ? "" : "pb-1"
        )}>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow-md md:mx-auto shrink-0 z-10">
            {getIcon(event.icon)}
          </div>
          
          <div className={cn(
            "w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300 group-hover:bg-white",
            index % 2 ? "md:ml-auto" : "md:mr-auto"
          )}>
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-primary text-xl">{event.title}</div>
              <time className="font-semibold text-sm text-purple-400 whitespace-nowrap">{event.year}</time>
            </div>
            <div className="text-purple-700/90">{event.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
