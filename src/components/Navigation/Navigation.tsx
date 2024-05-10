import { Link } from 'react-router-dom';
import logo from './styles/COMPER.png';
import styles from './styles/Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <h2>Mon profil de compétences Shell</h2>
    </nav >
  );
}
