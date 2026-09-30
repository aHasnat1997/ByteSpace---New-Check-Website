"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { Field, FieldError, FieldGroup } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../animate-ui/components/buttons/button"

const formSchema = z.object({
  text: z.string(),
})

export default function Search({
  inputType,
}: {
  inputType: "global" | "courses" | "footer"
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
    form.reset()
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4 sm:flex-row"
    >
      <FieldGroup className="min-w-0 flex-1 rounded-full bg-white">
        <Controller
          name="text"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id={
                  inputType === "global"
                    ? "global-search"
                    : inputType === "courses"
                      ? "courses-search"
                      : "footer-email"
                }
                type={
                  inputType === "global"
                    ? "search"
                    : inputType === "courses"
                      ? "search"
                      : "email"
                }
                aria-invalid={fieldState.invalid}
                placeholder={
                  inputType === "global"
                    ? "Course, topic, creator"
                    : inputType === "courses"
                      ? "Search"
                      : "Enter your email"
                }
                autoComplete="email"
                className="h-13 rounded-full px-6 py-4.5 text-black"
              />
            </Field>
          )}
        />
      </FieldGroup>

      <Button type="submit" variant="secondary">
        {inputType === "global"
          ? "Search"
          : inputType === "courses"
            ? "Courses"
            : "Search "}
      </Button>
    </form>
  )
}
