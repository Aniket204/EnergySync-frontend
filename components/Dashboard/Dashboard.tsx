import React from 'react';
import { Chart } from './Chart';
import Tile from './Tile';
import { DollarSign, Fuel, CirclePlay, Wind } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 9 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const Dashboard = () => {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                <Tile
                    title="Money saved"
                    amount="$45,231.89"
                    caption="+65% from last month"
                    Icon={DollarSign}
                    bgColor="bg-indigo-200 dark:bg-indigo-950"
                />
                <Tile
                    title="Fuel saved"
                    amount="20.6 Ltr"
                    caption="+10.1% from last month"
                    Icon={Fuel}
                    bgColor="bg-green-200 dark:bg-green-950"
                />
                <Tile
                    title="CO2 saved"
                    amount="305 Kg"
                    caption="+2% from last month"
                    Icon={Wind}
                    bgColor="bg-purple-200 dark:bg-purple-950"
                />
                <Tile
                    title="Total Runtime"
                    amount="420 Hr"
                    caption="-8% from last month"
                    Icon={CirclePlay}
                    bgColor="bg-orange-200 dark:bg-orange-950"
                />
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                <div className="md:col-span-2 lg:col-span-3">
                    <Chart />
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                    <ScrollArea className="w-full md:h-[366px] rounded-sm shadow-sm border">
                        <div className="p-4">
                            <h4 className="mb-4 text-sm font-semibold leading-none">Data Activity</h4>
                            {tags.map((tag) => (
                                <>
                                    <div key={tag} className="text-sm">
                                        {tag}
                                    </div>
                                    <Separator className="my-2" />
                                </>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}

export default Dashboard