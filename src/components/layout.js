import React from "react"

import { GlobalStyles, Head, Header, Footer, Container } from "@components"

export default function Layout({ title, children }) {
  return (
    <div>
      <GlobalStyles />
      <Head title={title} />
      <Header />
      <Container
        as="main"
        size="default"
      >
        {children}
      </Container>
      <Footer />
    </div>
  )
}
