import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

import logo from "../images/logo2.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#"><img className='logo' src={logo}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <FontAwesomeIcon icon={faBars} style={{"color":" rgb(0, 106, 255)"}}/>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li className="nav-item  mx-3">
                <a className="nav-link" href="#">home</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">about me </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">services</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">how work</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">portfolio</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">contacts</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
