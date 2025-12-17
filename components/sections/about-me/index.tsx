'use client';

import { useTranslate } from "@/utils/hooks/useTranslate";
import styles from "./about-me.module.css";
import { SectionTitle } from "@/components/layout/section-title";

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
      <h3 className={styles.subtitleText}>
        {t('AboutMe.SectionSubtitle.prefix')} 👋🏽
        <span>
          {t('AboutMe.SectionSubtitle.label')}
          <em>Rodrigo Moreira</em>!
        </span>
      </h3>

      <div className="content">
        <p>textos desenvolvendo a ideia...</p>
      </div>
    </section>
  );
}