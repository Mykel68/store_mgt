"use client";
// import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Toaster, toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
const Page = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
  
      <Card className="">
        <CardHeader className="px-7">
         <CardTitle>Request</CardTitle>
          <CardDescription>Equipment requested list.</CardDescription>
          <div className="border-b-2  py-2" >
            <div className="flex">

            <div className="flex items-center gap-2   ">
                <Label htmlFor="filter" className=" text-nowrap 
              ">
                Filter By:
              </Label>
              <select
                name="filter"
                {...register("filter", { required: true })}
                className={cn(
                  "flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
                )}
              >
                <option value="store_code">Equipment</option>
                <option value="date">Date</option>
                <option value="product_class">Product class</option>
               
              </select>
       
            </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Equipment</TableHead>
                <TableHead className="hidden sm:table-cell">Location</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Department
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Product class
                </TableHead>
                <TableHead className="text-right">Store code</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-accent">
                <TableCell>
                  <div className="font-medium">Liam Johnson</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">Sale</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    Fulfilled
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  2023-06-23
                </TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Olivia Smith</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    olivia@example.com
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">Refund</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="outline">
                    Declined
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  2023-06-24
                </TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Toaster position="top-center" richColors expand={true} />
    </div>
  );
};

export default Page;
