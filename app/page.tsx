import { Home } from "@/views/home";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.pageLayout}>
      <Home />
    </div>
  );
}
