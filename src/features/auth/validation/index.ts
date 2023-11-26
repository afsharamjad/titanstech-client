import { z } from "zod";

export const RegisterSchema = z.object({
  firstName: z.string().trim().min(1, { message: "field required" }),
  lastName: z.string().trim().min(1, { message: "field required" }),
  email: z.string().trim().min(1, { message: "field required" }).email(),
  password: z
    .string()
    .min(3, { message: "Password must contain at least 3 character(s)" })
    .max(20),
});

export const LoginSchema = z.object({
  email: z.string().trim().min(1, { message: "field required" }).email(),
  password: z
    .string()
    .min(3, { message: "Password must contain at least 3 character(s)" })
    .max(20),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
