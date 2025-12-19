import Image from "next/image";
import styles from "./career-overview.module.css";
import { useTranslate } from "@/utils/hooks/useTranslate";
import { Button } from "@/components/buttons/button";
import { Check, DownloadSimple, StarFour } from "phosphor-react";

import ProfileImage from "@/public/MyProfile.png";

export function CareerOverview() {
  const { t, getObject } = useTranslate();

  const achievementsObject = getObject('AboutMe.Achievements.Items') as { [s: string]: { title: string; description: string }; };
  const achievements = Object.values(achievementsObject);

  return (
    <div className={styles.mainContent}>
      <h3 className={styles.subtitleText}>
        {t('AboutMe.SectionSubtitle.prefix')} 👋🏽
        <span>
          {t('AboutMe.SectionSubtitle.label')}
          <em>Rodrigo Moreira</em>!
        </span>
      </h3>
      <figure className={styles.profileImage}>
        <Image src={ProfileImage} width="382" height="430" alt={t('AboutMe.altText')} />
      </figure>
      <div className={styles.introductionText} aria-describedby="AboutMe-description">
        <p id="AboutMe-description" className={styles.profileDescription}>
          {t('AboutMe.introductionText')}
        </p>
        <section className={styles.achievementsSection} aria-labelledby="achievement-title">
          <h4 id="achievement-title" className="achievement-title">
            {t('AboutMe.Achievements.title')}
          </h4>
          <ul className={styles.achievements}>
            {achievements.map((achievement) => (
              <li key={achievement.title} className={styles.achievementItem}>
                <span aria-hidden><Check width={16} height={16} weight="bold" /></span>
                <p className={`${styles.profileDescription} achievement-item`}>
                  <strong>{achievement.title}</strong>
                  {' '}– {achievement.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className={styles.sideInfo} aria-label={t('AboutMe.closingParagraph')}>
        <div aria-describedby="conclusive-text">
          <span aria-hidden><StarFour width={18} height={18} weight="fill" /></span>
          <p id="conclusive-text" className={styles.profileDescription}>
            {t('AboutMe.conclusiveText')}
          </p>
        </div>
        <Button>
          <DownloadSimple weight="bold" height={24} width={24} />
          {t('AboutMe.downloadButton')}
        </Button>
      </div>
    </div>
  );
}