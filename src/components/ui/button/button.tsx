import styles from './button.module.css';

type ButtonProps = {
  onClick?: () => void;
  name: string;
  disabled?: boolean;
  type?: 'submit' | 'button';
  onClose?: () => void;
};

export const Button = ({ onClick, name, disabled, type }: ButtonProps) => {
  const isTransparent = name === 'Back' || name === 'Add';

  const buttonClassName = `${styles.button} ${isTransparent ? styles.transparent : ''}`;

  return (
    <button onClick={onClick} disabled={disabled} type={type} className={buttonClassName}>
      {name}
    </button>
  );
};
