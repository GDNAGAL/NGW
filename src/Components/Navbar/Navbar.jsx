import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="d-none shadow border navMain d-xxl-block">
      <div className="d-flex justify-content-between">
        <div className='d-flex align-items-center p-4'>
            <NavLink to="/"><img src="https://www.alverno.edu/images/logo.svg" alt="" height="100px"/></NavLink>
        </div>
        <div className='d-flex flex-column'>
          <div className='d-flex text-white topnav justify-content-between'>
            <div className="d-flex">
              <li><NavLink to="/">News</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><a href="">Event</a></li>
              <li><a href="">Alumni</a></li>
              <li><a href="">Give</a></li>
              <li className='p-right'></li>
            </div>
            <div className="sicon d-flex align-items-center p-right">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-whatsapp"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
          <div className='mainNav'>
            <div className='d-flex justify-content-center text-center'>
              <button className='navbtn d-flex align-items-center'>
                <span>Academic & Admission</span>
                <img src="https://www.alverno.edu/images/chevron-down.png" alt="" />
              </button>
              <button className='navbtn d-flex align-items-center'>
                <span>Campus</span>
                <img src="https://www.alverno.edu/images/chevron-down.png" alt="" />
              </button>
              <button className='navbtn d-flex align-items-center'>
                <span>Resources</span>
                <img src="https://www.alverno.edu/images/chevron-down.png" alt="" />
              </button>
              <button className='navbtn d-flex align-items-center'>
                <span>Resources</span>
                <img src="https://www.alverno.edu/images/chevron-down.png" alt="" />
              </button>
              <div className='d-flex align-items-center pe-3'>
                <button className='button'>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Navbar