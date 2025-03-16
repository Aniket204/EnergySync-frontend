"use client"

import React, { useState, useEffect } from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { BatteryFull, BatteryCharging, Loader, List, Book } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import UnitDetails from "../Details/UnitDetails";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import CardList from "./CardList";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ITEMS_PER_PAGE = 9;

interface Unit {
  id: string;
  powerbankName: string;
  companyName: string;
  address: string;
  currentStatus: "charging" | "full";
  verified: boolean;
  connected: "Yes" | "No";
  soc: number;
}

const data: Unit[] = Array.from({ length: 20 }, (_, i) => ({
  id: `PB-${String(i + 1).padStart(3, "0")}`,
  powerbankName: `Powerbank ${i + 1}`,
  companyName: `Company ${i + 1}`,
  address: `Street ${i + 1}, City, Country`,
  currentStatus: Math.random() > 0.5 ? "charging" : "full",
  verified: Math.random() > 0.5,
  connected: Math.random() > 0.5 ? "Yes" : "No",
  soc: Math.floor(Math.random() * 91) + 10,
}));

const UnitList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "cards">("cards");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleUnitClick = (unit: Unit) => {
    setSelectedUnit(unit);
  };

  const handleBack = () => {
    setSelectedUnit(null);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen pb-16">
        <Loader className="h-5 text-gray-600 animate-spin" />
      </div>
    );
  }

  if (selectedUnit) {
    return <UnitDetails selectedUnit={selectedUnit} handleBack={handleBack} />;
  }

  return (
<div className="relative">
  <div className="absolute right-16 -top-14 group-has-[[data-collapsible=icon]]/sidebar-wrapper:-top-12 z-50">
    <ToggleGroup
      type="single"
      value={viewMode}
      onValueChange={setViewMode}
      className="flex border"
    >
      <ToggleGroupItem value="list"><List /></ToggleGroupItem>
      <ToggleGroupItem value="cards"><Book /></ToggleGroupItem>
    </ToggleGroup>
  </div>

  <div className="px-5">
    {viewMode === "list" ? (
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Unit Name</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Connected</TableHead>
            <TableHead className="text-center">SoC</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => (
            <TableRow key={item.id}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <TableCell
                      className="font-medium cursor-pointer hover:underline"
                      onClick={() => handleUnitClick(item)}
                    >
                      {item.powerbankName}
                    </TableCell>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>View {item.powerbankName} details</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TableCell>{item.companyName}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>
                <div className="flex justify-center items-center">
                  {item.currentStatus === "charging" ? (
                    <BatteryCharging className="text-green-500 w-5 h-5" />
                  ) : (
                    <BatteryFull className="text-blue-500 w-5 h-5" />
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge variant={item.connected === "Yes" ? "default" : "secondary"}>
                  {item.connected}
                </Badge>
              </TableCell>
              <TableCell className="text-center">{item.soc}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <CardList data={paginatedData} onCardClick={handleUnitClick} />
    )}

    <Pagination className="mt-5 mb-2">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={currentPage === 1 ? undefined : () => handlePageChange(currentPage - 1)}
            aria-disabled={currentPage === 1}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink href="#" onClick={() => handlePageChange(i + 1)} isActive={i + 1 === currentPage}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={currentPage === totalPages ? undefined : () => handlePageChange(currentPage + 1)}
            aria-disabled={currentPage === totalPages}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </div>
</div>

  );
};

export default UnitList;