"use client";
import { useState } from "react";
import styles from "@/styles/nav.module.css";
import clsx from "clsx";

const Nav = () => {
  const [isFixed, setIsFixed] = useState(false);
  // const { width, height } = useWindowDimensions();

  // const handleScroll = (): void => {
  //   if (window === undefined) return;
  //   const currentHeight = window.scrollY;
  //   currentHeight > height - 0.5 ? setIsFixed(true) : setIsFixed(false);
  // };

  return (
    <ul className={styles.navList}>
      <button className={styles.logo}>Trendz</button>
      <li className={styles.navItem}>사회</li>
      <li className={styles.navItem}>엔터테이먼트</li>
      <li className={styles.navItem}>문화</li>
    </ul>
  );
};

export default Nav;
