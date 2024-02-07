"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import clsx from "clsx";
import styles from "@/styles/landing.module.css";

const Landing = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.999, 1], [0, 1, 1, 0]);
  const subtitleColor = useTransform(scrollYProgress, [0.5, 0.99], ["#fff", "#000"]);
  const background = useTransform(
    scrollYProgress,
    [0.7, 0.9, 0.9, 1],
    [
      "linear-gradient(-45deg, #f06844, #ee4c54, #d45e95, #9c6ca6,#6583c1)",
      "linear-gradient(-45deg, #f1f1f4, #f1f1f4, #f1f1f4, #f1f1f4,#f1f1f4)",
      "linear-gradient(-45deg, #f1f1f4, #f1f1f4, #f1f1f4, #f1f1f4,#f1f1f4)",
      "linear-gradient(-45deg, #f1f1f4, #f1f1f4, #f1f1f4, #f1f1f4,#f1f1f4)",
    ],
  );

  return (
    <>
      <motion.section ref={targetRef} className={styles.content} style={{ background }}>
        <motion.h1 className={clsx(styles.text, styles.title)} style={{ opacity: titleOpacity }}>
          요즘 뜨는 트랜드는 뭐가 있을까요?
        </motion.h1>
        <motion.h2 className={clsx(styles.text, styles.subtitle)} style={{ opacity: subtitleOpacity, color: subtitleColor }}>
          지금 확인하세요.
        </motion.h2>
      </motion.section>
    </>
  );
};

export default Landing;
