import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
            <p className='blue-gradient_text'>Home</p>

        
        </NavLink>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    </header>
  )
}

export default NavBar