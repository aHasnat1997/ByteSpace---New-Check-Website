import AuthHeader from "@/components/nav&footer/auth-nav"
import React from "react"

/**
 * Layout wrapper specifically designed for authentication pages.
 * Includes a simplified authentication header.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The nested child components/pages.
 * @returns {JSX.Element} The authentication layout component.
 */
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  )
}
