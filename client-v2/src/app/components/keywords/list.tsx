import KeywordItem from "@/app/components/keywords/item";
import styles from "@/styles/components/keywords/list.module.css";
import { keywords } from "@/api/placeholder-data";

const KeywordList = () => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.content}>
        {keywords.map(keyword => (
          <KeywordItem key={keyword.keyword} keyword={keyword} />
        ))}
      </article>
    </section>
  );
};

export default KeywordList;
