import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Button } from "@/components/ui/Button";

const page = () => {
  return (
    <div>
      <Card className="min-h-[60vh]">
        <CardHeader>
          <CardTitle>Ongoing Project</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  className="float-end bg-blue-500 text-white hover:bg-blue-600"
                >
                  Add Project
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Project</DialogTitle>
                  <DialogDescription>Create new projects .</DialogDescription>
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
        <CardContent className="flex items-center justify-center ">
          <h1 className="text-5xl text-center font-semibold ">
            No Project at the Moment
          </h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
