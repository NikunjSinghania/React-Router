import React from 'react'
import { Link , Outlet} from 'react-router-dom'

function Products() {
  return (
    <>
        <div>
            <input type="text" placeholder='Search'/>
        </div>
        <nav>
            <Link to='featured'>Featured products</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet />
    </>

  )
}

export default Products