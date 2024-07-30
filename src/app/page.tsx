"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full  bg-slate-100 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-blue-800 to-blue-600  text-center font-sans font-bold">
          DCLM Store Management App
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Search for store or product here...
        </p>
        <Input
          type="text"
          placeholder="Find equipments..."
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4   bg-slate-100 placeholder:text-neutral-700"
        />
        <Button className="bg-blue-600 relative z-10 mt-4 w-full hover:bg-blue-500">
          Search
        </Button>
      </div>
      <BackgroundBeams />
    </div>
  );
}
