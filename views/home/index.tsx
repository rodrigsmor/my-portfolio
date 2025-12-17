'use client';

import styles from "./home.module.css";
import { Button } from "@/components/buttons/button";
import { ArrowUpRight, RocketLaunch } from "phosphor-react";
import { SocialLinks } from "@/components/layout/social-links";
import { ScrollDownIndicator } from "@/components/textual/scroll-down-indicator";
import { useTranslate } from "@/utils/hooks/useTranslate";

export function Home() {
  const { t } = useTranslate();
  return (
    <section className={`${styles.home}`}>
      <header className={styles.homeContent}>
        <h1 className={styles.homeGreetings}>
          {t('Home.Title.greetings')}
          <strong className="uppercaseText">
            {t('Home.Title.role')}
            <span>{t('Home.Title.highlightRole')}</span>
          </strong>
          <span className={styles.secondaryRoleWrapper}>
            <span className="minorCoordinating">&amp; </span>
            <span className="secondaryRole">{t('Home.Title.secondaryRole')}</span>
          </span>
        </h1>
        <div className={styles.separatorLine}></div>
        <p className={styles.homeDescription}>
          {t('Home.Description')}
        </p>
      </header>
      <div className={styles.ctaGroup}>
        <Button theme="gradient">
          <RocketLaunch width={24} height={24} weight="bold" /> {t('Home.PrimaryButton')}
        </Button>
        <Button theme="outline">
          {t('Home.SecondaryButton')}<ArrowUpRight width={24} height={24}weight="bold" />
        </Button>
      </div>
      <footer className={styles.footerSocialMedia}>
        <SocialLinks />
        <ScrollDownIndicator />
      </footer>
      <span className={styles.backgroundStyle} aria-hidden="true">
        <span className="particlesLayer"></span>
        <span className="blurLayer"></span>
      </span>
    </section>
  );
}