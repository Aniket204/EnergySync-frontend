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
                        title="Generator"
                        caption="476.58wh"
                        Icon={Factory}
                        active={true}
                        level={0}
                    />
                    <BigCard
                        title="Grid"
                        caption="0wh"
                        Icon={UtilityPole}
                        active={false}
                        level={0}
                    />
                </div>
                <div className="flex flex-col gap-4 h-full">
                    <BigCard
                        title="Battery"
                        caption="0% SOC"
                        Icon={Battery}
                        active={true}
                        level={1}
                    />
                </div>
                <div className="flex flex-col gap-4 h-full">
                    <BigCard
                        title="Solar"
                        caption="0wh"
                        Icon={Sun}
                        active={false}
                        level={2}
                    />
                    <BigCard
                        title="Load"
                        caption="476.58wh"
                        Icon={Lightbulb}
                        active={true}
                        level={2}
                    />
                </div>
            </div>
        </div>
    );
}

export default BatteryStats