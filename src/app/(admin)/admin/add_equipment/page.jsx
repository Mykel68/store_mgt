import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <form action="" className="flex flex-col  gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Equipment Details</CardTitle>
            <CardDescription>
              Lipsum dolor sit amet, consectetur adipiscing elit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3 grid-cols-2">
                <div className="">
                  <Label htmlFor="name">Model Name</Label>
                  <Input id="name" type="text" className="w-full" />
                </div>
                <div className="">
                  <Label htmlFor="name">Serial Number</Label>
                  <Input id="name" type="text" className="w-full" />
                </div>
              </div>
              <div className="grid gap-3 grid-cols-2">
                <div className="">
                  <Label htmlFor="name">Manufacturer</Label>
                  <Input id="name" type="text" className="w-full" />
                </div>
                <div className="">
                  <Label htmlFor="name">Vendor</Label>
                  <Input id="name" type="text" className="w-full" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Product Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="grid gap-3">
                <Label htmlFor="category">Department</Label>
                <Select>
                  <SelectTrigger id="category" aria-label="Select department">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clothing">Video</SelectItem>
                    <SelectItem value="electronics">Audio</SelectItem>
                    <SelectItem value="accessories"> Teleprompting</SelectItem>
                    <SelectItem value="clothing">Streaming</SelectItem>
                    <SelectItem value="electronics">Graphics</SelectItem>
                    <SelectItem value="accessories">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="subcategory">Product class </Label>
                <Select>
                  <SelectTrigger
                    id="subcategory"
                    aria-label="Select product class"
                  >
                    <SelectValue placeholder="Select product class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="t-shirts">Camera</SelectItem>
                    <SelectItem value="hoodies"></SelectItem>
                    <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className=" w-full my-10 flex items-end justify-end">
              <Button className="bg-blue-600   w-1/4">Submit</Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default page;
