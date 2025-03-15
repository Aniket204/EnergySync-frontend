"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Dashboard from "@/components/Dashboard/Dashboard";
import UnitList from "@/components/Dashboard/UnitList";
import { Toaster } from "sonner";

export default function Page() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <Toaster position="bottom-right" />
        <Tabs defaultValue="dashboard">
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4 w-full justify-between">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <TabsList className="transition-all w-50 group-has-[[data-collapsible=icon]]/sidebar-wrapper:mt-2">
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="list">Unit List</TabsTrigger>
                </TabsList>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </header>
          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>
          <TabsContent value="list">
            <UnitList />
          </TabsContent>
        </Tabs>
      </SidebarInset>
    </SidebarProvider>
  );
}