"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { authClient, useSession } from "@/lib/auth-client"
import { LogOutIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export function NavUser() {
  const router = useRouter();

  const { data } = useSession()
  const user = data?.user;

  const { isMobile, state } = useSidebar()

  if (!user) {
    return null
  }

  const isCollapsed = state === "collapsed"
  const firstLetter = user.name?.trim().charAt(0).toUpperCase() || "U";
  const userEmail = user.email ?? "";

  const handleLogout = async () => {
    await authClient.signOut();
    router.push('/auth/signin');
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className={cn(
                  "py-1.5 aria-expanded:bg-muted",
                  isCollapsed && "justify-center px-0"
                )}
              />
            }
          >
            <Avatar className={cn("size-9", isCollapsed && "size-8")}>
              <AvatarImage
                src={user.image || undefined}
                alt={user.name}
              />

              <AvatarFallback className="font-medium">
                {firstLetter}
              </AvatarFallback>
            </Avatar>

            <div
              className={cn(
                "grid min-w-0 flex-1 text-left text-sm leading-tight",
                isCollapsed && "hidden"
              )}
            >
              <span className="truncate font-medium">
                {user.name}
              </span>

              <span className="truncate text-xs text-muted-foreground">
                {userEmail}
              </span>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-56"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-3 px-1 py-1.5 text-left text-sm">
                  <Avatar className="size-9">
                    <AvatarImage
                      src={user.image || undefined}
                      alt={user.name}
                    />

                    <AvatarFallback className="font-medium">
                      {firstLetter}
                    </AvatarFallback>
                  </Avatar>

                  <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">
                      {user.name}
                    </span>

                    <span className="truncate text-xs text-muted-foreground">
                      {userEmail}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={handleLogout}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}