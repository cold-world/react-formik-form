import styles from './frame.module.css';

type FrameProps = {
  children: React.ReactNode;
};

export const Frame = ({ children }: FrameProps) => {
  const isNotMainScreen = window.location.pathname !== '/';

  const frameClassName = `${styles.frame} ${isNotMainScreen ? styles.homeFrame : ''}`;

  return <div className={frameClassName}>{children}</div>;
};

