import Title from "@/app/components/ui/title";
import KeywordList from "@/app/components/keywords/list";
import styles from "@/styles/components/keywords/keywords.module.css";

const YoutubeComponent = () => {
  return (
    <article className={styles.wrapper}>
      <section className={styles.content}>
        <Title>
          인기 급상승 중인 <br />
          유튜브를 확인해보세요.
        </Title>
        <KeywordList />
      </section>
    </article>
  );
};

export default YoutubeComponent;
