"use client";
import { useState, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { addManufacturer } from "@/actions/manufacturer";
import { Toaster, toast } from "sonner";

import { cn } from "@/lib/utils";
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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import axios from "axios";
import { useForm } from "react-hook-form";
import { revalidatePath } from "next/cache";
// import {fetchManufacturers} from "@/actions/serverActions"
const frameworks = [
  { value: "CAM", label: "Camera" },
  { value: "SPK", label: "Speaker" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [manufacturers, setManufacturers] = useState([]);

  const {
    register: registerManufacturer,
    handleSubmit: handleSubmitManufacturer,
    reset: resetManufacturer,
    formState: { errors: manufacturerErrors },
  } = useForm();
  const {
    register: registerEquipment,
    handleSubmit: handleSubmitEquipment,
    reset: resetEquipment,
    formState: { errors: equipmentErrors },
  } = useForm();


  

  
 
  const fetchManufacturers = async () => {


    try {
      const response = await axios.get(
        "http://localhost:5000/api/manufacturer"
      );
      setManufacturers(response.data);
    } catch (error) {
      console.error("Error fetching manufacturers:", error);
    }
  };

  useEffect(() => {
    fetchManufacturers();
    
  }, []);

  

  const onSubmitManufacturer = async (data) => {
    console.log(data);
    try {
      await axios.post("http://localhost:5000/api/manufacturer", data);
      toast.success("Manufacturer Added successfully");
      resetManufacturer();
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const onSubmitEquipment = async (data) => {
    try {
      console.log(data);
      // Adjust the endpoint or logic for registering equipment
      await axios.post(
        "http://localhost:5000/api/equipment/register",
        data
      );
      toast.success("Equipment added successfully");
      resetEquipment(); // Reset form after successful submission
    } catch (error) {
      console.error("Error adding equipment:", error);
       toast.error("Adding equipment failed");
    }
  };

 
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

              <form
                onSubmit={handleSubmitManufacturer(onSubmitManufacturer)}
                className="grid gap-5 py-4"
              >
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="name" className="text-left">
                    Name
                  </Label>
                  <Input
                    {...registerManufacturer("name", { required: true })}
                    className="col-span-3"
                  />
                  {manufacturerErrors.name && (
                    <Label className=" text-red-500">Name is required</Label>
                  )}
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="email" className="text-left">
                    Email
                  </Label>
                  <Input
                    {...registerManufacturer("email", { required: true })}
                    className="col-span-3"
                  />
                  {manufacturerErrors.email && (
                    <Label className="text-red-500">Email is required</Label>
                  )}
                </div>
                <div className="grid  items-center gap-2">
                  <Label htmlFor="phone_number" className="text-left">
                    Phone number
                  </Label>
                  <div className="flex gap-2">
                                       <select
                name="country_code"
                {...registerManufacturer("country_code", { required: true })}
                className={cn(
                  "flex  h-10 w-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
                )}
              >
                <option value="+234" defaultValue="+234">+234</option>
       
              </select>
                  <Input
                    {...registerManufacturer("phone_number", {
                      required: true,
                      min: 10,
                    })}
                    className=""
                    />
            
                  </div>
                                {manufacturerErrors.phone_number && (
                    <Label className="text-red-500">
                      Phone number is required
                    </Label>
                  )}
            
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="address" className="text-left">
                    Address
                  </Label>
                  <Input
                    {...registerManufacturer("address", { required: true })}
                    className="col-span-3"
                  />
                  {manufacturerErrors.address && (
                    <Label className="text-red-500">Address is required</Label>
                  )}
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="country" className="text-left">
                    Country
                  </Label>
                  <Input
                    {...registerManufacturer("country", { required: true })}
                    className="col-span-3"
                  />
                  {manufacturerErrors.country && (
                    <Label className="text-red-500">Country is required</Label>
                  )}
                </div>
                <CardFooter className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600"
                  >
                    Create
                  </Button>
                </CardFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmitEquipment(onSubmitEquipment)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="manufacturer">Manufacturer</Label>

              <select
                name="manufacturer"
                {...registerEquipment("manufacturer", { required: true })}
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
                )}
              >
                <option value="" >Select a manufacturer...</option>
                {manufacturers.map((manufacturer) => (
                  <option key={manufacturer.email} value={manufacturer.name}>
                    {manufacturer.name}
                  </option>
                ))}
              </select>
              {equipmentErrors.manufacturer && (
                <Label className="text-red-500">
                  Manufacturer name is required
                </Label>
              )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="modelName">Model name</Label>
              <Input {...registerEquipment("model_name", { required: true })} />
              {equipmentErrors.model_name && (
                <Label className="text-red-500">Model name is required</Label>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="modelNumber">Model number</Label>
              <Input {...registerEquipment("model_number", { required: true })} />
              {equipmentErrors.model_name && (
                <Label className="text-red-500">Model name is required</Label>
              )}
            </div>

            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="productClass">Product class</Label>
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
                              console.log(framework.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === framework.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              ) }
                                  {...registerEquipment("product_class", {
                              required: true,
                            })}
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {equipmentErrors.product_class && (
                <Label className="text-red-500">
                  Product class is required
                </Label>
              )}
            </div> */}

              <div className="flex flex-col space-y-1.5">
              <Label htmlFor="product_class">Product class</Label>

              <select
                name="product_class"
                {...registerEquipment("product_class", { required: true })}
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
                )}
              >
                <option value="" >Select a product class...</option>
                {frameworks.map((framework) => (
                  <option key={framework.label} value={framework.value} className="py-2 px-3 ">
                    {framework.label}
                  </option>
                ))}
              </select>
              {equipmentErrors.product_class && (
                <Label className="text-red-500">
                  Product class  is required
                </Label>
              )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="weight">Power rating</Label>
              <Input
                {...registerEquipment("power_rating", { required: true })}
              />
              {equipmentErrors.power_rating && (
                <Label className="text-red-500">Power rating is required</Label>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="weight">Weight</Label>
              <Input {...registerEquipment("weight", { required: true })} />
              {equipmentErrors.weight && (
                <Label className="text-red-500">Weight is required</Label>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="dimension">Dimension</Label>
              <Input {...registerEquipment("dimension", { required: true })} />
              {equipmentErrors.dimension && (
                <Label className="text-red-500">Dimension is required</Label>
              )}
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-blue-600 hover:bg-blue-500">Submit</Button>
          </div>
        </form>
      </CardContent>
      <Toaster richColors position="top-right" />
    </Card>
  );
}
