"use server"

import { revalidatePath } from "next/cache";
import axios from "axios";

 export const fetchManufacturers = async (manufacturers) => {

    // "use server";
    try {
      const response = await axios.get(
        "http://localhost:5000/api/manufacturer",{cache:no-cache}
      );
        //   setManufacturers(response.data);
        manufacturers=response.data
    } catch (error) {
      console.error("Error fetching manufacturers:", error);
    }
     revalidatePath('/admin/reg_equipment')
  };