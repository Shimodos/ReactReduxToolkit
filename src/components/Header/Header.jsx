import { useState } from 'react';
import styles from './Header.module.css';
import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';

const logos = ['/Logo.svg', '/vite.svg'];

function Header() {
  const [logo, setLogo] = useState(0);

  const toggleLogo = () => {
    setLogo((prev) => (prev === 0 ? 1 : 0));
  };
  return (
    <>
      <img className={styles.logo} src={logos[logo]} alt="Logo Journal"></img>
      <SelectUser />
      <Button onClick={toggleLogo}>Toggle logo</Button>
    </>
  );
}

export default Header;
