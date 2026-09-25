"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
};

export function NavMain({
  groups,
}: {
  groups: { label: string; items: NavItem[] }[];
}) {
  const pathname = usePathname();
  const { state } = useSidebar();

  const isCollapsed = state === "collapsed";

  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  return (
    <>
      {groups.map((group, groupIndex) => (
        <SidebarGroup key={group.label} className="px-2">
          <SidebarGroupLabel
            className={cn(
              "h-auto px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
              groupIndex === 0 ? "pt-3" : "pt-6"
            )}
          >
            {group.label}
          </SidebarGroupLabel>

          <SidebarMenu className="space-y-1">
            {group.items.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.url);

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={active}
                    className={cn(
                      "group h-10 rounded-lg px-3 transition-all duration-200",
                      "hover:bg-muted hover:text-foreground",
                      "data-active:bg-[#FF9100]/10 data-active:text-[#FF9100]",
                      "dark:data-active:bg-[#FF9100]/10 dark:data-active:text-[#EB7D00]",
                      isCollapsed && "mx-auto w-12 justify-center px-0"
                    )}
                  >
                    <Link
                      href={item.url}
                      className={cn(
                        "flex h-full w-full items-center gap-3",
                        isCollapsed && "justify-center"
                      )}
                    >
                      {Icon && (
                        <Icon
                          className={cn(
                            "size-4 shrink-0 stroke-[1.8] transition-colors duration-200",
                            active
                              ? "text-[#FF9100] dark:text-[#EB7D00]"
                              : "text-muted-foreground group-hover:text-foreground"
                          )}
                        />
                      )}

                      {!isCollapsed && (
                        <span
                          className={cn(
                            "truncate text-sm font-medium transition-colors duration-200",
                            active
                              ? "text-foreground"
                              : "text-muted-foreground group-hover:text-foreground"
                          )}
                        >
                          {item.title}
                        </span>
                      )}

                      {!isCollapsed && (
                        <span
                          aria-hidden
                          className={cn(
                            "absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-[#FF9100] transition-opacity duration-200 dark:bg-[#FF9100]",
                            active ? "opacity-100" : "opacity-0"
                          )}
                        />
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}