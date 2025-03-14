import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type InfoCardProps = {
    title: string;
    caption: string;
    Icon: LucideIcon;
    bgColor: string;
};

const InfoCard = ({ title, caption, Icon, bgColor }: InfoCardProps) => {
    return (
        <Card className="py-3 hover:bg-muted shadow-sm rounded-sm border bg-card text-card-foreground relative">
            <CardContent>
                <div className="flex flex-row items-center justify-between pb-2 relative">
                    <h3 className="font-bold tracking-tight text-md">{title}</h3>
                    <div className={`absolute top-0 right-0 rounded-full p-3 ${bgColor}`}>
                        <Icon className="h-5 w-5 text-foreground" />
                    </div>
                </div>
                <div className="pt-0">
                    <p className="text-xs font-medium text-muted-foreground">
                        {caption}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default InfoCard;





