"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
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

const DatePickerWithRange = ({ className }) => {
  const [date, setDate] = useState("");

  return (
    <div className={className}>
      <Popover>
        <Label htmlFor="name" className="text-left">
          Date
        </Label>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full min-w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

const Page = () => {
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
                  <DialogDescription>Create new projects.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="col-span-4 items-center gap-4">
                    <Label htmlFor="name" className="text-left">
                      Project Name
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="col-span-4 items-center gap-4">
                    <Label htmlFor="function" className="text-left">
                      Function
                    </Label>
                    <Input id="function" className="col-span-3" />
                  </div>
                  <DatePickerWithRange className="col-span-4" />
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

export default Page;
