import React from 'react';
import { Card } from '../ui/card';
import { LucideIcon } from "lucide-react";

type BigCardProps = {
    title: string;
    caption: string;
    Icon: LucideIcon;
    bgColor: string;
};

const BigCard = ({ title, caption, Icon, bgColor }: BigCardProps) => {
  return (
    <Card className="shadow-sm rounded-sm p-4 flex-1 flex items-center justify-center">
        <Icon className="h-20 w-20 text-muted-foreground" />
    </Card>
  )
}

export default BigCard