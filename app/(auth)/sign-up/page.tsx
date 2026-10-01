import AuthPageLayout from "../_components/auth-page-layout"
import Form from "./_components/form"

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
