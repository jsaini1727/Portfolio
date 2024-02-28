import { NavLink } from "react-router-dom"

function Header() {

  return (
    <header>
      <h1>JSS Portfolio</h1>

    <nav>
    
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/portfolio">Projects</NavLink>

    </nav>

    </header>
  )
}
export default Header