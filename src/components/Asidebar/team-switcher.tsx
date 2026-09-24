"use client";

import * as React from "react";

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ReactNode;
    hoverLogo?: React.ReactNode;
  }[];
}) {
  const { state } = useSidebar();

  const [activeTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  const isCollapsed = state === "collapsed";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div
          className={cn(
            "flex w-full items-center gap-2 px-1 py-1",
            isCollapsed && "justify-center px-0"
          )}
        >
          <div
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-white shadow-sm dark:bg-emerald-500 dark:text-black",
              isCollapsed && "group cursor-pointer"
            )}
          >
            {isCollapsed ? (
              <>
                <div className="flex size-full items-center justify-center group-hover:hidden">
                  {activeTeam.logo}
                </div>

                <div className="hidden size-full items-center justify-center group-hover:flex">
                  {activeTeam.hoverLogo}
                </div>
              </>
            ) : (
              <div className="flex size-full items-center justify-center">
                {activeTeam.logo}
              </div>
            )}
          </div>

          {!isCollapsed && (
            <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
              <span className="truncate text-[15px] font-bold tracking-tight">
                {activeTeam.name}
              </span>
            </div>
          )}

          {!isCollapsed && (
            <SidebarTrigger className="ml-auto size-8 shrink-0 rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" />
          )}
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}