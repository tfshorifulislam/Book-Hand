"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { authClient } from "@/lib/auth-client"

export function AvatarDropdown() {
  const user = useSelector((state: RootState) => state?.user?.user)

  const firstLetter = user?.name?.trim().charAt(0).toUpperCase() || "U"
  const handleLogout = async () => {
    await authClient.signOut();
    alert('Logged out successfully');
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full p-1"
          >
            <Avatar className="size-9">
              <AvatarImage
                src={user?.image || undefined}
                alt={user?.name || "User"}
              />

              <AvatarFallback className="font-medium">
                {firstLetter}
              </AvatarFallback>
            </Avatar>
          </Button>
        }
      />

      <DropdownMenuContent
        align="end"
        className="w-48"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={handleLogout}
            variant="destructive">
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}