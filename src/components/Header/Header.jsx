import styles from './Header.module.css';
// import Logo from '../../../public/Logo';

function Header() {
  return <img className={styles.logo} src="/Logo.svg" alt="Logo Journal"></img>;
}

export default Header;
