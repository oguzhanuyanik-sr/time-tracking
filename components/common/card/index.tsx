import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Ellipsis from '@/public/images/icon-ellipsis.svg';
import { cardIcons, cardColors } from './constants';

interface CardProps {
  data: {
    id: number;
    title: string;
    subtitle: string;
    hour: string;
    last: string;
  };
}

const Card = ({ data }: CardProps) => {
  const { id, title, subtitle, hour, last } = data;

  return (
    <div className={`${styles.componentWrapper}`}>
      <div className={`${cardColors[id]} ${styles.backgroundWrapper}`}>
        <Image
          src={cardIcons[id]}
          alt='Icon'
          height={25}
          width={70}
          sizes='100%'
          className={`${styles.backgroundImage}`}
        />
      </div>

      <div className={`${styles.cardWrapper}`}>
        <div className={`${styles.cardTopWrapper}`}>
          <p className={`${styles.cardHeader}`}>{title}</p>
          <div className={`${styles.cardHeader}`}>
            <Image
              src={Ellipsis}
              alt='Pattern'
              height={5}
              width={16}
              sizes='100%'
              className={`${styles.cardImage}`}
            />
          </div>
        </div>

        <div className={`${styles.footerWrapper}`}>
          <p className={`${styles.hourHeading}`}>{hour}hrs</p>
          <p className={`${styles.hourSubtitle}`}>
            {subtitle} - {last}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
