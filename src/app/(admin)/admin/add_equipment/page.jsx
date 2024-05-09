import React from "react";
import ProductDetails from "@/components/blocks/GroupInput";
import ProductCategory from "@/components/blocks/GroupSelect";

const page = () => {
  return (
    <div className="flex flex-col  gap-2">
      {/* <h2 className="text-2xl font-semibold">Register equipment</h2> */}
      <ProductDetails />
      <ProductCategory />
    </div>
  );
};

export default page;
