'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { profile, periods } from '@/app/api/response.json';
import styles from './styles.module.css';
import { useGlobalContext } from '@/app/context/store';

const { title, subtitle, img } = profile;
const buttons = Object.keys(periods);
const selectStyle = {
  true: 'text-white-100',
  false: 'text-purple-100',
};

type Props = {};

const ProfileCard = (props: Props) => {
  const { time, setTime } = useGlobalContext();

  return (
    <div className='lg:w-[23%] lg:mr-[2%] lg:mt-[-30px]'>
      <section
        className={`bg-purple-200 flex flex-wrap lg:flex-col items-center justify-center lg:items-start gap-5 py-8 lg:pb-20 px-4 lg:px-[28px] rounded-[15px] relative z-20`}
      >
        <div>
          <Image
            className='border-[3px] border-white-100 rounded-full min-w-[78px]'
            src={img}
            alt='Avatar'
            height={78}
            width={78}
            sizes='100%'
          />
        </div>
        <div>
          <span className='text-purple-100 text-15px'>{subtitle}</span>
          <h1 className='font-light text-2xl lg:text-[40px] lg:leading-[50px]'>
            {title}
          </h1>
        </div>
      </section>

      <section>
        <ul className='bg-purple-400 rounded-b-[15px] flex flex-wrap justify-evenly pb-[30px] pt-[40px] mt-[-10px] z-10 relative lg:flex-col lg:gap-4 lg:px-[30px]'>
          {buttons.map((title) => (
            <li
              key={title}
              onClick={() => setTime(title)}
              className={`cursor-pointer lg:text-lg capitalize hover:text-white-100 transition-all ${
                selectStyle[(time === title).toString()]
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

export default ProfileCard;
