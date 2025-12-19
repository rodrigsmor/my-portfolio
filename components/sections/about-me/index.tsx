'use client';

import styles from "./about-me.module.css";
import { useTranslate } from "@/utils/hooks/useTranslate";
import { SectionTitle } from "@/components/layout/section-title";

import { Skills } from "../skills";
import { CareerOverview } from "../career-overview";

export function AboutMe() {
  const { t } = useTranslate();

  return (
    <section className={styles.aboutMeContainer} aria-labelledby="about_me">
      <p role="doc-subtitle" className={styles.aboutMeGreetings}>
        <span aria-hidden></span>
        {t('AboutMe.Greetings')}
        <span aria-hidden></span>
      </p>
      <span aria-hidden className={styles.scrollLine}></span>
      <SectionTitle title="AboutMe.SectionTitle" sectionKey="about_me" />
      <CareerOverview />
      <Skills />
    </section>
  );
}