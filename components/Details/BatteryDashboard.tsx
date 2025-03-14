import React from 'react';
import { Card } from '../ui/card';
import InfoCard from './InfoCard';
import { PlugZap, Thermometer, Battery, UtilityPole, Sun, Lightbulb, Factory } from "lucide-react";

const BatteryDashboard = () => {
    return (
        <div className="grid gap-4 p-4 pt-2 h-full">
            <div className="grid grid-cols-3 gap-4">
                <InfoCard
                    title="8°C"
                    caption="Inverter Temperature"
                    Icon={PlugZap}
                    bgColor="bg-indigo-200 dark:bg-indigo-950"
                />
                <InfoCard
                    title="43°C"
                    caption="Battery Temperature"
                    Icon={Battery}
                    bgColor="bg-green-200 dark:bg-green-950"
                />
                <InfoCard
                    title="29°C"
                    caption="Ambient Temperature"
                    Icon={Thermometer}
                    bgColor="bg-orange-200 dark:bg-orange-950"
                />
            </div>

            <div className="grid grid-cols-3 gap-4 h-80">
                <div className="flex flex-col gap-4 h-full">
                    <Card className="shadow-sm rounded-sm p-4 flex-1 flex items-center justify-center">
                        <Factory className="h-20 w-20 text-muted-foreground" />
                    </Card>
                    <Card className="shadow-sm rounded-sm p-4 flex-1 flex items-center justify-center"><UtilityPole className="h-20 w-20 text-muted-foreground" /></Card>
                </div>
                <div className="flex flex-col gap-4 h-full">
                    <Card className="shadow-sm rounded-sm p-4 flex-1 flex items-center justify-center"><Battery className="h-20 w-20 text-muted-foreground" /></Card>
                </div>
                <div className="flex flex-col gap-4 h-full">
                    <Card className="shadow-sm rounded-sm p-4 flex-1 flex items-center justify-center"><Sun className="h-20 w-20 text-muted-foreground" /></Card>
                    <Card className="shadow-sm rounded-sm p-4 flex-1 flex items-center justify-center"><Lightbulb className="h-20 w-20 text-muted-foreground" /></Card>
                </div>
            </div>
        </div>
    );
};

export default BatteryDashboard;
