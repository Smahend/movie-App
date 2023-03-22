import React from 'react'
import {Link, Router} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
         <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="" >Movie Collection</Link>
            </nav>
            <br/>
          </div>
       </Router>
    </>
  )
}

export default Navbar