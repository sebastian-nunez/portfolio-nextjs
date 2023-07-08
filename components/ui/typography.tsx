"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>(({ className, ...props }, ref) => (
  <h1
    className={cn(
      "mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground sm:mb-8 lg:text-5xl",
      className
    )}
    ref={ref}
    {...props}
  />
))
H1.displayName = "H1"

const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2">
>(({ className, ...props }, ref) => (
  <h2
    className={cn(
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0",
      className
    )}
    ref={ref}
    {...props}
  />
))
H2.displayName = "H2"

const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h3">
>(({ className, ...props }, ref) => (
  <h3
    className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight text-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
))
H3.displayName = "H3"

const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h4">
>(({ className, ...props }, ref) => (
  <h4
    className={cn(
      "scroll-m-20 text-xl font-semibold tracking-tight text-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
))
H4.displayName = "H4"

const P = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    className={cn("mt-4 leading-7 [&:not(:first-child)]:mb-6", className)}
    ref={ref}
    {...props}
  />
))
P.displayName = "P"

const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.ComponentPropsWithoutRef<"blockquote">
>(({ className, ...props }, ref) => (
  <blockquote
    className={cn("mt-6 border-l-2 pl-6 italic text-foreground", className)}
    ref={ref}
    {...props}
  />
))
Blockquote.displayName = "Blockquote"

const List = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => (
  <ul
    className={cn("my-6 ml-6 list-disc text-foreground [&>li]:mt-2", className)}
    ref={ref}
    {...props}
  />
))
List.displayName = "List"

const InlineCode = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"code">
>(({ className, ...props }, ref) => (
  <code
    className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
))
InlineCode.displayName = "InlineCode"

const Lead = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    className={cn("text-xl text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
))
Lead.displayName = "Lead"

const LargeText = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    className={cn("text-lg font-semibold text-foreground", className)}
    ref={ref}
    {...props}
  />
))
LargeText.displayName = "LargeText"

const SmallText = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "text-sm font-medium leading-none text-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
))
SmallText.displayName = "SmallText"

const MutatedText = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    className={cn("text-sm text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
))
MutatedText.displayName = "MutatedText"

const Anchor = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, ...props }, ref) => (
  <a
    className={cn(
      "font-medium text-primary underline underline-offset-4",
      className
    )}
    ref={ref}
    {...props}
  />
))
Anchor.displayName = "Anchor"

export {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  List,
  InlineCode,
  Lead,
  LargeText,
  SmallText,
  MutatedText,
  Anchor,
}
