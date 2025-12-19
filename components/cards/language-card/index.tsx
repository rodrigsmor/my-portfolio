import { useTranslate } from '@/utils/hooks/useTranslate';
import styles from './language-card.module.css';

interface LanguageCardProps {
  name: string;
  percentage: number;
  level: string;
}

export function LanguageCard({ level, name, percentage }: LanguageCardProps) {
  const { t } = useTranslate();
  const percentageParsed = `${percentage}%`;

  return (
    <li className={styles.languageCardContainer}>
      <h5>{name}</h5>

      <p>
        <span className="sr-only">{t('ScreenReader.languageLevelLabel')}</span>
        {level}
      </p>

      <div
        className={styles.progressBar}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        aria-label={`${t('ScreenReader.ProficiencyLevel')} ${name}: ${percentageParsed}`}
      >
        <div
          className="progress-bar"
          style={{ width: percentageParsed }}
        />
      </div>
    </li>
  );
}