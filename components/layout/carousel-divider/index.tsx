'use client';

import { PathToDot, useTranslate } from '@/hooks/useTranslate';
import styles from './carousel-divider.module.css';
import React from 'react';
import { Dictionary } from '@/utils/functions/dictionaries';

export function CarouselDivider() {
  const { t } = useTranslate();

  const carouselItems: PathToDot<Dictionary>[] = [
    'Home.Carousel.Group.web',
    'Home.Carousel.Group.uiux',
    'Home.Carousel.Group.devops',
    'Home.Carousel.Group.api',
    'Home.Carousel.Group.architecture',
    'Home.Carousel.Group.cloud',
    'Home.Carousel.Group.cicd',
    'Home.Carousel.Group.database',
    'Home.Carousel.Group.mobile',
    'Home.Carousel.Group.agile',
    'Home.Carousel.Group.ai'
  ];

  return (
    <section
      aria-label={t('Home.Carousel.sectionLabel')}
      className={styles.carouselContainer}
    >
      <ul className={styles.carouselGroup}>
        {carouselItems.map((item) => (
          <React.Fragment key={item}>
            <li key={item} className={styles.carouselItem}>
              {t(item)}
            </li>
            <span className={styles.separatorDot}></span>
          </React.Fragment>
        ))}
      </ul>
      <ul aria-hidden className={styles.carouselGroup}>
        {carouselItems.map((item) => (
          <React.Fragment key={item}>
            <li key={item} className={styles.carouselItem}>
              {t(item)}
            </li>
            <span aria-hidden className={styles.separatorDot}></span>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}