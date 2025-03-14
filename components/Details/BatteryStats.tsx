import React from 'react';
import InfoCard from './InfoCard';
import BigCard from './BigCard';
import { AudioWaveform, Battery, UtilityPole, Sun, Lightbulb, Power, Factory, BatteryMedium, Zap } from "lucide-react";

const BatteryStats = () => {
    return (
        <div className="grid gap-4 p-4 pt-2 h-full">
            <div className="grid grid-cols-4 gap-4">
                <InfoCard
                    title="22V"
                    caption="Voltage"
                    Icon={Zap}
                    bgColor="bg-indigo-200 dark:bg-indigo-950"
                />
                <InfoCard
                    title="180A"
                    caption="Current"
                    Icon={AudioWaveform}
                    bgColor="bg-green-200 dark:bg-green-950"
                />
                <InfoCard
                    title="220W"
                    caption="Power"
                    Icon={Power}
                    bgColor="bg-purple-200 dark:bg-purple-950"
                />
                <InfoCard
                    title="34%"
                    caption="State of charge"
                    Icon={BatteryMedium}
                    bgColor="bg-orange-200 dark:bg-orange-950"
                />
            </div>

            <div className="grid grid-cols-3 gap-4 h-80">
                <div className="flex flex-col gap-4 h-full">
                    <BigCard
                        title="34%"
                        caption="State of charge"
                        Icon={Factory}
                        bgColor="bg-orange-200 dark:bg-orange-950"
                    />
                    <BigCard
                        title="34%"
                        caption="State of charge"
                        Icon={UtilityPole}
                        bgColor="bg-orange-200 dark:bg-orange-950"
                    />
                </div>
                <div className="flex flex-col gap-4 h-full">
                    <BigCard
                        title="34%"
                        caption="State of charge"
                        Icon={Battery}
                        bgColor="bg-orange-200 dark:bg-orange-950"
                    />
                </div>
                <div className="flex flex-col gap-4 h-full">
                    <BigCard
                        title="34%"
                        caption="State of charge"
                        Icon={Sun}
                        bgColor="bg-orange-200 dark:bg-orange-950"
                    />
                    <BigCard
                        title="34%"
                        caption="State of charge"
                        Icon={Lightbulb}
                        bgColor="bg-orange-200 dark:bg-orange-950"
                    />
                </div>
            </div>
        </div>
    );
}

export default BatteryStats