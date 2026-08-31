"use client"

import Link from "next/link"
import { Menu, Search, User } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Explore",
    href: "/explore",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">

       
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background">
            S
          </div>

          <span className="hidden text-lg sm:block">
            BookHand
          </span>
        </Link>

       
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  render={<Link href={item.href} />}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

       
        <div className="flex items-center gap-2">

         
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* Profile */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <User className="h-4 w-4" />
          </Button>


          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}