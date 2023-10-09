import icon from '../../../assets/folder-icon.png';

import styles from './main-heading.module.css';

export const MainHeading = () => {
  return (
    <div className={styles.heading}>
      <div className={styles.avatar}>AI</div>
      <div className={styles.info}>
        <p>Andreev Igor</p>
        <ul>
          <li>
            <a href='https://t.me/hypendope'>
              <span className={styles.icon}>
                <img src={icon} alt='Telegram' />
              </span>
              Telegram
            </a>
          </li>
          <li>
            <a href='https://github.com/cold-world'>
              <span className={styles.icon}>
                <img src={icon} alt='GitHub' />
              </span>
              GitHub
            </a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1AvioZrlAwEfpgujgrQsH_nyPsGGGRgU_/view?usp=sharing'>
              <span className={styles.icon}>
                <img src={icon} alt='Resume' />
              </span>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
