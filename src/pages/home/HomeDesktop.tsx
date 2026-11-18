import styles from './HomeDesktop.module.css';
import { Logo } from '../../components/Logo/Logo'


export function HomeDesktop() {
  return <main className={styles.root}>Home (desktop) 
    <Logo variant="headerDesktop" />
    <Logo variant="headerMobile" />
    <Logo variant="footerDesktop" />
    <Logo variant="footerMobile" />
  </main>;
}
