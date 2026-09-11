"use client"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

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

      <SidebarMenu className="space-y-1">
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
                isActive={isActive}
                render={
                  <Link
                    href={item.url}
                    className={cn(
                      "relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200",
                      "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-0.5 before:rounded-full before:bg-emerald-700 before:opacity-0 before:transition-opacity dark:before:bg-emerald-500",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground before:opacity-100"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                    )}
                  />
                }
              >
                {Icon && (
                  <Icon
                    className={cn(
                      "h-4 w-4 shrink-0 transition-colors",
                      isActive
                        ? "text-emerald-700 dark:text-emerald-500"
                        : "text-sidebar-foreground/60",
                    )}
                  />
                )}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
