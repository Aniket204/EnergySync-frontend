"use client"

import * as React from "react"
import { AudioWaveform, Command, GalleryVerticalEnd, LayoutDashboard, CircleUser, List } from "lucide-react";
import { NavPlatform } from "@/components/nav-platform"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";

const data = {
  user: {
    name: "satyam",
    email: "satyam@powr2.com",
    icon: CircleUser,
  },
  teams: [
    {
      name: "POWR2",
      logo: Command,
      plan: "EnergySync",
    },
  ],
  menuItems: [
    {
      name: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      name: "Unit List",
      url: "#",
      icon: List,
      isActive: false,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavPlatform menuItems={data.menuItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}