import {React, useState} from 'react'
import './ResponsiveNavbar.css'
import {NavLink, Link} from 'react-router-dom'

const ResponsiveNavbar = () => {
  
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><img src="https://www.alverno.edu/images/logo.svg" alt="" width="100px" /></NavLink>
          <button className="navbar-toggler shadow-none align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className=" me-2" style={{fontSize:"18px"}}>
              <i class="bi bi-list"></i>
            </span>
            <span style={{fontSize:"16px"}}>MENU</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown has-megamenu">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a>
                <div className="dropdown-menu megamenu" role="menu">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4 border-lg-end">
                        <div className="">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/">
                            <strong className='d-block'>Our Story</strong>
                            <span className='text-muted'>A comprehensive overview of the school's history, values, and growth over the years.</span>
                          </Link>
                          <Link className='d-block p-2 nav-link' to="/">Test</Link>
                          <Link className='d-block p-2 nav-link' to="/">Test</Link>
                          <Link className='d-block p-2 nav-link' to="/">Test</Link>
                          <Link className='d-block p-2 nav-link' to="/">Test</Link>
                          <Link className='d-block p-2 nav-link' to="/">Test</Link>
                        </div>
                      </div>
                      <div className="col-md-4 border-end">B</div>
                      <div className="col-md-4">C</div>
                    </div>
                  </div>
                </div> 
                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <div className="row">
                      <div className="col-md-4">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </div>
                      <div className="col-md-4">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </div>
                      <div className="col-md-4">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </div>
                    </div>
                </ul> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item me-4"></li>
              <li className="nav-item">
                <button className='btn btn-danger shadow-none text-uppercase w-100 rounded-5'>Apply Now</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default ResponsiveNavbar