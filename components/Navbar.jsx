import React from 'react';
import styles from '../styles/components/Navbar.module.css';

import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo__container}>
        <p className={styles.logo}>
          <span style={{ fontWeight: 700 }}>UP</span>TECHUNT
        </p>
        <div className={styles.search__box}>
          <input
            placeholder="search"
            className={styles.input__field}
            type="text"
          />
          <FaSearch className={styles.search__icon} />
        </div>
      </div>
      <div className={styles.nav__wrapper}>
        <nav className={styles.menu__container}>
          <ul className={styles.nav__menu}>
            <li>Browse projects</li>
            <li>My job</li>
            <li>Messages</li>
            <li>
              <div className={styles.bell__icon__container}>
                <FaBell className={styles.bell__icon} />
                <div className={styles.bell__active}></div>
              </div>
            </li>
            <li>
              <div className={styles.avatar__icon__container}>
                <FaUserCircle className={styles.avatar__icon} />
                <div className={styles.person__active}></div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
