import useAuthForm from "@/hooks/use-auth-form"
import { z } from "zod"

const schema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})

/**
 * A custom hook providing the form state and validation logic for sign-in.
 * Utilizes `react-hook-form` and `zod` for validation.
 *
 * @returns {Object} The sign-in form object and submit handler.
 */
export default function useSignIn() {
  return useAuthForm(schema, { email: "", password: "" })
}
