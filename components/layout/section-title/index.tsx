import { PathToDot, useTranslate } from '@/utils/hooks/useTranslate';
import styles from './section-title.module.css';
import { Dictionary } from '@/utils/functions/dictionaries';
import { SectionsKey } from '@/utils/@types/sections';

interface SectionTitleProps {
  title: PathToDot<Dictionary>;
  sectionKey: SectionsKey;
}

export function SectionTitle({ title, sectionKey }: SectionTitleProps) {
  const { t } = useTranslate();
  const content = t(title);

  return (
    <header className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle} id={sectionKey} data-text={content}>
        {content}
      </h2>
      <span className={styles.bottomLine} aria-hidden></span>
    </header>
  );
}