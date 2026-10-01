import AuthPageLayout from "../_components/auth-page-layout"
import Form from "./_components/form"

/**
 * The Sign-In page.
 * Renders the authentication layout along with the sign-in form.
 *
 * @returns {JSX.Element} The SignIn page component.
 */
export default function SignIn() {
  return (
    <AuthPageLayout
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <Form />
    </AuthPageLayout>
  )
}
