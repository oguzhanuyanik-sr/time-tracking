import React from 'react';
import styles from './styles.module.css';

const CardLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className={`${styles.componentWrapper}`}>{children}</section>;
};

export default CardLayout;
