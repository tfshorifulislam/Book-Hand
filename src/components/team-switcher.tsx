"use client"

import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

export function TeamSwitcher({ teams, }: {
  teams: {
    name: string
    logo: React.ReactNode
    hoverLogo?: React.ReactNode
    plan: string
  }[]
}) {
  const { state } = useSidebar()

  const [activeTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  const isCollapsed = state === "collapsed"

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div
          className={`flex w-full items-center
            ${isCollapsed ? "justify-center" : "justify-between"}`}
        >

          <div
            className={`flex min-w-0 items-center
              ${isCollapsed ? "justify-center" : "gap-2"}`}>

            <div
              className={`group flex size-8 shrink-0 items-center justify-center rounded-lg
                ${isCollapsed ? "cursor-pointer" : ""}`}
            >
              {isCollapsed ? (
                <>

                  <div className="flex size-5 items-center justify-center group-hover:hidden">
                    {activeTeam.logo}
                  </div>


                  <div className="hidden size-5 items-center justify-center group-hover:flex">
                    {activeTeam.hoverLogo}
                  </div>
                </>
              ) : (

                <div className="flex size-5 items-center justify-center">
                  {activeTeam.logo}
                </div>
              )}
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

         
          {!isCollapsed && (
            <SidebarTrigger
              className="ml-auto size-8 shrink-0 rounded-lg text-muted-foreground transition-colo hover:bg-sidebar-accent hover:text-foreground" />
          )}
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}