import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm, UseFormReturn } from "react-hook-form"
import { z } from "zod"

export default function useAuthForm<T extends FieldValues>(
  schema: z.ZodType,
  defaultValues: T
): { form: UseFormReturn<T>; onSubmit: (data: T) => void } {
  const form = useForm<T>({
    resolver: zodResolver(schema as any) as any,
    defaultValues: defaultValues as any,
  }) as UseFormReturn<T>

  function onSubmit(data: T) {
    console.log("Form submitted:", data)
  }

  return { form, onSubmit }
}
