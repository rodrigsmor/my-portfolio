'use client';

import styles from "./home.module.css";
import { Header } from "@/components/layout/header";

export function Home() {
  return (
    <main className={`${styles.home}`}>
      <Header />
      
    </main>
  );
}