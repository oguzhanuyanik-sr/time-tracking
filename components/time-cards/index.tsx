import React from 'react';
import styles from './styles.module.css';
import { periods } from '@/app/api/response.json';
import { useGlobalContext } from '@/app/context/store';
import TimeCard from '../common/time-card';

type Props = {};

const TimeCards = (props: Props) => {
  const { time } = useGlobalContext();
  const data = periods[time];

  return (
    <section className='mt-6 lg:flex lg:flex-wrap lg:mt-0 lg:w-[71%] lg:justify-between'>
      {data.map((item, index) => (
        <TimeCard key={index} data={item} />
      ))}
    </section>
  );
};

export default TimeCards;
