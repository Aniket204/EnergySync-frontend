"use client"

import { type LucideIcon } from "lucide-react";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

type MenuItem = {
  name: string
  url: string
  icon: LucideIcon
  isActive: boolean
}

export function NavPlatform({ menuItems }: { menuItems: MenuItem[] }) {

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a
                href={item.url}
                className={
                  item.isActive
                    ? "bg-muted text-primary font-medium rounded-lg"
                    : "hover:bg-accent hover:text-accent-foreground"
                }
              >
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}