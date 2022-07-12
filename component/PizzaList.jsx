import React from 'react'
import styles from "../styles/PizzaList.module.css"
import PizzaCard from './PizzaCard'

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>The Best Pizza in the town</h1>
        <p className={styles.desc}>
        The pizza itself looks so yummy, crispy and so cheesy.
     There is no better feeling in the world than a warm pizza box on your lap.
      My love for Pizza is very high. I am always hungry for pizza, be it any time of the day.
       Cheese is the secret ingredient of any food it makes any food taste yummy
        </p>
        <div className={styles.wrapper}>
          {pizzaList.map((pizza) => <PizzaCard key={pizza._id} pizza={pizza}/>
          )}
        </div>
    </div>
  );
};

export default PizzaList;