import { Home } from "@/views/home";
import styles from "./portfolio.module.css";
import { Header } from "@/components/layout/header";
import { CarouselDivider } from "@/components/layout/carousel-divider";

export default function Portfolio() {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <main>
        <Home />
        <CarouselDivider/>
      </main>
    </div>
  );
}
