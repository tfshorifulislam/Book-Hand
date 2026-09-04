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
import { authClient } from "@/lib/auth-client"
import { clearUser } from "@/redux/features/user/userSlice"

import { RootState } from "@/redux/store"
import { ChevronsUpDownIcon, LogOutIcon, } from "lucide-react"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"

export function NavUser() {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.user)
  console.log("NavUser user:", user)
  const { isMobile } = useSidebar()

  if (!user) {
    return null
  }

  const firstLetter = user.name?.trim().charAt(0).toUpperCase() || "U";


  const handleLogout = async () => {
    await authClient.signOut();
    dispatch(clearUser())
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
                className="aria-expanded:bg-muted"
              />
            }
          >
            <Avatar className="size-8">
              <AvatarImage
                src={user.image || undefined}
                alt={user.name}
              />

              <AvatarFallback>
                {firstLetter}
              </AvatarFallback>
            </Avatar>

            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">
                {user.name}
              </span>
            </div>

            <ChevronsUpDownIcon className="ml-auto size-4" />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-56"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="size-8">
                    <AvatarImage
                      src={user.image || undefined}
                      alt={user.name}
                    />

                    <AvatarFallback>
                      {firstLetter}
                    </AvatarFallback>
                  </Avatar>

                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">
                      {user.name}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={handleLogout}
              variant="destructive"
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