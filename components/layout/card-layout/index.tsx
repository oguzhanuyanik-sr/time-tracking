import React from 'react';
import styles from './styles.module.css';

type Props = {};

const CardLayout = ({ children }: Props) => {
  return <section className={`${styles.componentWrapper}`}>{children}</section>;
};

export default CardLayout;
