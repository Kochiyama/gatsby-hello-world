import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple`, fontFamily: `Raleway` }}>
      <Header text="Hello Gatbsy!" />
      <p>What a world.</p>
      <img
        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        alt="Gtr"
      />
      <Link to="/contact/">Contact</Link>
    </div>
  )
}
