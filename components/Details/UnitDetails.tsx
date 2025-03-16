import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Pencil, Trash, RotateCcw, Loader, AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BatteryDashboard from './BatteryDashboard';
import BatteryStats from './BatteryStats';
import { Card, CardContent } from '../ui/card';
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type UnitDetailsProps = {
    selectedUnit: { powerbankName: string };
    handleBack: () => void;
};

const formatTimestamp = (timestamp: string) => {
    return format(new Date(timestamp), "do MMMM yyyy, hh:mm a");
};

const UnitDetails = ({ selectedUnit, handleBack }: UnitDetailsProps) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [deviceStatus, setDeviceStatus] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [refresh, setRefresh] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        const fetchDeviceStatus = async () => {
            try {
                setLoading(true);
                setError(null); 
                const response = await fetch("http://localhost:8080/api/device/status/12345ABCDE");

                if (!response.ok) {
                    throw new Error(`Server responded with status ${response.status}`);
                }

                const data = await response.json();
                setDeviceStatus(data);
            } catch (err) {
                setError("Failed to fetch device status. Please check your connection.");
                console.error("Error fetching device status:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDeviceStatus();
    }, [refresh]);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 500);
        setRefresh(prev => !prev);
        toast("Status reloaded successfully", {
            description: deviceStatus?.serialNo ? `Serial Number: ${deviceStatus.serialNo}` : "No data available",
            action: {
                label: "OK",
                onClick: () => console.log("Undo"),
            },
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen pb-16">
                <Loader className="h-5 text-gray-600 animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen pb-16">
                <AlertCircle className="h-10 w-10 text-red-500" />
                <p className="text-red-500 mt-2">{error}</p>
                <Button onClick={handleRefresh} variant="secondary" className="mt-4">Retry</Button>
            </div>
        );
    }

    return (
        <div className="flex -mt-2 group-has-[[data-collapsible=icon]]/sidebar-wrapper:mt-0 justify-center items-center h-142 px-4 w-full">
            <Card className="w-full h-full p-4 shadow-lg rounded-sm">
                <Button
                    variant="secondary"
                    className="absolute cursor-pointer"
                    onClick={handleBack}
                    size="icon"
                >
                    <ArrowLeft />
                </Button>

                <div className="absolute right-10 flex space-x-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="secondary" className='cursor-pointer' size="icon" onClick={handleRefresh}>
                                    <RotateCcw className={`transition-transform ${isRefreshing ? "animate-spin-reverse" : ""}`} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p>Refresh Status</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="secondary" disabled className='cursor-pointer' size="icon" >
                                    <Pencil />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p>Edit Powerbank</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="destructive" className='cursor-pointer' onClick={() => setOpen(true)} size="icon">
                                    <Trash />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p>Delete Powerbank</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Confirm Deletion</DialogTitle>
                            <DialogDescription>
                                Are you sure you want to delete <strong>{deviceStatus?.name || "this powerbank"}</strong>? This action cannot be undone.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                            <Button variant="destructive" onClick={() => { setOpen(false) }}>Delete</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Tabs defaultValue="dashboard">
                    <TabsList className="ml-[25%] mb-1 w-1/2 transition-all">
                        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                        <TabsTrigger value="battery">Battery</TabsTrigger>
                        <TabsTrigger disabled value="chart">Chart</TabsTrigger>
                        <TabsTrigger disabled value="remote">Remote</TabsTrigger>
                        <TabsTrigger disabled value="notifications">Notifications</TabsTrigger>
                    </TabsList>

                    <Card className="shadow-sm mx-4 p-4 hover:bg-muted rounded-sm">
                        <CardContent className="flex p-0 justify-between w-full">
                            <div><span className="font-light">Name: </span><span className="font-semibold">{deviceStatus?.name || "N/A"}</span>
                                <Badge className="ml-2" variant={deviceStatus?.data?.ess?.powerState === 1 ? "default" : "secondary"}>
                                    {deviceStatus?.data?.ess?.powerState === 1 ? "ON" : "OFF"}
                                </Badge>
                            </div>
                            <div><span className="font-light">Serial Number: </span><span className="font-semibold">{deviceStatus?.serialNo || "N/A"}</span></div>
                            <div><span className="font-light">Time: </span><span className="font-semibold">{deviceStatus?.timestamp ? formatTimestamp(deviceStatus.timestamp) : "N/A"}</span></div>
                        </CardContent>
                    </Card>

                    <TabsContent className="m-0" value="dashboard">
                        <BatteryDashboard data={deviceStatus?.data} />
                    </TabsContent>
                    <TabsContent value="battery">
                        <BatteryStats data={deviceStatus?.data} />
                    </TabsContent>
                </Tabs>
            </Card>
        </div>
    );
};

export default UnitDetails;
