import React from "react";
import { Card } from "../ui/card";
import { LucideIcon } from "lucide-react";

type BigCardProps = {
  title: string;
  caption: string;
  extraCaption?: string; 
  Icon: LucideIcon;
  active: boolean;
  level: number;
};

const BigCard = ({ title, caption, extraCaption, Icon, active, level }: BigCardProps) => {
  const getAnimationDelay = () => `${level * 0.5}s`;

  return (
    <Card className={`relative overflow-hidden shadow-sm rounded-sm p-4 mx-2 flex-1 flex flex-col items-center justify-center ${active ? 'shadow-md' : 'shadow-sm opacity-50'}`}>
      {active && (
        <div
          className="absolute top-0 left-0 opacity-40 w-[300%] h-full bg-gradient-to-r from-cyan-300/30 via-cyan-400/50 to-cyan-300/30 dark:from-cyan-600/30 dark:via-cyan-500/50 dark:to-cyan-600/30 animate-slide"
          style={{
            animationDelay: getAnimationDelay(),
            animationDuration: "3s"
          }}
        />
      )}  

      <div className="relative z-10 flex flex-col items-center">
        <Icon className={`mb-2 text-muted-foreground ${extraCaption ? 'h-20 w-20' : 'h-9 w-9'}`} />

        <h3 className="text-md font-semibold text-muted-foreground">{title}</h3>
        <p className="text-md font-medium text-muted-foreground mt-1">{caption}</p>
        {extraCaption && <p className="text-md font-medium mt-1 text-muted-foreground">{extraCaption}</p>}
      </div>
    </Card>
  );
};

export default BigCard;
