import styles from './header.module.css'
import { List } from 'phosphor-react';
import { Logo } from '@/components/textual/logo';
import { IconButton } from '@/components/buttons/icon-button';
import { OutlineSelect } from '../../forms/outline-select/index';

export function Header() {
  return (
    <header className={`${styles.header}`}>
      <Logo />
      <IconButton onClick={() => { }}>
        <List size={24} weight="bold" />
      </IconButton>
      <OutlineSelect />
    </header>
  );
}