"use server";

import axios from "axios";

const BACKEND_URL = `${process.env.BACKEND_URL}/api/manufacturer/register-manufacturer`;

export async function addManufacturer(newManufacturer) {
  try {
    console.log("Sending data to backend:", newManufacturer); // Debug logging
    const response = await axios.post(BACKEND_URL, newManufacturer);
    console.log("Response from backend:", response.data); // Debug logging
    return response.data.data;
  } catch (error) {
    console.error("Error adding manufacturer:", error);
    throw new Error(error.message);
  }
}
