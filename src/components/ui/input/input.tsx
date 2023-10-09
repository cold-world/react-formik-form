import styles from './input.module.css';

type InputProps = {
  id: string;
  type: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const Input = ({ id, type, value, onChange, placeholder }: InputProps) => {
  const isMainScreen = window.location.pathname === '/';

  const inputClassName = `${styles.input} ${isMainScreen ? styles.homeInput : ''}`;

  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={inputClassName}
    />
  );
};





