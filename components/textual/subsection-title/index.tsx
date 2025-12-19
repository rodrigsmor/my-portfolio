import styles from './subsection-title.module.css';

interface SubsectionTitleProps {
  id: string;
  title: string;
}

export function SubsectionTitle({ id, title }: SubsectionTitleProps) {
  return (
    <header id={id} className={styles.subsectionTitle}>
      <h4>{title}</h4>
    </header>
  );
}