import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm, UseFormReturn } from "react-hook-form"
import { z } from "zod"

/**
 * A custom hook for managing authentication forms using react-hook-form and zod.
 *
 * @template T - The type of the form's field values.
 * @param {z.ZodType} schema - The zod schema for form validation.
 * @param {T} defaultValues - The initial values for the form fields.
 * @returns {{ form: UseFormReturn<T>; onSubmit: (data: T) => void }} The initialized form instance and the submit handler.
 */
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
