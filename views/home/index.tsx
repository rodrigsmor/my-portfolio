'use client';

import styles from "./home.module.css";
import { Button } from "@/components/buttons/button";
import { ArrowUpRight, RocketLaunch } from "phosphor-react";
import { SocialLinks } from "@/components/layout/social-links";
import { ScrollDownIndicator } from "@/components/textual/scroll-down-indicator";

export function Home() {
  return (
    <section className={`${styles.home}`}>
      <header className={styles.homeContent}>
        <h1 className={styles.homeGreetings}>
          Hello, I’m a
          <strong className="uppercaseText">
            Software
            <span>Developer</span>
          </strong>
          <span className={styles.secondaryRoleWrapper}>
            <span className="minorCoordinating">&amp; </span>
            <span className="secondaryRole">UI/UX Designer</span>
          </span>
        </h1>
        <div className={styles.separatorLine}></div>
        <p className={styles.homeDescription}>
          I look forward to creating innovative and reliable solutions with you. Explore my portfolio and discover how I can bring value to your project.
        </p>
      </header>
      <div className={styles.ctaGroup}>
        <Button theme="gradient">
          <RocketLaunch width={24} height={24} weight="bold" /> Let’s Work Together
        </Button>
        <Button theme="outline">
          View My Projects<ArrowUpRight width={24} height={24}weight="bold" />
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