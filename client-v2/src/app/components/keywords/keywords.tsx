"use client";
// import Title from "@/app/components/ui/title";
// import KeywordList from "@/app/components/keywords/list";
import { useRef } from "react";
import styles from "@/styles/components/keywords/keywords.module.css";
import { motion } from "framer-motion";
import { keywords } from "@/api/placeholder-data";

const TRANSITION_START = 100;
const TRANSITION_END = 300;
const FLOATABLE_WIDTH = 1330 - 150;
const FLOATABLE_HEIGHT = 760 - 50;

const KeywordComponent = () => {
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  return (
    <section className={styles.wrapper}>
      <article className={styles.content}>
        <motion.div className="dragArea" ref={constraintsRef} />
        {keywords.map(keyword => (
          <motion.div
            drag
            className="box"
            dragConstraints={constraintsRef}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 2 }}
            animate={{
              x: [
                getRandomArbitrary(0, FLOATABLE_WIDTH),
                getRandomArbitrary(0, FLOATABLE_WIDTH),
                getRandomArbitrary(0, FLOATABLE_WIDTH),
                getRandomArbitrary(0, FLOATABLE_WIDTH),
                getRandomArbitrary(0, FLOATABLE_WIDTH),
              ],
              y: [
                getRandomArbitrary(0, FLOATABLE_HEIGHT),
                getRandomArbitrary(0, FLOATABLE_HEIGHT),
                getRandomArbitrary(0, FLOATABLE_HEIGHT),
                getRandomArbitrary(0, FLOATABLE_HEIGHT),
                getRandomArbitrary(0, FLOATABLE_HEIGHT),
              ],
            }}
            transition={{
              duration: getRandomArbitrary(TRANSITION_START, TRANSITION_END),
              repeat: Infinity,
            }}
          >
            {keyword.keyword}
          </motion.div>
        ))}

        {/* <Title>
          구글에 검색한 <br />
          인기 급상승 키워드를 확인해보세요.
        </Title>
        <KeywordList /> */}
      </article>
    </section>
  );
};

export default KeywordComponent;
