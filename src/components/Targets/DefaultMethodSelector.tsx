import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Method, methods } from '../../utils/types';
import styles from './styles/DefaultMethodSelector.module.css';

export default function DefaultMethodSelector({ defaultMethod, setDefaultMethod }:
  {
    defaultMethod: Method,
    setDefaultMethod: React.Dispatch<React.SetStateAction<Method>>
  }) {
  return (
    <div className={styles.methods}>
      {methods.map(m => (
        <div
          className={(defaultMethod === m ? styles.selected : '')}
          key={m.id}
          onClick={() => setDefaultMethod(m)}
        >
          <FontAwesomeIcon icon={m.icon} />
          <h3>{m.name}</h3>
        </div>
      ))}
    </div>
  );
}
