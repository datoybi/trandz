// @ts-nocheck
"use client";
// import Title from "@/app/components/ui/title";
// import KeywordList from "@/app/components/keywords/list";
import { useRef, useState, useMemo, useEffect, useLayoutEffect } from "react";
import styles from "@/styles/components/keywords/keywords.module.css";
import { motion, LayoutGroup, Variants } from "framer-motion";
import { keywords } from "@/api/placeholder-data";

const TRANSITION_START = 100;
const TRANSITION_END = 300;
const FLOATABLE_WIDTH = 1330 - 150;
const FLOATABLE_HEIGHT = 760 - 50;

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const cardVariants: Variants = {
  offscreen: {},
};

const Card = ({ keyword }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [selected, setSelected] = useState(null); // null is initial, false is unselected keyword, keyword
  // open된 상태에서 drag올리면 접히게 하기
  const x = useMemo(() => getRandomArbitrary(0, FLOATABLE_WIDTH), []);
  const y = useMemo(() => getRandomArbitrary(0, FLOATABLE_HEIGHT), []);
  const delay = getRandomArbitrary(0, 3);

  return (
    <>
      <motion.div
        layout
        ref={cardRef}
        className={`box2 ${selected && "opened"}`}
        initial={{ y: FLOATABLE_HEIGHT + 100, x: x, opacity: 0 }}
        whileInView={{ x: selected ? 0 : x, y: selected ? 0 : y, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        onClick={() => {
          setSelected(keyword);
        }}
        transition={{
          type: selected === null ? "spring" : "",
          duration: 0.3,
          damping: 12,
          repeat: 0,

          delay: selected === null ? delay : 0,
        }}
      >
        <p>{keyword}</p>
        {/* 나중에 expandItem으로 빼도 될듯 */}
        {selected && (
          <p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        )}
      </motion.div>
      {selected && <motion.div className="background" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setSelected(false)} />}
    </>
  );
};

const KeywordComponent = () => {
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  // const [selected, setSelected] = useState(null);
  // const [dimension, setDimension] = useState({ width: 0, height: 0 });

  // const [selectedDay, setSelectedDay] = useState<any>(null);
  // const days = [25, 26, 27, 28, 29];
  // console.log(selectedDay);

  return (
    <section className={styles.wrapper}>
      <article className={styles.content}>
        {keywords.map(keyword => (
          <Card key={keyword.keyword} keyword={keyword.keyword} />
        ))}

        {/* <motion.div className="dragArea" ref={constraintsRef} />
        {keywords.map(keyword => (
          <motion.div
            drag
            className="box"
            dragConstraints={constraintsRef}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 2 }}
            onClick={() => setSelected(keyword)}
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
        ))} */}

        {/* <Title>
          구글에 검색한 <br />
          인기 급상승 키워드를 확인해보세요.
        </Title>
        <KeywordList /> */}
      </article>
    </section>
    // <ul className="container">
    //   {days.map(day => (
    //     <motion.li
    //       key={day}
    //       className="item"
    //       initial={{ scale: 1 }}
    //       onClick={() => setSelectedDay(day)}
    //       animate={{
    //         position: selectedDay === day ? "fixed" : "static",
    //         borderRadius: selectedDay === day ? "0" : "1.5rem",
    //         scale: selectedDay === day ? 10 : 1,
    //       }}
    //       transition={{ duration: 0.2 }}
    //     >
    //       {day}
    //     </motion.li>
    //   ))}
    // </ul>
  );
};

export default KeywordComponent;
