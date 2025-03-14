import React from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Pencil, Trash } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type UnitDetailsProps = {
    selectedUnit: { powerbankName: string };
    handleBack: () => void;
};

const UnitDetails = ({ selectedUnit, handleBack }: UnitDetailsProps) => {
    return (
        <div className="flex justify-center items-center h-150 w-full px-2">
            <div className="w-full h-full border">
                <Button
                    variant="secondary"
                    className="absolute cursor-pointer"
                    onClick={handleBack}
                    size="icon"
                >
                    <ArrowLeft />
                </Button>

                <div className="absolute right-0 flex space-x-3">
                    <Button variant="secondary" className='cursor-pointer' size="icon" >
                        <Pencil />
                    </Button>
                    <Button variant="destructive" className='cursor-pointer' size="icon">
                        <Trash />
                    </Button>
                </div>



                Details for {selectedUnit.powerbankName}
                <Tabs defaultValue="dashboard">

                    <TabsList className="transition-all group-has-[[data-collapsible=icon]]/sidebar-wrapper:mt-2">
                        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                        <TabsTrigger value="battery">Battery</TabsTrigger>
                        <TabsTrigger disabled value="chart">Chart</TabsTrigger>
                        <TabsTrigger disabled value="remote">Remote</TabsTrigger>
                    </TabsList>

                    <TabsContent value="dashboard">
                        Dashboard
                    </TabsContent>
                    <TabsContent value="battery">
                        Battery
                    </TabsContent>
                    <TabsContent value="chart">
                        Chart
                    </TabsContent>
                    <TabsContent value="remote">
                        Remote
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default UnitDetails;
