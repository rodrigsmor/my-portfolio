import { Home } from "@/views/home";
import styles from "./page.module.css";
import { Header } from "@/components/layout/header";

export default function Page() {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}
