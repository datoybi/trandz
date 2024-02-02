import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/keywords/item.module.css";

const KeywordItem = ({ keyword, pastPubDate }: any) => {
  const currentDate = new Date(keyword.pubDate).toLocaleDateString();
  const pastDate = pastPubDate && new Date(pastPubDate).toLocaleDateString();
  const showDate = pastDate !== currentDate;

  const keywordNewsHtml = keyword.news.map((newsElement: any) => (
    <Link
      className={styles.newsList}
      href={newsElement.url}
      key={newsElement.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.newsTitle} dangerouslySetInnerHTML={{ __html: newsElement.title }} />
      <span className={styles.newsSource}>{newsElement.source}</span>
    </Link>
  ));

  return (
    <li>
      {showDate && <span className={styles.keywordDate}>{currentDate}</span>}
      <div className={styles.keywordItem}>
        <span className={styles.keywordTitle}>{keyword.keyword}</span>
        <div className={styles.keywordTraffic}>
          {keyword.traffic}
          <span>회 이상 검색</span>
        </div>
        <div className={styles.keywordNews}>
          <div className={styles.newsLink}>{keywordNewsHtml}</div>
          <Image
            src={keyword.imgURL}
            alt={`${keyword.keyword} 대표사진`}
            width={100}
            height={100}
          />
        </div>
      </div>
    </li>
  );
};

export default KeywordItem;
