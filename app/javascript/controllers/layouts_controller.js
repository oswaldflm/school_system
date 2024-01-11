import { Controller } from "@hotwired/stimulus"
import React from "react"
import { createRoot } from 'react-dom/client'
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    const header = document.getElementById("header")
    const rootHeader = createRoot(header)
    rootHeader.render(<Header type={"regular"} />)

    const footer = document.getElementById("footer")
    const rootFooter = createRoot(footer)
    rootFooter.render(<Footer type={"regular"} />,)
  }
}