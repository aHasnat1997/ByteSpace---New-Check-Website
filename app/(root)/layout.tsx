import Footer from "@/components/nav&footer/footer"
import Navigation from "@/components/nav&footer/navigation"
import React from "react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
