import "normalize.css/normalize.css";
import Landing from "./components/landing";
import Nav from "./components/nav";
import styles from "@/styles/page.module.css";
import KeywordComponent from "@/app/components/keywords/keywords";
import YoutubeComponent from "./components/youtube/youyube";

export default function Home() {
  return (
    <main>
      <div className="App">
        <Landing />
        {/* <section className={styles.landing}>
          <Landing />
          <Nav />
        </section> */}
        {/* <KeywordComponent /> */}
        {/* <YoutubeComponent /> */}
        {/* <Keywords /> */}
        {/*   <News />
            <Youtubes ref={youtubeRef} />
            <TVTrend />
            <Movies ref={movieRef} />
            <Music />*/}
        {/* </article> */}
        {/* <Footer /> */}
      </div>
    </main>
  );
}
