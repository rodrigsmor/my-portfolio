import { SectionsKey } from '@/utils/@types/sections';

import styles from './navbar.module.css';
import { PathToDot, useTranslate } from '@/utils/hooks/useTranslate';
import { Dictionary } from '@/utils/functions/dictionaries';

interface NavbarTabProps {
  value: SectionsKey;
  label: string;
  isCurrent: boolean;
}

export function NavbarTab({ isCurrent, label, value }: NavbarTabProps) {
  const {t} = useTranslate();

  return (
    <a
      href={`#${value}`}
      aria-current={isCurrent ? 'page' : 'false'}
      className={styles.navbarTab}
    >
      {t(label as PathToDot<Dictionary>)}
    </a>
  );
}