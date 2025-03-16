import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { CheckCircle, XCircle, Bolt, BatteryFull, BatteryCharging } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const chartConfig = {
    soc: {
        label: "SOC",
        color: "#FF0000",
    },
} satisfies ChartConfig;

const UnitCard = ({ data, onCardClick }) => {
    const socValue = Math.min(Math.max(data.soc, 0), 100);
    const mappedAngle = 90 - (socValue / 100) * 360;
    const socColor = socValue > 60 ? "#00C853" : "#FF0000";
    const chartData = [{ name: "SOC", soc: socValue, fill: socColor }];
    
    return (
        <Card onClick={() => onCardClick(data)} className='py-0 hover:bg-muted hover:cursor-pointer shadow-sm rounded-sm border bg-card'>
            <CardContent className='p-4'>
                <h3 className='text-md font-semibold'>{data.powerbankName}</h3>
                <div className='flex items-center gap-4 mt-2'>
                    <ChartContainer config={chartConfig} className="w-24 h-24">
                        <RadialBarChart
                            data={chartData}
                            startAngle={90}
                            endAngle={mappedAngle}
                            innerRadius={30}
                            outerRadius={45}
                            width={96}
                            height={96}
                            cx={48}
                            cy={48}
                            barSize={15}
                        >
                            <PolarGrid gridType="circle" radialLines={false} stroke="none" />
                            <RadialBar
                                dataKey="soc"
                                background={{ fill: '#f0f0f0' }}
                                cornerRadius={10}
                                fill="#FF0000"
                                minAngle={5}
                                clockWise={true}
                            />
                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                <Label
                                    content={({ viewBox }) => (
                                        viewBox?.cx && viewBox?.cy && (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                                                <tspan className="fill-foreground text-sm font-bold">{socValue}%</tspan>
                                            </text>
                                        )
                                    )}
                                />
                            </PolarRadiusAxis>
                        </RadialBarChart>
                    </ChartContainer>

                    <div className='flex-1'>
                        <p className='text-sm font-medium'>{data.companyName}</p>
                        <p className='text-xs text-muted-foreground'>{data.address}</p>
                    </div>
                </div>

                <Separator className="mb-3" />

                <div className='flex items-center justify-between text-sm'>
                    <div className='flex items-center gap-1'>

                        {data.currentStatus === "charging" ? (
                            <BatteryCharging className="text-green-500 w-5 h-5" />
                        ) : (
                            <BatteryFull className="text-blue-500 w-5 h-5" />
                        )}
                        <span className='mx-2'>{data.currentStatus.charAt(0).toUpperCase() + data.currentStatus.slice(1)}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Badge variant={data.connected === "Yes" ? "default" : "secondary"}>
                            {data.connected === "Yes" ? "Connected" : "Disconnected"}
                        </Badge>

                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default UnitCard;