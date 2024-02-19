import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/keywords/expand-item.module.css";

const ExpandItem = ({ keyword }: any) => {
  return (
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
  );
};

export default ExpandItem;
