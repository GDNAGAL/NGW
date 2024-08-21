import {React, useState} from 'react'
import './ResponsiveNavbar.css'

const ResponsiveNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
  
    return (
      <nav className="mega-menu">
        <ul className="menu">
          <li className="menu-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="#">Mega Menu</a>
            {isOpen && (
              <div className="dropdown-content">
                <div className="menu-column">
                  <h4>Category 1</h4>
                  <ul>
                    <li><a href="#">Sub-item 1</a></li>
                    <li><a href="#">Sub-item 2</a></li>
                    <li><a href="#">Sub-item 3</a></li>
                  </ul>
                </div>
                <div className="menu-column">
                  <h4>Category 2</h4>
                  <ul>
                    <li><a href="#">Sub-item 1</a></li>
                    <li><a href="#">Sub-item 2</a></li>
                    <li><a href="#">Sub-item 3</a></li>
                  </ul>
                </div>
                <div className="menu-column">
                  <h4>Category 3</h4>
                  <ul>
                    <li><a href="#">Sub-item 1</a></li>
                    <li><a href="#">Sub-item 2</a></li>
                    <li><a href="#">Sub-item 3</a></li>
                  </ul>
                </div>
                <div className="menu-column">
                  <h4>Category 4</h4>
                  <ul>
                    <li><a href="#">Sub-item 1</a></li>
                    <li><a href="#">Sub-item 2</a></li>
                    <li><a href="#">Sub-item 3</a></li>
                  </ul>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    );
}

export default ResponsiveNavbar