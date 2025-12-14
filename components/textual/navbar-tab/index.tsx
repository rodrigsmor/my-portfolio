import { SectionsKey } from '@/utils/@types/sections';

import styles from './navbar.module.css';

interface NavbarTabProps {
  value: SectionsKey;
  label: string;
  isCurrent: boolean;
}

export function NavbarTab({ isCurrent, label, value }: NavbarTabProps) {
  return (
    <a
      href={`#${value}`}
      aria-current={isCurrent ? 'page' : 'false'}
      className={styles.navbarTab}
    >
      {label}
    </a>
  );
}