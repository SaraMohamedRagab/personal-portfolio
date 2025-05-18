import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-4 right-4 flex items-center gap-4">
      <div className="flex gap-2 mr-4">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="text-primary dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
        >
          <Link to="/about">About</Link>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection('contact')}
          className="text-primary dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
        >
          Contact
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Sun className="h-4 w-4 text-primary dark:text-purple-400" />
        <Switch
          checked={theme === "dark"}
          onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="data-[state=checked]:bg-primary"
        />
        <Moon className="h-4 w-4 text-primary dark:text-purple-400" />
      </div>
    </div>
  );
};
