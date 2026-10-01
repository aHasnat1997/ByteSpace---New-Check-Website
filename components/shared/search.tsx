"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { Field, FieldGroup } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../animate-ui/components/buttons/button"
import SearchIcon from "@/svgs/Style=Outlined-10.svg"
import { cn } from "cn"
import { ChevronDown } from "lucide-react"

const formSchema = z.object({
  text: z.string(),
})

/**
 * Renders a search form tailored for different contexts (global, courses, footer).
 *
 * @param {Object} props - The component props.
 * @param {"global" | "courses" | "footer"} props.inputType - Determines the styling and behavior of the search field.
 * @returns {JSX.Element} The Search component.
 */
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
      <FieldGroup className="relative min-w-0 flex-1 rounded-full bg-white">
        <Controller
          name="text"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="relative">
              {inputType === "global" || inputType === "courses" ? (
                <SearchIcon className="pointer-events-none absolute inset-y-0 left-4 my-auto size-6 text-neutral-800" />
              ) : null}
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
                className={cn(
                  "h-13 rounded-full px-6 py-4.5 text-black",
                  inputType === "footer" ? "" : "pl-11"
                )}
              />
            </Field>
          )}
        />
      </FieldGroup>

      <Button type="submit" variant="secondary">
        {inputType === "global" ? (
          "Search"
        ) : inputType === "courses" ? (
          <>
            Courses <ChevronDown />
          </>
        ) : (
          "Search"
        )}
      </Button>
    </form>
  )
}
