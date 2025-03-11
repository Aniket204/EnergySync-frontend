import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { CheckCircle, XCircle, BatteryFull, BatteryCharging } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Loader } from "lucide-react";

const ITEMS_PER_PAGE = 12;

const generateRandomSoC = () => Math.floor(Math.random() * 91) + 10;
const generateRandomConnected = () => (Math.random() > 0.5 ? "Yes" : "No");

const data = Array.from({ length: 50 }, (_, i) => ({
  id: `PB-${String(i + 1).padStart(3, "0")}`,
  powerbankName: `Powerbank ${i + 1}`,
  companyName: `Company ${i + 1}`,
  address: `Street ${i + 1}, City, Country`,
  currentStatus: Math.random() > 0.5 ? "charging" : "full",
  verified: Math.random() > 0.5,
  connected: generateRandomConnected(),
  soc: generateRandomSoC(),
}));

const PowerbankTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
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

  return (
    <div className="px-5">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Powerbank Name</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Verified</TableHead>
            <TableHead className="text-center">Connected</TableHead>
            <TableHead className="text-center">SoC</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.powerbankName}</TableCell>
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
                <div className="flex justify-center items-center">
                  {item.verified ? (
                    <CheckCircle className="text-green-500 w-5 h-5" />
                  ) : (
                    <XCircle className="text-red-500 w-5 h-5" />
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

      <Pagination className="mt-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(i + 1)}
                isActive={i + 1 === currentPage}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PowerbankTable;
