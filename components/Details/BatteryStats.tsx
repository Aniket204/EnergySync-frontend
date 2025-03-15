import React from 'react';
import InfoCard from './InfoCard';
import BigCard from './BigCard';
import { AudioWaveform, Battery, UtilityPole, Sun, Lightbulb, Power, Activity, BatteryMedium, Zap } from "lucide-react";

const BatteryStats = ({ data }) => {
    return (
        <div className="grid gap-4 p-4 pt-2 h-full">
            <div className="grid grid-cols-4 gap-4">
                <InfoCard
                    title={`${data.battery.voltage}V`}
                    caption="Voltage"
                    Icon={Zap}
                    bgColor="bg-indigo-200 dark:bg-indigo-950"
                />
                <InfoCard
                    title={`${data.battery.current}A`}
                    caption="Current"
                    Icon={AudioWaveform}
                    bgColor="bg-green-200 dark:bg-green-950"
                />
                <InfoCard
                    title={`${data.battery.voltage * data.battery.current}W`}
                    caption="Power"
                    Icon={Power}
                    bgColor="bg-purple-200 dark:bg-purple-950"
                />
                <InfoCard
                    title={`${data.battery.soc}%`}
                    caption="State of charge"
                    Icon={BatteryMedium}
                    bgColor="bg-orange-200 dark:bg-orange-950"
                />
            </div>

            <div className="grid grid-cols-3 gap-4 h-80">
                <div className="flex flex-col gap-4 h-full">
                    <BigCard
                        title="Generator"
                        caption={`${data.generator.activePowerTotal} Wh`}
                        Icon={Activity}
                        active={data.generator.activePowerTotal > 0}
                        level={0}
                    />
                    <BigCard
                        title="Grid"
                        caption={`${data.grid.activePowerTotal} Wh`}
                        Icon={UtilityPole}
                        active={data.grid.activePowerTotal > 0}
                        level={0}
                    />
                </div>
                <div className="flex flex-col gap-4 h-full">
                    <BigCard
                        title="Battery"
                        caption={`${data.battery.soc}% SOC`}
                        extraCaption={`${data.battery.soh}% SOH`}
                        Icon={Battery}
                        active={true}
                        level={1}
                    />
                </div>
                <div className="flex flex-col gap-4 h-full">
                    <BigCard
                        title="Solar"
                        caption="0 wh"
                        Icon={Sun}
                        active={false}
                        level={2}
                    />
                    <BigCard
                        title="Load"
                        caption={`${data.load.activePowerTotal} Wh`}
                        Icon={Lightbulb}
                        active={data.load.activePowerTotal > 0}
                        level={2}
                    />
                </div>
            </div>
        </div>
    );
}

export default BatteryStats