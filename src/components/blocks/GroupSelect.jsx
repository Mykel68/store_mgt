import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="grid gap-3">
            <Label htmlFor="category">Department</Label>
            <Select>
              <SelectTrigger id="category" aria-label="Select department">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clothing">Video</SelectItem>
                <SelectItem value="electronics">Audio</SelectItem>
                <SelectItem value="accessories"> Teleprompting</SelectItem>
                <SelectItem value="clothing">Streaming</SelectItem>
                <SelectItem value="electronics">Graphics</SelectItem>
                <SelectItem value="accessories">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="subcategory">Product class </Label>
            <Select>
              <SelectTrigger id="subcategory" aria-label="Select product class">
                <SelectValue placeholder="Select product class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="t-shirts">Camera</SelectItem>
                <SelectItem value="hoodies"></SelectItem>
                <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
