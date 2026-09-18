
"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}) {
  const pathname = usePathname();
  const { state } = useSidebar();

  const isCollapsed = state === "collapsed";

  return (
    <SidebarGroup className="px-2">
      {/* Divider */}
      <div
        className={cn(
          "h-px bg-sidebar-border/40",
          isCollapsed
            ? "mx-auto mb-5 mt-4 w-7"
            : "mb-5 mt-4 w-full"
        )}
      />

      <SidebarMenu className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.url === "/"
              ? pathname === "/"
              : pathname.startsWith(item.url);

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={isActive}
                className={cn(
                  "group",
                  "h-12 rounded-xl",
                  "transition-all duration-200",

                  isCollapsed
                    ? "mx-auto w-12 justify-center px-0"
                    : "w-full px-3",

                  "hover:bg-sidebar-accent/60",

                  isActive && "bg-sidebar-accent"
                )}
              >
                <Link
                  href={item.url}
                  className={cn(
                    "flex h-full items-center",

                    isCollapsed
                      ? "w-full justify-center"
                      : "w-full gap-3.5"
                  )}
                >
                  {Icon && (
                    <Icon
                      className={cn(
                        "shrink-0",
                        "size-6",
                        "stroke-[1.8]",
                        "transition-all duration-200",

                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground",

                        isActive && "scale-[1.02]"
                      )}
                    />
                  )}

                  {!isCollapsed && (
                    <span
                      className={cn(
                        "truncate text-[15px]",
                        "tracking-[-0.01em]",

                        isActive
                          ? "font-semibold text-foreground"
                          : "font-medium text-muted-foreground"
                      )}
                    >
                      {item.title}
                    </span>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}