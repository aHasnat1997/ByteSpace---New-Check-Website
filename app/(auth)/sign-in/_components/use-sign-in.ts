import useAuthForm from "@/hooks/use-auth-form"
import { z } from "zod"

const schema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})

export default function useSignIn() {
  return useAuthForm(schema, { email: "", password: "" })
}
