
"use client"

import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

import { PanelLeft } from "lucide-react"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ReactNode
    hoverLogo: React.ReactNode
    plan: string
  }[]
}) {
  const { state } = useSidebar()

  const [activeTeam] = React.useState(teams[0])
  const [isHovered, setIsHovered] = React.useState(false)

  if (!activeTeam) {
    return null
  }

  const isCollapsed = state === "collapsed"

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div
          className={`
            flex w-full items-center
            ${isCollapsed ? "justify-center" : "justify-between"}
          `}
        >

          <div
            className={`
              flex min-w-0 items-center
              ${isCollapsed ? "justify-center" : "gap-2"}
            `}
          >
            {/* Logo */}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="
                flex size-8 shrink-0
                cursor-default
                items-center justify-center
                rounded-lg
                bg-sidebar-primary
                text-sidebar-primary-foreground
                transition-all duration-200
              "
            >
              {/* Normal Logo */}
              {!isHovered ?
                <div className="flex size-5 items-center justify-center">
                  {activeTeam.logo}
                </div>
                :

                <div className="flex size-5 items-center justify-center">
                  {activeTeam.hoverLogo}
                </div>

              }

              
            </div>


            {!isCollapsed && (
              <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {activeTeam.name}
                </span>

                <span className="truncate text-xs text-muted-foreground">
                  {activeTeam.plan}
                </span>
              </div>
            )}
          </div>

          {/* Sidebar Trigger */}
          {!isCollapsed && (
            <SidebarTrigger
              className="
                ml-auto
                size-8
                shrink-0
                rounded-lg
                text-muted-foreground
                transition-colors
                hover:bg-sidebar-accent
                hover:text-foreground
              "
            >
              <PanelLeft className="size-4" />
            </SidebarTrigger>
          )}

          {/* Trigger when Sidebar is collapsed */}
          {isCollapsed && (
            <SidebarTrigger
              className="
                absolute
                inset-0
                size-full
                rounded-lg
                opacity-0
              "
            />
          )}
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

