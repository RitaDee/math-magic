import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navHead}>
    <h1>Math Magic</h1>
    <ul>
      <li>
        <Link className={styles.link} to="/">Home</Link>
      </li>
      <li>|</li>

      <li>
        <Link className={styles.link} to="/calculator">Calculator</Link>
      </li>
      <li>|</li>

      <li>
        <Link className={styles.link} to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
