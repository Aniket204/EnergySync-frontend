import React from 'react';
import InfoCard from './InfoCard';
import BigCard from './BigCard';
import { PlugZap, Thermometer, Battery, UtilityPole, Sun, Activity, Lightbulb, Factory } from "lucide-react";

const BatteryDashboard = ({ data }) => {
    return (
        <div className="grid gap-4 p-4 pt-2 h-full">
            <div className="grid grid-cols-3 gap-4">
                <InfoCard
                    title={`${data.temperature.inverter}°C`}
                    caption="Inverter Temperature"
                    Icon={PlugZap}
                    bgColor="bg-indigo-200 dark:bg-indigo-950"
                />
                <InfoCard
                    title={`${data.temperature.inverter}°C`}
                    caption="Battery Temperature"
                    Icon={Battery}
                    bgColor="bg-green-200 dark:bg-green-950"
                />
                <InfoCard
                    title={`${data.temperature.inverter}°C`}
                    caption="Ambient Temperature"
                    Icon={Thermometer}
                    bgColor="bg-orange-200 dark:bg-orange-950"
                />
            </div>

            <div className="grid grid-cols-3 gap-4 h-80">
                <div className="flex flex-col gap-4 h-full">
                    <BigCard
                        title="Generator"
                        caption={`${data.generator.apparentPowerTotal} Wh`}
                        Icon={Activity}
                        active={data.generator.apparentPowerTotal > 0}
                        level={0}
                    />
                    <BigCard
                        title="Grid"
                        caption={`${data.grid.apparentPowerTotal} Wh`}
                        Icon={UtilityPole}
                        active={data.grid.apparentPowerTotal > 0}
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
                        caption="0wh"
                        Icon={Sun}
                        active={false}
                        level={2}
                    />
                    <BigCard
                        title="Load"
                        caption={`${data.load.apparentPowerTotal} Wh`}
                        Icon={Lightbulb}
                        active={data.load.apparentPowerTotal > 0}
                        level={2}
                    />
                </div>
            </div>
        </div>
    );
};

export default BatteryDashboard;
