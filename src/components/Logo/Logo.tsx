import type { ComponentPropsWithoutRef } from 'react';
import logoMark from '../../assets/logo-mark.svg';
import styles from './Logo.module.css';

export type LogoVariant =
  | 'headerDesktop'
  | 'headerMobile'
  | 'footerDesktop'
  | 'footerMobile';

type LogoProps = {
  variant: LogoVariant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<'span'>, 'children'>;

export function Logo({ variant, className, ...rest }: LogoProps) {
  const classes = [styles.root, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...rest}>
      <img className={styles.mark} src={logoMark} alt="" />
      <span className={styles.wordmark}>Yellow Sapphire</span>
    </span>
  );
}
