import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"

import { Button, buttonVariants } from "./ui/button"

interface MobileNavProps {
  items: NavItem[]
  children?: React.ReactNode
  setShowMobileMenu: Function
}

export function MobileNav({
  items,
  children,
  setShowMobileMenu,
}: MobileNavProps) {
  useLockBody()

  return (
    <div
      className={cn(
        "fixed inset-0 top-14 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-lg animate-in slide-in-from-bottom-80 duration-250 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-lg">
        <nav className="grid gap-4 grid-flow-row auto-rows-max">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "text-center rounded-md text-xl font-bold w-full py-6 drop-shadow-sm dark:bg-secondary",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
              onClick={() => setShowMobileMenu(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {children}
      </div>
    </div>
  )
}
