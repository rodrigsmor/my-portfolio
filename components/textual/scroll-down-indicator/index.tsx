import { SVGProps } from 'react';
import styles from './scroll-down-indicator.module.css';
import { useTranslate } from '@/utils/hooks/useTranslate';

const ScrollDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={88}
    viewBox="0 0 10 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1L1 87L9 76.8824"
      stroke="#F0ECF8"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ScrollDownIndicator() {
  const { t } = useTranslate();
  return (
    <div className={styles.scrollDownIndicator}>
      <p>{t('Home.scrollDown')}</p>
      <ScrollDownIcon />
    </div>
  );
}
