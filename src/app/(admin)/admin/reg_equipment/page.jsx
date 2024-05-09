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

export default function page() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Register Equipment</CardTitle>
        <CardDescription>
          Register equipment based on their physical properties.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
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
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Purchase Date</Label>
              <Input id="name" placeholder="Name of the equipment" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Purchase Price</Label>
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
