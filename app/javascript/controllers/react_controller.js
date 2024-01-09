import { Controller } from "@hotwired/stimulus"
import React from "react"
import { createRoot } from 'react-dom/client'
import Welcome from "../components/home/Welcome"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("i am here")
    const app = document.getElementById("welcome")
    createRoot(app).render(<Welcome />)
  }
}
