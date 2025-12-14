import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './icon-button.module.css';

type HTMLButtonProps = ComponentPropsWithoutRef<'button'>;

type IconButtonProps = HTMLButtonProps & {
  children: ReactNode;
}

export function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <button {...props} className={`icon-button ${styles.iconButton}`}>
      {children}
    </button>
  );
}