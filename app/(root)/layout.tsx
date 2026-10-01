import Footer from "@/components/nav&footer/footer"
import Navigation from "@/components/nav&footer/navigation"
import React from "react"

/**
 * Root layout for the main public-facing pages of the application.
 * Includes the global navigation and footer.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The nested child components/pages.
 * @returns {JSX.Element} The RootLayout component.
 */
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
