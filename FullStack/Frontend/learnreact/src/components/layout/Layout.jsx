// src/components/Layout.jsx
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import classes from './Layout.module.css';

function Layout() {
  const path = window.location.pathname;
  
  return (
    <div className={classes.app}>
      <nav className={classes.nav}>
        <div className={classes.brand}>
          <h3>Brand Name</h3>
        </div>
        <div className={classes.menu}>
          <ul>
            <li>
              <Link
                to="/"
                className={path === '/' ? classes.navItemActive : classes.navItem}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={path === '/about' ? classes.navItemActive : classes.navItem}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className={path === '/help' ? classes.navItemActive : classes.navItem}
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>
        <h3>Footer</h3>
        <ul>
          <li>Footer Link One</li>
          <li>Footer Link Two</li>
          <li>Footer Link Three</li>
        </ul>
      </footer>
    </div>
  );
}

export default Layout;