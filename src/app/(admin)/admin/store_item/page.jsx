"use client";
import React, { useState, useEffect } from "react";
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
const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [manufacturers, setManufacturers] = useState([]);

  const onSubmit = async (data) => {
    try {
      // Send data to the backend using axios
      const response = await axios.post(
        "http://localhost:5000/api/product/register",
        // `${process.env.BACKEND_URL}/api/product/register`,

        data
      );
      console.log(response.data);
      toast.success("Product added successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchManufacturers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/manufacturer"
      );
      setManufacturers(response.data);
    } catch (error) {
      console.error("Error fetching manufacturers:", error);
    }
  };

  useEffect(() => {
    fetchManufacturers();
  }, []);

  return (
    <div>
  
      <Card className="">
        <CardHeader className="px-7">
          <div className="flex justify-between ">          <CardTitle>Store code</CardTitle>
              <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className=" bg-blue-500 text-white hover:bg-blue-600   "
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
              <Label htmlFor="model_name" className="text-left">
                Model name
              </Label>
              <Input
                id="model_name"
                {...register("model_name", { required: true })}
                className="col-span-3"
              />
              {/* Error message if model name is required */}
              {errors.model_name && (
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
              <select
                name="manufacturer"
                {...register("manufacturer", { required: true })}
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
                )}
              >
                <option value="">Select a manufacturer...</option>
                {manufacturers.map((manufacturer) => (
                  <option key={manufacturer.email} value={manufacturer.name}>
                    {manufacturer.name}
                  </option>
                ))}
              </select>
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
              {/* <Select
                {...register("department", { required: true })}
                className="col-span-3"
              >
                <SelectTrigger id="department" aria-label="Select department">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video">
                 
                    Video
                  </SelectItem>
                  <SelectItem value="audio">Audio</SelectItem>
                  <SelectItem value="teleprompting">Teleprompting</SelectItem>
                  <SelectItem value="streaming">Streaming</SelectItem>
                  <SelectItem value="graphics">Graphics</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select> */}
              <select
                name="department"
                {...register("department", { required: true })}
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
                )}
              >
                <option value="">Select a department...</option>
                <option value="video">Video</option>
                <option value="audio">Audio</option>
                <option value="teleprompting">Teleprompting</option>
                <option value="streaming">Streaming</option>
                <option value="graphics">Graphics</option>
                <option value="others">Others</option>
              </select>
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
              <select
                name="product_class"
                {...register("product_class", { required: true })}
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
                )}
              >
                <option value="">Select a product class...</option>
                <option value="camera">Camera</option>
                <option value="microphone">Microphone</option>
                <option value="sweatshirt">Sweatshirt</option>
              </select>
              {/* Error message if product class is required */}
              {errors.product_class && (
                <Label className="text-red-500">
                  Product class is required
                </Label>
              )}
            </div>

            <div>
              <Button type="submit" className="bg-green-500 hover:bg-green-600">
                Create
              </Button>
            </div>
          </form>
        </DialogContent>
            </Dialog>
            </div>

          <CardDescription>Equipment list.</CardDescription>
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
                <option value="store_code">Store code</option>
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

export default page;
