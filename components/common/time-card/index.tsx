import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Ellipsis from '@/public/images/icon-ellipsis.svg';
import { cardIcons, cardColors } from './constants';

type Props = {};

const TimeCard = ({ data }: Props) => {
  const { id, title, subtitle, hour, last } = data;

  return (
    <div className='w-full mb-6 lg:w-[31%]'>
      <div
        className={`${cardColors[id]} relative h-[50px] rounded-t-[15px] z-10 overflow-hidden`}
      >
        <Image
          src={cardIcons[id]}
          alt='Icon'
          height={25}
          width={70}
          sizes='100%'
          className='absolute top-[-10px] right-[20px]'
        />
      </div>

      <div className='bg-purple-400 rounded-[15px] relative z-20 mt-[-10px] px-5 py-[30px]'>
        <div className='flex justify-between items-center'>
          <p className='font-medium text-lg'>{title}</p>
          <div className='cursor-pointer hover:brightness-200 transition-all py-4 pl-4'>
            <Image
              src={Ellipsis}
              alt='Pattern'
              height={5}
              width={16}
              sizes='100%'
              className='h-[5px] w-4'
            />
          </div>
        </div>

        <div className='flex flex-wrap justify-between items-center mt-2'>
          <p className='font-light text-2xl lg:text-[56px] lg:leading-[1] lg:mt-3 lg:mb-2'>
            {hour}hrs
          </p>
          <p className='text-purple-100 text-[15px]'>
            {subtitle} - {last}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
