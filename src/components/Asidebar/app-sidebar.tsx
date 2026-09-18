
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
      logo: (
        <FaBookOpenReader className="size-5 text-emerald-700 dark:text-emerald-500" />
      ),
      plan: "Buy & Sell Books",
    },
  ],

  navMain: [
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
        variant="floating"
        {...props}
      >
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>

        <SidebarContent>
          <NavMain items={data.navMain} />
        </SidebarContent>

        <SidebarFooter>
          <NavUser />
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>
    </motion.div>
  );
}