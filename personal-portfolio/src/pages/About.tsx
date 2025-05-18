import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { SectionTitle } from "../components/SectionTitle";
import { Card, CardContent } from "../components/ui/card";
import { Timeline } from "../components/TimeLine";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Home, MessageSquare } from "lucide-react";
import { Contact } from "../components/Contacts";
import saraone from "../assets/me1.jpg";
import saratwo from "../assets/me2.jpg";
import { useState } from "react";

const About = () => {
  const [hovered, setHovered] = useState(false);

  const timelineEvents = [
    {
      year: "",
      title: "Master's Degree",
      description: "Pursuing a Master’s in Computer Science focused on HCI, enhancing skills in user-centered design.",
      icon: "book" as const,
    },
    {
      year: "",
      title: "Freelance Software Developer",
      description: "Freelance projects in frontend, UI/UX design, and branding. Meta Frontend Developer certified.",
      icon: "briefcase" as const,
    },
    {
      year: "",
      title: "Web Developer / Designer – Amiral Management Corporation",
      description: "Started as a .NET web developer and designer creating websites and visual assets.",
      icon: "briefcase" as const,
    },
    {
      year: "",
      title: "Bachelor's Degree",
      description: "Graduated in Electronics and Communication Engineering with an excellent GPA of 3.42.",
      icon: "book" as const,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-[#EDE7FF] to-purple-200 dark:from-purple-950 dark:via-purple-900 dark:to-purple-950"></div>
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10 py-16">
        {/* Navigation Bar */}
        <div className="fixed top-4 left-4 flex items-center gap-4 z-10">
          <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm px-3 py-2">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="flex items-center gap-2 text-primary hover:text-purple-700"
            >
              <Link to="/">
                <Home size={16} />
                <span>Home</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToContact}
              className="flex items-center gap-2 text-primary hover:text-purple-700"
            >
              <MessageSquare size={16} />
              <span>Contact</span>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle className="text-gray-800 mb-12 font-bold">About Me</SectionTitle>

          <div className="flex flex-col gap-8 items-center">
            <div
              className="relative flex-shrink-0 flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              title="Hover to change image"
            >
              <div className="absolute -inset-2 rounded-full bg-purple-300/30 blur-2xl animate-pulse" />
              <Avatar className="h-40 w-40 ring-4 ring-primary shadow-xl z-10 animate-[scale-in_0.6s_ease-out]">
                <AvatarImage
                  src={hovered ? saratwo : saraone}
                  alt="Your Photo"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl">JS</AvatarFallback>
              </Avatar>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm shadow-sm w-full">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">My Story</h2>
                <p className="text-gray-600 mb-6">
                  I'm a passionate frontend and UI developer focused on crafting clean,
                  user-friendly digital experiences. Currently pursuing my Master’s in
                  Computer Science with a focus on HCI, I blend design and development to
                  build responsive, accessible, and polished interfaces users enjoy.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["React", "TypeScript", "JavaScript", "UI Design", "UX Research"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-100 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-4">My Journey</h3>
                <Timeline events={timelineEvents} />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 relative z-10">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default About;
