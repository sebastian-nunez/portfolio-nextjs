"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"

import { Separator } from "./ui/separator"

interface MainNavProps {
  items?: NavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const path = usePathname()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="mb-2 h-6 w-6 fill-inherit hidden md:inline" />
        <span className="font-bold hidden lg:inline">{siteConfig.name}</span>
      </Link>

      {/* Mobile Nav */}
      <button
        className="flex items-center space-x-2 -ml-7 md:hidden"
        onClick={() => setShowMobileMenu((current) => !current)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="sr-only">Menu</span>
      </button>

      {showMobileMenu && items && (
        <MobileNav items={items} setShowMobileMenu={setShowMobileMenu}>
          {children}
        </MobileNav>
      )}


      {items?.length ? (
        <nav className="hidden md:flex md:gap-6 dark:text-grey-200">
          <Separator orientation="vertical" className="dark:bg-white"/>

          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm dark:text-white",
                    item.href.startsWith(`/${path}`)
                      ? "text-foreground dark:text-white"
                      : "text-foreground/60 dark:text-white/60",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
