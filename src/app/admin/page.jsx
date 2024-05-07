import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Table from "@/components/Table";
import Card from "@/components/Card";
import Meteors from "@/components/MeteorsDemo";
// import { Cards } from "@/components/cardStack";
// import Main from "@/components/Main";

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col   ">
        <Header />
        {/* <Table /> */}
        <div className="w-full px-10 py-5 flex flex-col gap-2 ">
          {/* <Cards /> */}
          <Meteors />
          <Card />
        </div>
      </div>
    </div>
  );
}
