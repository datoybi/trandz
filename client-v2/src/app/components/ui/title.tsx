import styles from "@/styles/ui/title.module.css";

const Title = ({ children }: any) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
