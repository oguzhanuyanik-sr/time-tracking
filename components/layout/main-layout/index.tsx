import React from 'react';
import styles from './styles.module.css';

type Props = {};

const MainLayout = ({ children }: Props) => {
  return <main className={`${styles.componentWrapper}`}>{children}</main>;
};

export default MainLayout;
