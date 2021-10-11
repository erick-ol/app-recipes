import React, { useContext, useEffect, useState } from 'react';
import { Header, Footer, RecipeCard, Category } from '../../components';
import { GlobalContext } from '../../context/GlobalStorage';
import styles from '../css/foods.module.css';
import useFetch from '../../hooks/useFetch';

const Foods = () => {
  const { responseFetch } = useContext(GlobalContext);
  const [isList, setIsList] = useState(false);
  const [foods, setFoods] = useState(null);
  const { request } = useFetch();

  useEffect(() => {
    if (responseFetch === null || responseFetch.drinks) {
      request('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    }
  }, [responseFetch, request]);

  useEffect(() => {
    if (responseFetch) {
      const { meals } = responseFetch;
      if (meals) {
        const twelve = 12;
        setFoods(meals.slice(0, twelve));
        if (meals.length > 1) {
          setIsList(true);
        }
      }
    }
  }, [responseFetch]);

  return (
    <div className={ styles.foods }>
      <Header title="Comidas" />
      <Category pageName="comidas" />
      { isList && <RecipeCard products={ foods } pageName="comidas" /> }
      <Footer />
    </div>
  );
};

export default Foods;
