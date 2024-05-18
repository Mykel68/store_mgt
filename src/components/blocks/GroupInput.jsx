import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Equipment Details</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3 grid-cols-2">
            <div className="">
              <Label htmlFor="name">Model Name</Label>
              <Input id="name" type="text" className="w-full" />
            </div>
            <div className="">
              <Label htmlFor="name">Serial Number</Label>
              <Input id="name" type="text" className="w-full" />
            </div>
          </div>
          <div className="grid gap-3 grid-cols-2">
            <div className="">
              <Label htmlFor="name">Manufacturer</Label>
              <Input id="name" type="text" className="w-full" />
            </div>
            <div className="">
              <Label htmlFor="name">Vendor</Label>
              <Input id="name" type="text" className="w-full" />
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" className="min-h-32" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
