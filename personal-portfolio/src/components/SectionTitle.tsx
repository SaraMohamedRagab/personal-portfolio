
import React from "react";
import { cn } from "../lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => (
  <h2
    className={cn(
      "text-2xl md:text-3xl font-bold mb-8 text-center tracking-tight text-primary",
      className
    )}
  >
    {children}
  </h2>
);
