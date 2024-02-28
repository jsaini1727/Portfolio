import { NavLink } from "react-router-dom"

function Footer() {


  return (
    <footer>

      <nav className="text-center footer-links">

        <NavLink to="/Linkdin">LinkdIn</NavLink>
        <NavLink to="/Github">Github</NavLink>
   


      </nav>

    </footer>
  )
}
export default Footer