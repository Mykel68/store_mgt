"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, Search, CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Home,
  ShoppingCart,
  Package,
  Users,
  LineChart,
  Package2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavLink = ({ href, icon: Icon, label, badge, active }) => (
  <Link
    href={href}
    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${
      active
        ? "bg-blue-600 text-white"
        : "text-muted-foreground hover:bg-blue-500 hover:text-white"
    }`}
  >
    <Icon className="h-5 w-5" />
    {label}
    {badge && (
      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
        {badge}
      </Badge>
    )}
  </Link>
);

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid items-start px-2 text-xl font-medium lg:px-4 gap-1  ">
            <Link
              href="/admin"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/admin")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/admin/store_item"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/admin/store_item")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              Store item
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              href="/admin/reg_equipment"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/admin/reg_equipment")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
            >
              <Package className="h-4 w-4" />
              Products{" "}
            </Link>
            <Link
              href="/admin/add_equipment"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hidden ${
                isActive("/admin/add_equipment")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
            >
              <Users className="h-4 w-4 " />
              Add Equipments
            </Link>
            <Link
              href="/admin/projects"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/admin/projects")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
            >
              <Users className="h-4 w-4" />
              Projects
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all  hover:bg-blue-500 hover:text-white"
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
