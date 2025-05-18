import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Contact } from "../components/Contacts";
import { MovingAvatar } from "../components/MovingAvatar";
import { ThemeToggle } from "../components/ThemeToggle";

import eldercare from "../assets/eldercare.jpg";
import healthpulse from "../assets/healthpulse.jpg";
import horoscope from "../assets/horoscope.jpg";
import bloomandroots from "../assets/roots1.png";
import toyshop from "../assets/photo1.png";
import shopping from "../assets/shoppin-prototype.png";
import pediatricapp from "../assets/3.png";
import calculator from "../assets/calculator.jpg";
import saraone from "../assets/me1.jpg";
import saratwo from "../assets/me2.jpg";
import whatsapp from "../assets/whasapp.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const AvatarToggle = () => {
  const [hovered, setHovered] = useState(false);

  return (
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
  );
};

const uxProjects = [
  {
    title: "Eldercare Connect",
    description: "A user-friendly app aimed at bridging health gaps for seniors.",
    imageUrl: eldercare,
    link: "#",
  },
  {
    title: "WhatsApp Message Deletion Redesign",
    description: "Enhanced mobile app feature focusing on accessibility and smooth micro-interactions.",
    imageUrl: whatsapp,
    link: "#",
  },
  {
    title: "HealthPulse",
    description: "Streamlined app design for quick and easy online doctor appointments.",
    imageUrl: healthpulse,
    link: "#",
  },
  {
    title: "Horoscope",
    description: "Clean and intuitive UI design for a horoscope app.",
    imageUrl: horoscope,
    link: "#",
  },
];


const frontendProjects = [
  {
    title: "Bloom and Roots",
    description: "A sleek, modern landing page crafted with React, Tailwind CSS, and smooth animations.",
    imageUrl: bloomandroots,
    link: "#",
  },
    {
    title: "Shopping Website",
    description: "Elegant portfolio template built with shadcn/ui and cutting-edge web technologies.",
    imageUrl: shopping,
    link: "#",
  },
  {
    title: "Toy Shop Dashboard",
    description: "Interactive dashboard featuring real-time charts and fully responsive layouts.",
    imageUrl: toyshop,
    link: "#",
  },

  {
    title: "Pediatric App",
    description: "Real-time collaboration tool developed with React and WebSocket for seamless interaction.",
    imageUrl: pediatricapp,
    link: "#",
  },
  {
    title: "Calculator App",
    description: "Dynamic e-commerce platform with product filtering and intuitive cart management.",
    imageUrl: calculator,
    link: "#",
  },
];


const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-[#EDE7FF] to-purple-200 dark:from-purple-950 dark:via-purple-900 dark:to-purple-950"></div>
      </div>

      <div className="relative z-10">
        <ThemeToggle />
        <header className="container mx-auto flex flex-col items-center justify-center py-20 gap-10">
          <MovingAvatar />
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <AvatarToggle />

            <div className="flex flex-col items-center md:items-start text-center md:text-left animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-3 text-primary drop-shadow-lg">
                Hi, I'm{" "}
                <span className="font-serif italic bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent animate-pulse">
                  Sara
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl mb-2 font-semibold text-primary/90 tracking-wide">
                UX & Frontend Web Developer
              </h2>
              <p className="max-w-xl mt-3 mb-7 text-purple-700/90 leading-relaxed bg-white/70 rounded-xl px-6 py-2 shadow-sm backdrop-blur-sm">
                I design and build digital products that are a joy to use.
                <br />
                Here are some of my favorite UX and frontend web projects.
              </p>
              <div className="w-36 h-2 bg-gradient-to-r from-purple-400 via-violet-300 to-purple-300 rounded-full mt-4 mb-1 animate-pulse" />
            </div>
          </div>
        </header>

        <main className="container mx-auto pb-20">
          <SectionTitle className="text-primary">UX Projects</SectionTitle>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {uxProjects.map((proj, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <ProjectCard {...proj} id={`ux-${i + 1}`} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-12 top-1/2" />
              <CarouselNext className="absolute -right-12 top-1/2" />
            </Carousel>
          </div>

          <SectionTitle className="mt-16 text-primary">Frontend Projects</SectionTitle>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {frontendProjects.map((proj, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <ProjectCard {...proj} id={`frontend-${i + 1}`} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-12 top-1/2" />
              <CarouselNext className="absolute -right-12 top-1/2" />
            </Carousel>
          </div>

          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
