import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './css/recipeCard.module.css';

const RecipeCard = ({ products, pageName }) => (
  <section className={ styles.section }>
    <div className={ styles.cards }>
      {
        products.map((product, index) => (
          <Link
            to={ `/${pageName}/${pageName === 'bebidas' ? product.idDrink
              : product.idMeal}` }
            key={ index }
          >
            <div
              data-testid={ `${index}-recipe-card` }
              className={ styles.card }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ pageName === 'comidas' ? product.strMealThumb
                  : product.strDrinkThumb }
                alt={ pageName === 'comidas' ? product.strMeal : product.strDrink }
              />
              <span data-testid={ `${index}-card-name` }>
                { pageName === 'comidas' ? product.strMeal : product.strDrink }
              </span>
            </div>
          </Link>
        ))
      }
    </div>
  </section>
);

RecipeCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageName: PropTypes.string.isRequired,
};

export default RecipeCard;
