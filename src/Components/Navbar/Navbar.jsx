import './Navbar.css';
import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track which submenu is open
  const navbarRef = useRef(null);

  const handleSubMenu = (menu) => {
    setOpenSubMenu((prevMenu) => (prevMenu === menu ? null : menu)); // Toggle the submenu or switch to another submenu
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpenSubMenu(null); // Hide the submenu if clicked outside
    }
  };

  useEffect(() => {
    //document.addEventListener('mousedown', handleClickOutside);
    return () => {
      //document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="d-none shadow border navMain d-xxl-block" ref={navbarRef}>
        <div className="d-flex justify-content-between">
          <div className='d-flex align-items-center p-4'>
            <NavLink to="/"><img src="https://www.alverno.edu/images/logo.svg" alt="" height="100px" /></NavLink>
          </div>
          <div className='d-flex flex-column'>
            <div className='d-flex text-white topnav justify-content-between'>
              <div className="d-flex topm">
                <li><NavLink to="/">News</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><a href="">Event</a></li>
                <li><a href="">Academic</a></li>
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
                <button className={`navbtn d-flex align-items-center ${openSubMenu==='academic'? 'active':''}`}>
                  <span>Academic & Admission</span>
                  <img src="https://www.alverno.edu/images/chevron-down.png" alt="" />
                  <div className="d-none">
                  <div className='submenu pt-4 pb-4 shadow'>
                    <div className="container">
                      <div className="row">
                        <div className="col-3 border-end">
                          <div className='p-2'>
                            <img width='100%' src="https://www.alverno.edu/images/menu_CampusLife.png" alt="" />
                            <p className='mt-3 contPara text-dark' style={{fontSize:'16px'}}>The best way to know if Alverno is right for you is to come visit!</p>
                          </div>
                        </div>
                        <div className="col-3 border-end">
                          <div className='p-2'>
                            <strong>ACADEMICS</strong>
                            <div className="sublinks">
                              <Link to="check">Major and Program List</Link>
                              <Link>Test</Link>
                              <Link>Test</Link>
                              <Link>Test</Link>
                              <Link>Test</Link>
                              <Link>Test</Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-3 border-end">C</div>
                        <div className="col-3">D</div>
                      </div>
                    </div>
                  </div>
                  </div>
                </button>
                <button className='navbtn d-flex align-items-center' onClick={() => handleSubMenu('campus')}>
                  <span>Campus</span>
                  <img src="https://www.alverno.edu/images/chevron-down.png" alt="" />
                </button>
                <button className='navbtn d-flex align-items-center' onClick={() => handleSubMenu('resources')}>
                  <span>Resources</span>
                  <img src="https://www.alverno.edu/images/chevron-down.png" alt="" />
                </button>
                <button className='navbtn d-flex align-items-center' onClick={() => handleSubMenu('apply')}>
                  <span>Apply</span>
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

      {openSubMenu === 'academic' && (
        <div className='submenu pt-4 pb-4 shadow'>
          <div className="container">
            <div className="row">
              <div className="col-3 border-end">
                <div className='p-2'>
                  <img width='100%' src="https://www.alverno.edu/images/menu_CampusLife.png" alt="" />
                  <p className='mt-3 contPara text-dark' style={{fontSize:'16px'}}>The best way to know if Alverno is right for you is to come visit!</p>
                </div>
              </div>
              <div className="col-3 border-end">
                <div className='p-2'>
                  <strong>ACADEMICS</strong>
                  <div className="sublinks">
                    <Link to="check">Major and Program List</Link>
                    <Link>Test</Link>
                    <Link>Test</Link>
                    <Link>Test</Link>
                    <Link>Test</Link>
                    <Link>Test</Link>
                  </div>
                </div>
              </div>
              <div className="col-3 border-end">C</div>
              <div className="col-3">D</div>
            </div>
          </div>
        </div>
      )}

      {openSubMenu === 'campus' && (
        <div className="submenu">
          <ul>
            <li><a href="#">Campus Submenu Item 1</a></li>
            <li><a href="#">Campus Submenu Item 2</a></li>
            <li><a href="#">Campus Submenu Item 3</a></li>
          </ul>
        </div>
      )}

      {openSubMenu === 'resources' && (
        <div className="submenu">
          <ul>
            <li><a href="#">Resources Submenu Item 1</a></li>
            <li><a href="#">Resources Submenu Item 2</a></li>
            <li><a href="#">Resources Submenu Item 3</a></li>
          </ul>
        </div>
      )}

      {openSubMenu === 'apply' && (
        <div className="submenu">
          <ul>
            <li><a href="#">Apply Submenu Item 1</a></li>
            <li><a href="#">Apply Submenu Item 2</a></li>
            <li><a href="#">Apply Submenu Item 3</a></li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar;
