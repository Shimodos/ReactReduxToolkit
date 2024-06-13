import styles from './Header.module.css';
import SelectUser from '../SelectUser/SelectUser';

function Header() {
  return (
    <>
      <img className={styles.logo} src="/Logo.svg" alt="Logo Journal"></img>
      <SelectUser />
    </>
  );
}

export default Header;
