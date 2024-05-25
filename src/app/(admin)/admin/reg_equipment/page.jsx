"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

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
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "CAM",
    label: "Camera",
  },
  {
    value: "SPK",
    label: "Speaker",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function page() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
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
        <div>
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
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between"
                  >
                    {value
                      ? frameworks.find(
                          (framework) => framework.value === value
                        )?.label
                      : "Select product class..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Frameworks">
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            onSelect={() => {
                              setValue(framework.value);
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === framework.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
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
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-blue-600 hover:bg-blue-500">Submit</Button>
      </CardFooter>
    </Card>
  );
}
