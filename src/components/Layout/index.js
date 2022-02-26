import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <section>
      <div className="layout">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </section>
  )
}
