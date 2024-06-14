import styles from './Logo.module.css';

function Logo({ image }) {
  console.log('Logo rendered');
  return <img className={styles.logo} src={image} alt="Logo Journal"></img>;
}

export default Logo;
