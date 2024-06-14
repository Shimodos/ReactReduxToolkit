import styles from './Logo.module.css';
import { memo } from 'react';

function Logo({ image }) {
  console.log('Logo rendered');
  return <img className={styles.logo} src={image} alt="Logo Journal"></img>;
}

export default memo(Logo);
