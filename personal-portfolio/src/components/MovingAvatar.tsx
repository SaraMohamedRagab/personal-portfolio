import { Flower2 } from "lucide-react";

export const MovingAvatar = () => {
  return (
    <div className="relative h-16 w-16 mb-4 animate-bounce">
      <div className="absolute inset-0 bg-purple-200 rounded-full blur-lg opacity-50" />
      <div className="relative flex items-center justify-center h-full">
        <Flower2 
          className="w-10 h-10 text-primary animate-pulse"
        />
      </div>
    </div>
  );
};
