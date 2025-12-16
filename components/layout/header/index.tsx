'use client';

import styles from './header.module.css'
import { List } from 'phosphor-react';
import { Logo } from '@/components/textual/logo';
import { IconButton } from '@/components/buttons/icon-button';
import { OutlineSelect } from '../../forms/outline-select/index';
import { navbarSections } from '@/utils/consts/sections';
import { NavbarTab } from '@/components/textual/navbar-tab';
import { SectionsKey } from '@/utils/@types/sections';

export function Header() {
  const currentSection: SectionsKey = 'home';
  return (
    <header className={`${styles.header}`}>
      <Logo />
      <IconButton onClick={() => { }}>
        <List size={24} weight="bold" />
      </IconButton>
      <nav className={`navbar ${styles.navbar}`}>
        <ul>
          {navbarSections.map((item) => (
            <li key={item.value}>
              <NavbarTab
                isCurrent={currentSection === item.value}
                label={item.label}
                value={item.value}
              />
            </li>
          ))}
        </ul>
      </nav>
      <OutlineSelect />
    </header>
  );
}