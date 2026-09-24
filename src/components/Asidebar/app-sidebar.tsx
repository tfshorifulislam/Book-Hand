"use client";

import * as React from "react";

import { NavMain } from "@/components/Asidebar/nav-main";
import { NavUser } from "@/components/Asidebar/nav-user";
import { TeamSwitcher } from "@/components/Asidebar/team-switcher";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Heart,
  PlusCircle,
  Settings,
  UserRound,
  BookOpen,
  Home,
} from "lucide-react";

import { FaBookOpenReader } from "react-icons/fa6";
import { motion } from "motion/react";

const data = {
  teams: [
    {
      name: "BookHand",
      logo: <FaBookOpenReader className="size-4.5 stroke-[2.2]" />,
      hoverLogo: <SidebarTrigger />,
    },
  ],

  navGroups: [
    {
      label: "Main",
      items: [
        {
          title: "Home",
          url: "/",
          icon: Home,
        },
        {
          title: "Browse Books",
          url: "/books",
          icon: BookOpen,
        },
        {
          title: "Wishlist",
          url: "/wishlist",
          icon: Heart,
        },
        {
          title: "Sell a Book",
          url: "/sell-book",
          icon: PlusCircle,
        },
      ],
    },
    {
      label: "Account",
      items: [
        {
          title: "My Profile",
          url: "/profile",
          icon: UserRound,
        },
        {
          title: "Settings",
          url: "/settings",
          icon: Settings,
        },
      ],
    },
  ],
};

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Sidebar
        collapsible="icon"
        {...props}
      >
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>

        <SidebarContent>
          <NavMain groups={data.navGroups} />
        </SidebarContent>

        <SidebarFooter className="border-t p-2 pt-3">
          <NavUser />
        </SidebarFooter>

        <SidebarRail />
        
      </Sidebar>
    </motion.div>
  );
}