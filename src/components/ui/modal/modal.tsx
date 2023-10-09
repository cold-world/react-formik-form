import styles from './modal.module.css';
import { Button } from './../index';

type ModalProps = {
  isOpen: boolean;
  message: string;
  onClose: () => void;
};

export const Modal = ({ isOpen, message, onClose }: ModalProps) => {
  return (
    <div className={`${styles['modal-container']} ${isOpen ? styles.active : ''}`}>
      <div className={styles['modal-content']}>
        <span className={styles['modal-close']}>
          &times; {/* Close icon (you can customize this) */}
        </span>
        <p className={styles['modal-text']}>{message}</p>
        <div className={styles['modal-buttons']}>
          <Button name='Close' type='button' onClick={onClose} />
        </div>
      </div>
    </div>
  );
};
