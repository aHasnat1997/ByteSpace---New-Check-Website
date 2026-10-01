import AuthHeader from "@/components/nav&footer/auth-nav"
import React from "react"

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
