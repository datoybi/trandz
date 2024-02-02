"use client";
import { useEffect, useRef } from "react";
import styles from "@/styles/landing.module.css";
import clsx from "clsx";
import { useScroll, useMotionValueEvent, motion, useTransform } from "framer-motion";

const Landing = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const subtitleColor = useTransform(scrollYProgress, [0.5, 0.9], ["#fff", "#000"]);
  const background = useTransform(
    scrollYProgress,
    [0.7, 1],
    [
      "linear-gradient(-45deg, #f06844, #ee4c54, #d45e95, #9c6ca6,#6583c1)",
      "linear-gradient(-45deg, #f1f1f4, #f1f1f4, #f1f1f4, #f1f1f4,#f1f1f4)",
    ]
  );

  // fixed에서 sticky로 변경되면 꿀렁거리는거 수정하기!
  const subtitleTop = useTransform(scrollYProgress, (pos) => (pos >= 1 ? "48.5%" : "45%"));
  const position = useTransform(scrollYProgress, (pos) => (pos >= 1 ? "sticky" : "fixed"));
  // useEffect(() => {
  //   scrollYProgress.onChange(() => {
  //     console.log(scrollYProgress.get());
  //   });
  // }, [scrollYProgress]);

  return (
    <>
      <motion.section
        ref={targetRef}
        className={styles.content}
        style={{ background }}
        exit={{ position: "relative" }}
      >
        <motion.h1 className={clsx(styles.text, styles.title)} style={{ opacity: titleOpacity }}>
          요즘 뜨는 트랜드는 뭐가 있을까요?
        </motion.h1>
        <motion.h2
          className={clsx(styles.text, styles.subtitle)}
          style={{ opacity: subtitleOpacity, color: subtitleColor, position, top: subtitleTop }}
        >
          지금 확인하세요.
        </motion.h2>
      </motion.section>
      <div className="box">
        <div className="inner" />
      </div>
    </>
  );
};

export default Landing;
