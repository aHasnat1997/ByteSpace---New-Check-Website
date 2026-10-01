"use client"

import { Button } from "@/components/animate-ui/components/buttons/button"
import { FieldGroup } from "@/components/ui/field"
import Link from "next/link"
import useSignUp from "./use-sign-up"
import FormField from "@/components/shared/form-field"

export default function Form() {
  const { form, onSubmit } = useSignUp()
  return (
    <form
      id="form-rhf-demo"
      onSubmit={form.handleSubmit(onSubmit)}
      className="rounded-[24px] bg-white p-6 sm:p-8 lg:p-10"
    >
      <p className="body-l text-primary-800">Create an Account</p>
      <h4 className="heading-m text-neutral-950">Welcome to ByteSpace</h4>

      <FieldGroup className="mt-10">
        <FormField form={form} name="fullName" label="Full Name" placeholder="Jamie Davis" />
        <FormField form={form} name="email" label="Email" placeholder="designer@example.com" type="email" />
        <FormField form={form} name="password" label="Password" placeholder="********" type="password" />

        <Button variant="secondary" type="submit" className="mt-2 w-full">
          Continue
        </Button>
      </FieldGroup>

      <p className="mt-30.5 text-center body-m text-neutral-700">
        Already have an account?{" "}
        <Link href="/sign-in" className="body-m text-primary-800">
          Login
        </Link>
      </p>
    </form>
  )
}
