// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen  items-center justify-center ">
//       <div className="flex flex-col">
//         <h3 className="text-3xl mb-3">DCLM Store Mangament System</h3>
//         <div className="flex w-full max-w-sm items-center space-x-2">
//           <Input type="text" placeholder="Search..." />
//           <Button type="submit">Search</Button>
//         </div>
//         <div className="flex mt-5 gap-2">
//           <button className="shadow-[inset_0_0_0_2px_#616467] px-4 py-1 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
//             Store code
//           </button>
//           <button className="shadow-[inset_0_0_0_2px_#616467] px-4 py-1 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
//             Product
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
    DCLM Store Management App
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Search for store or product here...
        </p>
        <Input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <Button className="relative z-10 mt-4 w-full">Search</Button>
      </div>
      <BackgroundBeams />
    </div>
  );
}
