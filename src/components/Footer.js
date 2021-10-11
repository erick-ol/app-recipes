import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalStorage';
import styles from './css/footer.module.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../App.css';

const Footer = () => {
  const { setResponseFetch } = useContext(GlobalContext);
  const handleClick = () => {
    setResponseFetch(null);
  };

  return (
    <footer data-testid="footer" className={ styles.footer }>
      <Link
        to="/bebidas"
      >
        <button type="button" onClick={ () => handleClick() }>
          <img src={ drinkIcon } data-testid="drinks-bottom-btn" alt="drink icon" />
        </button>
      </Link>

      <Link
        to="/explorar"
        className={ styles.explore }
      >
        <button type="button" onClick={ () => handleClick() }>
          <img src={ exploreIcon } data-testid="explore-bottom-btn" alt="explore icon" />
        </button>
      </Link>

      <Link
        to="/comidas"
      >
        <button type="button" onClick={ () => handleClick() }>
          <img src={ mealIcon } data-testid="food-bottom-btn" alt="food icon" />
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
