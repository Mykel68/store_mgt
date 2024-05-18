"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { Button } from "@/components/ui/button";
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
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log("Form data:", data);
      const response = await axios.post(process.env.BACKEND_URL, data);
      if (response.data.token) {
        // Store the token in the client-side (e.g., in localStorage)
        localStorage.setItem("authToken", response.data.token);
        router.push("/admin");
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container mx-auto flex min-h-screen items-center justify-center"
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email?.message}
            />
            {errors.email?.message && (
              <p role="alert" className="text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password?.message}
            />
            {errors.password?.message && (
              <p role="alert" className="text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" loading={loading}>
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
