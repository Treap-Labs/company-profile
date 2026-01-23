"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  return (
    <NavigationMenu
      className="
            mx-auto
            rounded-xl
            border
            border-border
            bg-background
            p-2
            shadow-sm
          "
    >
      <NavigationMenuList className="gap-2">
        {/* WHY */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/our-why">Why</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* SERVICES */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[420px] gap-3 p-4 md:grid-cols-2">
              <ServiceCard
                href="/services/web"
                title="Web Development"
                description="Modern, fast, and scalable web applications."
              />
              <ServiceCard
                href="/services/mobile"
                title="Mobile Apps"
                description="iOS & Android apps with great UX."
              />
              <ServiceCard
                href="/services/ai"
                title="AI Solutions"
                description="Intelligent systems powered by data."
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* SIMPLE LINKS */}
        <NavLink href="/team">Team</NavLink>
        <NavLink href="/process">Process</NavLink>
        <NavLink href="/work">Work</NavLink>
        <NavLink href="/faq">FAQ</NavLink>
        <NavLink href="/find-us">Find Us</NavLink>

        {/* BADGE */}
        <NavigationMenuItem>
          <a href="/alert">
            <Badge variant="destructive" className="px-4 py-1.5 text-sm">
              Book a call
            </Badge>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

/* -------------------- */
/* Helper Components    */
/* -------------------- */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <a href={href}>{children}</a>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function ServiceCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block rounded-md p-4 transition-all hover:bg-muted focus:bg-muted"
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
