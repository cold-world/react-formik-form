import styles from './label.module.css';

type LabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
  isCheckBox?: boolean;
};

export const Label = ({ htmlFor, children, isCheckBox }: LabelProps) => {
  
  const labelClassName = `${styles.label} ${isCheckBox ? styles.checkbox : ''}`;


  return (
    <label htmlFor={htmlFor} className={labelClassName}>
      {children}
    </label>
  );
};
