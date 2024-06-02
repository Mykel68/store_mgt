"use client";
import Logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Bell,
  Home,
  ShoppingCart,
  Package,
  Users,
  LineChart,
  Package2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div className="hidden border-r bg-muted/40 md:block  max-h-screen  ">
      <div className="flex h-full flex-col gap-2   ">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 ">
          <Link href="/admin" className="flex items-center gap-2 font-semibold">
            <Image src={Logo} className="h-6 w-6" />
            <span className="">DCLM </span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 ">
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
              href="/admin/request"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/admin/request")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
            >
              <Users className="h-4 w-4" />
              Request
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all  hover:bg-blue-500 hover:text-white"
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Register Admin</CardTitle>
              <CardDescription>
                Add admins to give them access to the site .
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0 ">
              <Link
                href="/admin/register"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all  bg-blue-600 text-white hover:bg-blue-500 hover:text-white`}
              >
                Register
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
