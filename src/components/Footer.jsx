import { NavLink } from "react-router-dom"

function Footer() {


  return (
    <footer>

      <nav className="text-center footer-links">

        <NavLink to="/Linkdin">LinkdIn</NavLink>
        <NavLink to="/Github">Github</NavLink>
        <NavLink to="/Projects">Projects</NavLink>


      </nav>

    </footer>
  )
}
export default Footer