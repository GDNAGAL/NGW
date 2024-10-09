import {React, useState} from 'react'
import './ResponsiveNavbar.css'
import {NavLink, Link} from 'react-router-dom'
import slogo from '../../../public/Images/logo.webp'

const ResponsiveNavbar = () => {
  
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img className='ms-3 img-fluid' style={{height:'50px'}} src={slogo} alt="" />
            {/* <h4 className='text-danger mb-0 ms-3 pt-1' style={{fontWeight:800,opacity:.8,textShadow: '-1px 2px 1px rgba(255, 193, 7, 1)'}}>Narain Global Academy</h4> */}
          </NavLink>
          <button className="navbar-toggler shadow-none align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className=" me-2" style={{fontSize:"18px"}}>
              <i className="bi bi-list"></i>
            </span>
            <span style={{fontSize:"16px"}}>MENU</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown has-megamenu">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a>
                <div className="dropdown-menu megamenu" role="menu">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-4 border-lg-end">
                        <div className="">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Our Story</strong>
                            <span className='text-muted d-none d-lg-block'>A comprehensive overview of the school's history, values, and growth over the years.</span>
                          </Link>
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/our-vision">
                            <strong className='d-block'>Mission & Vision</strong>
                            <span className='text-muted d-none d-lg-block'>Clear statements about the school’s mission, vision, and educational philosophy.</span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/principalMessage">
                            <strong className='d-block'>Principal's Message</strong>
                            <span className='text-muted d-none d-lg-block'>A welcoming note from the principal, discussing the school's ethos and goals.</span>
                          </Link>
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/our-staff">
                            <strong className='d-block'>Faculty & Staff</strong>
                            <span className='text-muted d-none d-lg-block'>Detailed profiles of the teaching and administrative staff, highlighting their qualifications and experience.</span>
                          </Link>
                      </div>
                      <div className="col-lg-4">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Campus Tour</strong>
                            <span className='text-muted d-none d-lg-block'>A virtual tour of the school’s campus, showcasing facilities, classrooms, and common areas.</span>
                          </Link>
                      </div>
                    </div>
                  </div>
                </div> 
              </li>
              <li className="nav-item dropdown has-megamenu">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Admissions
                </a>
                <div className="dropdown-menu megamenu" role="menu">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-4 border-lg-end">
                        <div className="">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/why-choose-us">
                            <strong className='d-block'>Why Choose Us</strong>
                            <span className='text-muted d-none d-lg-block'>Key reasons to choose the school, including academic excellence, boarding facilities.</span>
                          </Link>
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/how-to-apply">
                            <strong className='d-block'>How to Apply</strong>
                            <span className='text-muted d-none d-lg-block'>A detailed guide on the application process, including important dates and required documents.</span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Admission Form</strong>
                            <span className='text-muted d-none d-lg-block'>Direct link to the online application form.</span>
                          </Link>
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/fee">
                            <strong className='d-block'>Fee Structure</strong>
                            <span className='text-muted d-none d-lg-block'>Breakdown of tuition, boarding fees, and other related costs.</span>
                          </Link>
                      </div>
                      <div className="col-lg-4">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Scholarships & Financial Aid</strong>
                            <span className='text-muted d-none d-lg-block'>Information on available scholarships and financial aid programs.</span>
                          </Link>
                      </div>
                    </div>
                  </div>
                </div> 
              </li>
              <li className="nav-item dropdown has-megamenu">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Academics
                </a>
                <div className="dropdown-menu megamenu" role="menu">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-4 border-lg-end">
                        <div className="">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/curriculum-overview">
                            <strong className='d-block'>Curriculum Overview</strong>
                            <span className='text-muted d-none d-lg-block'>A detailed description of the curriculum, including core subjects and specialized programs.</span>
                          </Link>
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Academic Calendar</strong>
                            <span className='text-muted d-none d-lg-block'>Key dates for the academic year, including start/end dates, exams, and holidays.</span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/classroom-facilities">
                            <strong className='d-block'>Classroom Facilities</strong>
                            <span className='text-muted d-none d-lg-block'>Information on classroom environments, technology integration, and learning resources.</span>
                          </Link>
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/assessment-evaluation">
                            <strong className='d-block'>Assessment & Evaluation</strong>
                            <span className='text-muted d-none d-lg-block'>Overview of the school's assessment methods, grading system, and academic reports.</span>
                          </Link>
                      </div>
                      <div className="col-lg-4">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/special-programs">
                            <strong className='d-block'>Special Programs</strong>
                            <span className='text-muted d-none d-lg-block'>Information on special academic programs, such as Advanced Placement (AP) courses, International Baccalaureate (IB), or vocational training.</span>
                          </Link>
                      </div>
                    </div>
                  </div>
                </div> 
              </li>
              <li className="nav-item dropdown has-megamenu">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Boarding Life
                </a>
                <div className="dropdown-menu megamenu" role="menu">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-4 border-lg-end">
                        <div className="">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Hostel Facilities</strong>
                            <span className='text-muted d-none d-lg-block'>Detailed information about dormitories, meal plans, and amenities available to boarding students.</span>
                          </Link>
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Daily Schedule</strong>
                            <span className='text-muted d-none d-lg-block'>A typical day in the life of a boarding student, including academic and extracurricular activities.</span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Health & Wellness</strong>
                            <span className='text-muted d-none d-lg-block'>Overview of the school’s healthcare services, including medical check-ups, emergency care, and wellness programs.</span>
                          </Link>
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Counseling Services</strong>
                            <span className='text-muted d-none d-lg-block'>Information on mental health support, counseling services, and guidance programs.</span>
                          </Link>
                      </div>
                      <div className="col-lg-4">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Safety & Security</strong>
                            <span className='text-muted d-none d-lg-block'>Description of the safety measures in place, including campus security, emergency protocols, and visitor management.</span>
                          </Link>
                      </div>
                    </div>
                  </div>
                </div> 
              </li>
              <li className="nav-item dropdown has-megamenu">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gallery
                </a>
                <div className="dropdown-menu megamenu" role="menu">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-4 border-lg-end">
                        <div className="d-none d-lg-block">
                          <img className='img-fluid' src="https://www.alverno.edu/images/subfooter.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Photo Gallery</strong>
                            <span className='text-muted d-none d-lg-block'>A collection of high-quality images showcasing school events, campus life, and facilities.</span>
                          </Link>
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Video Gallery</strong>
                            <span className='text-muted d-none d-lg-block'>Videos highlighting key aspects of the school, including promotional videos, event highlights, and student testimonials.</span>
                          </Link>
                      </div>
                      <div className="col-lg-4">
                          <Link className='d-block p-2 megaMenuLink rounded-5' to="/about">
                            <strong className='d-block'>Virtual Tour</strong>
                            <span className='text-muted d-none d-lg-block'>Interactive virtual tour of the campus, allowing users to explore different areas of the school.</span>
                          </Link>
                      </div>
                    </div>
                  </div>
                </div> 
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/news">News & Events</Link>
              </li>
              <li className="nav-item me-4"></li>
              <li className="nav-item">
                <button className='btn btn-danger shadow-none w-100 rounded-3'>Apply Now</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default ResponsiveNavbar