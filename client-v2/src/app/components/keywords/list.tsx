import { keywords } from "@/api/placeholder-data";
import KeywordItem from "./item";
import styles from "@/styles/components/keywords/list.module.css";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const KeywordList = () => {
  // console.log(keywords);

  return (
    <>
      <ul>
        {keywords.map((keyword, index) => (
          <KeywordItem
            key={`${new Date(keyword.pubDate).getTime()}_${keyword.keyword}`}
            keyword={keyword}
            pastPubDate={index !== 0 && keywords[index - 1].pubDate}
          />
        ))}
      </ul>
      <PlusCircleIcon width={40} className={styles.plusButton} />
    </>
  );
};

export default KeywordList;
