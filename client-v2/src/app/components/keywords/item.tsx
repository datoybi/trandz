"use client";
import { useRef, useState, useMemo } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "@/styles/components/keywords/item.module.css";
import ExpandItem from "./expand-item";

const FLOATABLE_WIDTH = 1330 - 150;
const FLOATABLE_HEIGHT = 760 - 50;
const backgrounds = ["#f06844", "#ee4c54", "#d45e95", "#9c6ca6", "#6583c1"];

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type selectedType = {
  state: "initial" | "selected";
  data: number | undefined;
};

const KeywordItem = ({ keyword }: { keyword: any }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<selectedType>({ state: "initial", data: undefined });

  const x = useMemo(() => getRandomArbitrary(0, FLOATABLE_WIDTH), []);
  const y = useMemo(() => getRandomArbitrary(0, FLOATABLE_HEIGHT), []);
  const bgIndex = useMemo(() => Math.floor(getRandomArbitrary(0, backgrounds.length)), []);
  const delay = getRandomArbitrary(0, 3);
  const isExpanded = selected.state === "selected" && selected.data;

  return (
    <>
      <motion.div
        layout
        ref={cardRef}
        className={clsx(styles.keywords, { [styles.opened]: isExpanded })}
        initial={{
          y: FLOATABLE_HEIGHT + 100,
          x: x,
          opacity: 0,
          borderColor: backgrounds[bgIndex],
        }}
        whileInView={{
          x: isExpanded ? 0 : x,
          y: isExpanded ? 0 : y,
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.8 }}
        onClick={() => {
          setSelected({ state: "selected", data: keyword.keyword });
        }}
        transition={{
          type: selected.state === "initial" ? "spring" : "",
          duration: 0.25,
          damping: 11,
          repeat: 0,
          delay: selected.state === "initial" ? delay : 0,
        }}
      >
        {isExpanded ? <ExpandItem keyword={keyword} /> : <p className={styles.reducedText}>{keyword.keyword}</p>}
      </motion.div>
      {isExpanded && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected({ state: "selected", data: undefined })}
        />
      )}
    </>
  );
};

export default KeywordItem;
