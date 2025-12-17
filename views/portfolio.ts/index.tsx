import { Home } from "@/views/home";
import styles from "./portfolio.module.css";
import { Header } from "@/components/layout/header";

export default function Portfolio() {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}
