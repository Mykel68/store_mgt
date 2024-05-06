import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center ">
      <div className="flex flex-col">
        <h3 className="text-3xl mb-3">DCLM Store Mangament System</h3>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search..." />
          <Button type="submit">Search</Button>
        </div>
        <div className="flex mt-5 gap-2">
          <button className="shadow-[inset_0_0_0_2px_#616467] px-4 py-1 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            Store code
          </button>
          <button className="shadow-[inset_0_0_0_2px_#616467] px-4 py-1 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            Product
          </button>
        </div>
      </div>
    </main>
  );
}
