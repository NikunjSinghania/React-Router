import React from 'react'
import { Link, NavLink } from 'react-router-dom'



function NavBar() {

  const navLinkStyles = ({ isActive}) => {
    return {
      padding: isActive ? '20px' : '0',
    }
  }

  return (
    <nav>
        {/*<Link to='/'>Home</Link>
        <Link to='about'>About</Link>*/}

        <NavLink style={navLinkStyles} to='/' end>Home</NavLink>
        <NavLink style={navLinkStyles} to='/about'>About</NavLink>
        <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
        <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
    </nav>
  )
}

export default NavBar