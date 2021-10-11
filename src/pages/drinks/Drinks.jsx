import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalStorage';
import { Header, Footer, RecipeCard, Category } from '../../components';
import styles from '../css/drinks.module.css';
import useFetch from '../../hooks/useFetch';

const Drinks = () => {
  const { responseFetch } = useContext(GlobalContext);
  const [isList, setIsList] = useState(false);
  const [drinksArray, setDrinksArray] = useState(null);
  const { request } = useFetch();

  useEffect(() => {
    if (responseFetch === null || responseFetch.meals) {
      request('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    }
  }, [request, responseFetch]);

  useEffect(() => {
    if (responseFetch) {
      const { drinks } = responseFetch;
      if (drinks) {
        const twelve = 12;
        setDrinksArray(drinks.slice(0, twelve));
        if (drinks.length > 1) {
          setIsList(true);
        }
      }
    }
  }, [responseFetch]);

  return (
    <div className={ styles.drinks }>
      <Header title="Bebidas" />
      <Category pageName="bebidas" />
      { isList && <RecipeCard products={ drinksArray } pageName="bebidas" /> }
      <Footer />
    </div>
  );
};

export default Drinks;
