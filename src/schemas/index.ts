import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const signupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Email must be valid." }),
  password: z.string().min(6, { message: "Minimum 6 characters." })
});

export type SignupSchema = z.infer<typeof signupSchema>;

export const signinSchema = z.object({
  email: z.string().email({ message: "Email must be valid." }),
  password: z.string().min(6, { message: "Minimum 6 characters." })
});

export type SigninSchema = z.infer<typeof signinSchema>;