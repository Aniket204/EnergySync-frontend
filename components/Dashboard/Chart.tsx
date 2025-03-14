"use client"

import { Line, LineChart, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { month: "Jan", BSS: 400, grid: 240 },
  { month: "Feb", BSS: 300, grid: 139 },
  { month: "Mar", BSS: 200, grid: 980 },
  { month: "Apr", BSS: 278, grid: 390 },
  { month: "May", BSS: 189, grid: 480 },
  { month: "Jun", BSS: 239, grid: 380 },
  { month: "Jul", BSS: 349, grid: 430 },
  { month: "Aug", BSS: 310, grid: 410 },
  { month: "Sep", BSS: 270, grid: 390 },
  { month: "Oct", BSS: 320, grid: 420 },
  { month: "Nov", BSS: 280, grid: 400 },
  { month: "Dec", BSS: 300, grid: 440 },
]

const chartConfig = {
  grid: {
    label: "Grid(kWh)",
    color: "var(--primary)",
  },
  BSS: {
    label: "BSS(kWh)",
    color: "var(--muted-foreground)",
  },
} satisfies ChartConfig

export function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Power Consumption</CardTitle>
        <CardDescription>
          Your historic energy consumption for 2023-2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full md:h-[250px]">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <XAxis
              dataKey="month"
              className="recharts-cartesian-axis-ticks"
            />
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="BSS"
              stroke="var(--muted-foreground)"
              strokeOpacity={0.5}
              activeDot={{
                r: 6,
                fill: "var(--muted-foreground)",
              }}
            />
            <Line
              type="monotone"
              dataKey="grid"
              strokeWidth={2}
              stroke="var(--primary)"
              activeDot={{
                r: 8,
                style: { fill: "var(--primary)" },
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
