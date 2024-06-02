import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@nextui-org/react";

export default function Component() {
  return (
    <Card className>
      <CardHeader className="pb-2">
        <CardDescription>Number of Equipment</CardDescription>
        <CardTitle className="text-4xl">339</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">+25% from last week</div>
      </CardContent>
      <CardFooter>
        <Progress className="via-red-300" value={25} aria-label="25% increase" />
      </CardFooter>
    </Card>
  );
}
