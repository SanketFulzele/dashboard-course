import React, { useState } from 'react';
import "../../assets/styles/sidebar.css";
import { House, Book, Gear, List } from 'react-bootstrap-icons';
import { NavLink, useLocation } from 'react-router-dom';
import userImage from '../../assets/images/user.jpg'; 

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="mobile-header">
        <button className="menu-trigger" onClick={toggleMobileMenu}>
          <List size={24} />
        </button>
      </div>

      <div className={`sidebar-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-top">
          <nav className="sidebar-nav">
            <ul>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <li>
                  <House size={20} />
                  <span>Dashboard</span>
                </li>
              </NavLink>
              <NavLink 
                to="/courses" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <li>
                  <Book size={20} />
                  <span>Courses</span>
                </li>
              </NavLink>
              <NavLink 
                to="/settings" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <li>
                  <Gear size={20} />
                  <span>Settings</span>
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className="sidebar-bottom">
          <div className="profile">
            <div className="profile-image">
              <img src={userImage} alt='user-img' />
            </div>
            <h4>John</h4>
            <p className="text-muted">Student</p>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sidebar-backdrop" onClick={closeMobileMenu} />
      )}
    </>
  );
}

export default Sidebar;