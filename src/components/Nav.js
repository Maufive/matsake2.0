import React from "react"
import { NavStyles } from "../styles/NavStyles"
import Logo from "./Logo"
import PropTypes from "prop-types"

const Nav = () => (
  <NavStyles>
    <Logo />
  </NavStyles>
)

export default Nav

Nav.propTypes = {
  data: PropTypes.object,
}
