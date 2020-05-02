import React from 'react';
import Burger from '../../Components/Burger/Burger';
import styles from './BurgerBuilder.module.scss';

const BurgerBuilder = () => {
  return (
    <div className={styles.BurgerContainer}>
      <Burger />
    </div>
  );
};

export default BurgerBuilder;
