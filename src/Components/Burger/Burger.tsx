import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import styles from './Burger.module.scss';

const Burger = () => {
  return (
    <div className={styles.BurgerWrapper}>
      <BurgerIngredient type='bread-top' />
      <BurgerIngredient type='cheese' />
      <BurgerIngredient type='meat' />
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
