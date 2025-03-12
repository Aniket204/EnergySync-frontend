import React from 'react';
import { Chart } from './Chart';
import Tile from './Tile';
import { DollarSign, Fuel, CirclePlay, Wind } from "lucide-react";

const Dashboard = () => {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Tile
                    title="Money saved"
                    amount="$45,231.89"
                    caption="+65% from last month"
                    Icon={DollarSign}
                />
                <Tile
                    title="Fuel saved"
                    amount="20.6 Ltr"
                    caption="+10.1% from last month"
                    Icon={Fuel}
                />
                <Tile
                    title="CO2 saved"
                    amount="305 Kg"
                    caption="+2% from last month"
                    Icon={Wind}
                />

                <Tile
                    title="Total Runtime"
                    amount="420 Hr"
                    caption="-8% from last month"
                    Icon={CirclePlay}
                />
            </div>
            <Chart />
        </div>
    )
}

export default Dashboard