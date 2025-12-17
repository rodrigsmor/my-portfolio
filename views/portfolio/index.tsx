import { Home } from "@/sections/home";
import styles from "./portfolio.module.css";
import { AboutMe } from "@/sections/about-me";
import { Header } from "@/components/layout/header";
import { CarouselDivider } from "@/components/layout/carousel-divider";

export default function Portfolio() {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <main>
        <Home />
        <CarouselDivider/>
        <AboutMe />
      </main>
    </div>
  );
}
