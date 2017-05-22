import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    // const logo = '../../public/images/migo_white.png'

    return (
      <div className="nav">
        <nav className="navbar navbar-light">
          <Link to="/" className="navbar-brand"><img src="" alt="Migo logo" className="migo-logo"></img></Link>
          <ul className="nav navbar-nav">
            <Link to="/careers/" className="nav-link">Careers</Link>
          </ul>
        </nav>
      </div>
    )
  }
}


export default Header
