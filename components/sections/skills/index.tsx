import styles from './skills.module.css';
import { PathToDot, useTranslate } from '@/utils/hooks/useTranslate';
import { SubsectionTitle } from '@/components/textual/subsection-title';
import { Dictionary } from '@/utils/functions/dictionaries';
import { LanguageCard } from '@/components/cards/language-card';

type Language = {
  percentage: number;
  name: PathToDot<Dictionary>;
  level: PathToDot<Dictionary>;
  title: 'english' | 'spanish' | 'portuguese';
}

// type Skill = {
//   name: string;
//   title: string;
//   src: string;
//   yearsOfExperience: number;
// };

export function Skills() {
  const { t } = useTranslate();

  const languages: Language[] = [
    {
      title: 'portuguese',
      percentage: 100,
      name: 'AboutMe.Skills.Languages.pt-BR.name',
      level: 'AboutMe.Skills.Languages.pt-BR.level',
    },
    {
      title: 'english',
      percentage: 70,
      name: 'AboutMe.Skills.Languages.en-US.name',
      level: 'AboutMe.Skills.Languages.en-US.level',
    },
    {
      title: 'spanish',
      percentage: 15,
      name: 'AboutMe.Skills.Languages.es-419.name',
      level: 'AboutMe.Skills.Languages.es-419.level',
    },
  ];

  return (
    <section aria-labelledby="AboutMe_Skills" className={styles.skillsContainer}>
      <SubsectionTitle id="AboutMe_Skills" title={t('AboutMe.Skills.title')} />
      <div className={styles.contentWrapper}>
        <div className={styles.abilitiesOverview}>
          <p>{t('AboutMe.Skills.content')}</p>
          <section aria-labelledby="languages-title" className={styles.languagesSection}>
            <h5 id="languages-title" className="languages-title">
              {t('AboutMe.Skills.Languages.title')}
            </h5>
            <ul className={styles.listOfLanguages}>
              {languages.map((language) => {
                return (
                  <LanguageCard
                    key={language.title}
                    name={t(language.name)}
                    level={t(language.level)}
                    percentage={language.percentage}
                  />
                );
              })}
            </ul>
          </section>
        </div>
        <div className={styles.listOfSkills}>

        </div>
      </div>
      <div style={{ width: "100%", height: '100dvh', background: 'red' }} ></div>
    </section>
  );
}