import Title from "@/app/components/ui/title";
import KeywordList from "@/app/components/keywords/list";
import styles from "@/styles/components/keywords/keywords.module.css";

const KeywordComponent = () => {
  return (
    <article className={styles.wrapper}>
      <section className={styles.content}>
        <Title>
          구글에 검색한 <br />
          인기 급상승 키워드를 확인해보세요.
        </Title>
        <KeywordList />
      </section>
    </article>
  );
};

export default KeywordComponent;
