import styles from './button.module.css';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type HTMLButtonProps = ComponentPropsWithoutRef<'button'>;

type ButtonProps = HTMLButtonProps & {
  children: ReactNode;
  theme?: 'outline' | 'gradient' | 'transparent';
}

export function Button({ children, theme = 'gradient', ...props }: ButtonProps) {
  return (
    <button {...props} className={`button ${theme} ${styles.button}`}>
      {children}
    </button>
  );
}