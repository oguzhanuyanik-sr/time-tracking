'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { profile, periods } from '@/app/api/response.json';
import styles from './styles.module.css';
import { useGlobalContext } from '@/app/context/store';

const { title, subtitle, img } = profile;
const buttons = Object.keys(periods);

type Props = {};

const Profile = (props: Props) => {
  const { time, setTime } = useGlobalContext();

  return (
    <div className={`${styles.componentWrapper}`}>
      <section className={`${styles.profileWrapper}`}>
        <div>
          <Image
            className={`${styles.profileAvatar}`}
            src={img}
            alt='Avatar'
            height={78}
            width={78}
            sizes='100%'
          />
        </div>
        <div>
          <span className={`${styles.profileSubtitle}`}>{subtitle}</span>
          <h1 className={`${styles.profileTitle}`}>{title}</h1>
        </div>
      </section>

      <section>
        <ul className={`${styles.navWrapper}`}>
          {buttons.map((title) => (
            <li
              key={title}
              onClick={() => setTime(title)}
              className={`${styles.navButton} ${
                time === title ? styles.navButtonActive : ''
              }`}
            >
              {title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Profile;
