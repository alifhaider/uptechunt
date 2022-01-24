import ProfileCover from '../public/Profile_cover.jpg';
import styles from '../styles/layout/profileLayout.module.css';

import Image from 'next/image';

export default function ProfileLayout({ children }) {
  return (
    <>
      <div className={styles.hero}>
        <Image
          layout="fill"
          objectFit="cover"
          src={ProfileCover}
          alt="Cover Image"
          className={styles.hero__image}
        />
      </div>
      <div className={styles.content}>{children}</div>
    </>
  );
}
