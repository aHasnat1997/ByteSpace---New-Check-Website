import AuthPageLayout from "../_components/auth-page-layout"
import Form from "./_components/form"

/**
 * The Sign-Up page.
 * Renders the authentication layout along with the sign-up form.
 *
 * @returns {JSX.Element} The SignUp page component.
 */
export default function SignUp() {
  return (
    <AuthPageLayout
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <Form />
    </AuthPageLayout>
  )
}
