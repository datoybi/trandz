"use client";
import { useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "@/styles/components/keywords/keywords.module.css";
import { keywords } from "@/api/placeholder-data";

const FLOATABLE_WIDTH = 1330 - 150;
const FLOATABLE_HEIGHT = 760 - 50;
const OFFSCREEN_HEIGHT = FLOATABLE_HEIGHT;
const backgrounds = ["#f06844", "#ee4c54", "#d45e95", "#9c6ca6", "#6583c1"];

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type selectedType = {
  state: "initial" | "selected";
  data: number | undefined;
};

// TODO: open된 상태에서 drag올리면 접히게 하기

const Card = ({ keyword }: { keyword: any }) => {
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
        {/* TODO: 나중에 expandItem으로 빼도 될듯 */}
        {isExpanded ? (
          <div className={styles.expandCard}>
            <Image src={keyword.imgURL} className={styles.expandImage} alt={`${keyword.keyword} 대표사진`} width={100} height={100} />
            <h3 className={styles.expandKeyword}>{keyword.keyword}</h3>
            <p className={styles.expandDate}>{dayjs(keyword.pubDate).format("YYYY.MM.DD")}</p>
            <span className={styles.expandBadge}>{keyword.traffic}회 이상 검색</span>
            <ul className={styles.expandNewsList}>
              <li>
                <Link href={keyword.news[0].url} className={styles.expandNewsItem} target="_blank" rel="noopener noreferrer">
                  <span className={styles.newsItemTitle} dangerouslySetInnerHTML={{ __html: keyword.news[0].title }} />
                  <span className={styles.newsItemSource}>{keyword.news[0].source}</span>
                </Link>
              </li>
              <li>
                <Link href={keyword.news[1].url} className={styles.expandNewsItem} target="_blank" rel="noopener noreferrer">
                  <span className={styles.newsItemTitle} dangerouslySetInnerHTML={{ __html: keyword.news[1].title }} />
                  <span className={styles.newsItemSource}>{keyword.news[1].source}</span>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <p className={styles.reducedText}>{keyword.keyword}</p>
        )}
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

const KeywordComponent = () => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.content}>
        {keywords.map(keyword => (
          <Card key={keyword.keyword} keyword={keyword} />
        ))}
      </article>
    </section>
  );
};

export default KeywordComponent;
