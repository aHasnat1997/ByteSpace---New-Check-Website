"use client"

import { Button } from "@/components/animate-ui/components/buttons/button"
import { FieldGroup } from "@/components/ui/field"
import Link from "next/link"
import SocialLogin from "./social-login"
import useSignIn from "./use-sign-in"
import FormField from "@/components/shared/form-field"

/**
 * Renders the sign-in form.
 * Uses the `useSignIn` hook for state and validation.
 * Includes fields for email and password, along with social login options.
 *
 * @returns {JSX.Element} The sign-in form component.
 */
export default function Form() {
  const { form, onSubmit } = useSignIn()
  return (
    <form
      id="form-rhf-demo"
      onSubmit={form.handleSubmit(onSubmit)}
      className="rounded-[24px] bg-white p-6 sm:p-8 lg:p-10"
    >
      <p className="body-l text-primary-800">Sign In</p>
      <h4 className="heading-m text-neutral-950">Welcome Back</h4>

      <FieldGroup className="mt-10">
        <FormField form={form} name="email" label="Email" placeholder="designer@example.com" type="email" />
        <FormField form={form} name="password" label="Password" placeholder="********" type="password" />

        <Button variant="secondary" type="submit" className="mt-2 w-full">
          Sign In
        </Button>
      </FieldGroup>

      <SocialLogin />

      <p className="text-center body-m text-neutral-400">
        New user?{" "}
        <Link href="/sign-up" className="body-m text-primary-800">
          Create an account
        </Link>
      </p>
    </form>
  )
}
