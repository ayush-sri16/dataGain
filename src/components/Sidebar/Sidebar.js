"use client"
import { useState } from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.sidebar} text-[24px] ${isExpanded ? styles.expanded : ''} `}>
      <button onClick={toggleSidebar} className={styles.expandButton}>
        {isExpanded ? (<ArrowBackIcon/>) : (<ArrowForwardIcon/>)}
      </button>
      <ul className={`${styles.ul}`}>
        <Link href={"/"} className={`${styles.li}`}>
          <span className={styles.icon}>🏠</span>
          {isExpanded && <span className={styles.text}>Home</span>}
        </Link>
        <Link href={"/orders"} className={`${styles.li}`}>
          <span className={styles.icon}>📄</span>
          {isExpanded && <span className={styles.text}>Orders</span>}
        </Link>
        <Link href={"/calendar"} className={`${styles.li}`}>
          <span className={styles.icon}>📅</span>
          {isExpanded && <span className={styles.text}>Calendar</span>}
        </Link>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
