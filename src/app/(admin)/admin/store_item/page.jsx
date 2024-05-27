"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import axios from "axios";

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

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send data to the backend using axios
      const response = await axios.post("/api/equipment", data);
      console.log(response.data);
      // Handle success (e.g., close the dialog)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="float-end bg-blue-500 text-white hover:bg-blue-600 mt-3 me-3"
          >
            Add Product
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
            <DialogDescription>Create new product.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 py-4">
            {/* Model name input */}
            <div className="grid  items-center gap-2">
              <Label htmlFor="name" className="text-left">
                Model name
              </Label>
              <Input
                id="name"
                {...register("name", { required: true })}
                className="col-span-3"
              />
              {/* Error message if model name is required */}
              {errors.name && (
                <Label className="text-red-500">Model name is required</Label>
              )}
            </div>

            {/* Serial number input */}
            <div className="grid  items-center gap-2">
              <Label htmlFor="serial_number" className="text-left">
                Serial number
              </Label>
              <Input
                id="serial_number"
                {...register("serial_number", { required: true })}
                className="col-span-3"
              />
              {/* Error message if serial number is required */}
              {errors.serial_number && (
                <Label className="text-red-500">
                  Serial number is required
                </Label>
              )}
            </div>

            {/* Manufacturer input */}
            <div className="grid  items-center gap-2">
              <Label htmlFor="manufacturer" className="text-left">
                Manufacturer
              </Label>
              <Input
                id="manufacturer"
                {...register("manufacturer", { required: true })}
                className="col-span-3"
              />
              {/* Error message if manufacturer is required */}
              {errors.manufacturer && (
                <Label className="text-red-500">Manufacturer is required</Label>
              )}
            </div>

            {/* Department select */}
            <div className="grid  items-center gap-2">
              <Label htmlFor="department" className="text-left">
                Department
              </Label>
              <Select
                {...register("department", { required: true })}
                className="col-span-3"
              >
                <SelectTrigger id="department" aria-label="Select department">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="audio">Audio</SelectItem>
                  <SelectItem value="teleprompting">Teleprompting</SelectItem>
                  <SelectItem value="streaming">Streaming</SelectItem>
                  <SelectItem value="graphics">Graphics</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>
              {/* Error message if department is required */}
              {errors.department && (
                <Label className="text-red-500">Department is required</Label>
              )}
            </div>

            {/* Product class select */}
            <div className="grid  items-center gap-2">
              <Label htmlFor="product_class" className="text-left">
                Product class
              </Label>
              <Select
                {...register("product_class", { required: true })}
                className="col-span-3"
              >
                <SelectTrigger
                  id="product_class"
                  aria-label="Select product class"
                >
                  <SelectValue placeholder="Select product class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="camera">Camera</SelectItem>
                  <SelectItem value="microphone">Microphone</SelectItem>
                  <SelectItem value="sweatshirt">Sweatshirt</SelectItem>
                </SelectContent>
              </Select>
              {/* Error message if product class is required */}
              {errors.product_class && (
                <Label className="text-red-500">
                  Product class is required
                </Label>
              )}
            </div>

            {/* Create button */}
            <div>
              <Button type="submit" className="bg-green-500 hover:bg-green-600">
                Create
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Card className="">
        <CardHeader className="px-7">
          <CardTitle>Store code</CardTitle>
          <CardDescription>Equipment list.</CardDescription>
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
    </div>
  );
};

export default page;
