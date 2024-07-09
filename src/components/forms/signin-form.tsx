"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOff } from "lucide-react";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SigninSchema, signinSchema } from "@/schemas";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-poppins",
});
const SigninForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<SigninSchema>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleSigninFormSubmit(values: SigninSchema) {
    console.log(values);
  }
  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }
  return (
    <div className="w-full space-y-6">
      <h1 className={`${poppins.className} headline-4`}>Sign in</h1>
      <p className="body-2 text-muted-foreground">
        Dont&apos;t have an account yet?{" "}
        <Link
          href={"/auth/signup"}
          className="body-2-semibold text-emerald-500"
        >
          Sign Up
        </Link>
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSigninFormSubmit)}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="jane.doe@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="******"
                      type={showPassword ? "text" : "password"}
                      className="pr-12"
                    />
                    <Button
                      size={"icon"}
                      variant={"ghost"}
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute right-0 top-0 bg-transparent hover:bg-transparent active:bg-transparent"
                    >
                      {showPassword ? (
                        <EyeIcon className="text-slate-600" />
                      ) : (
                        <EyeOff className="text-slate-600" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default SigninForm;
