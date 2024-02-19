import Landing from "./components/landing";
// import Nav from "./components/nav";
// import styles from "@/styles/page.module.css";
import KeywordList from "@/app/components/keywords/list";
// import YoutubeComponent from "./components/youtube/youyube";

export default function Home() {
  return (
    <main>
      <div className="App">
        <Landing />
        <KeywordList />
        {/* <YoutubeComponent /> */}
        {/* <section className={styles.landing}>
          <Landing />
          <Nav />
        </section> */}
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
