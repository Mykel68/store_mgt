import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function page() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Register Equipment</CardTitle>
        <CardDescription>
          Register equipment based on their physical properties.
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                className="float-end bg-blue-500 text-white hover:bg-blue-600"
              >
                Add Manufacturer
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Manufacturer</DialogTitle>
                <DialogDescription>Create new manufacturers.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-left">
                    Name
                  </Label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-left">
                    Email
                  </Label>
                  <Input id="email" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone_number" className="text-left">
                    Phone number
                  </Label>
                  <Input id="phone_number" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="address" className="text-left">
                    Address
                  </Label>
                  <Input id="address" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="country" className="text-left">
                    Country
                  </Label>
                  <Input id="country" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600"
                >
                  Add
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Manufacturer</Label>
              <Input id="name" placeholder="Name of the equipment" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Model name</Label>
              <Input id="name" placeholder="Name of the equipment" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Model number</Label>
              <Input id="name" placeholder="Name of the equipment" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Product class</Label>
              <Input id="name" placeholder="Name of the equipment" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Power Rating</Label>
              <Input id="name" placeholder="Name of the equipment" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Weight</Label>
              <Input id="name" placeholder="Name of the equipment" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Dimension</Label>
              <Input id="name" placeholder="Name of the equipment" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-blue-600 hover:bg-blue-500">Submit</Button>
      </CardFooter>
    </Card>
  );
}
