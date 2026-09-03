"use client"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import type { LucideIcon } from "lucide-react"
import { usePathname } from "next/navigation"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <div className="w-full border-b my-4" />

      <SidebarMenu className="space-y-4">
        {items.map((item) => {
          const Icon = item.icon
          const isActive =
            item.url === "/"
              ? pathname === "/"
              : pathname.startsWith(item.url)

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                render={<a href={item.url} />}
                className={`${isActive
                    ? "bg-accent text-accent-foreground font-medium"
                    : ""
                  }`}
              >
                {Icon && <Icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}