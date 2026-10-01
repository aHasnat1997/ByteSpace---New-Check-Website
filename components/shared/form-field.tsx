"use client"

import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"
import { Controller } from "react-hook-form"

/**
 * Properties for the FormField component.
 *
 * @template T - The type of form field values.
 * @interface FormFieldProps
 * @property {UseFormReturn<T>} form - The React Hook Form instance.
 * @property {Path<T>} name - The path to the field in the form state.
 * @property {string} label - The label text for the field.
 * @property {string} placeholder - The placeholder text for the input.
 * @property {React.HTMLInputTypeAttribute} [type="text"] - The HTML input type.
 */
interface FormFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>
  name: Path<T>
  label: string
  placeholder: string
  type?: React.HTMLInputTypeAttribute
}

/**
 * Renders a controlled form field with a label and error handling.
 *
 * @template T - The type of form field values.
 * @param {FormFieldProps<T>} props - The component props.
 * @returns {JSX.Element} The FormField component.
 */
export default function FormField<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name} className="label-s text-neutral-950">
            {label}
          </FieldLabel>
          <Input
            {...field}
            id={field.name}
            type={type}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            autoComplete="off"
            className="h-11 border border-neutral-100 px-6 py-3 body-l text-neutral-950 placeholder:body-l placeholder:text-neutral-400"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}
