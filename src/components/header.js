import React from "react"
import DarkModeToggle from "./darkMode"
import Helmet from "react-helmet"

const Header = () => (
  <header>
    <Helmet>
    <script src="https://use.fontawesome.com/a9f203f916.js"></script>
    </Helmet>
    <div>
      Header <DarkModeToggle></DarkModeToggle>
    </div>
  </header>
)

export default Header
