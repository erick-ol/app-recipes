import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './css/login.module.css';
import cookPadLogo from '../images/cookPadLogo.jpg';
import nextArrow from '../images/nextarrow.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enable, setEnable] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const validateEmail = () => {
      // source regex https://pt.stackoverflow.com/a/276022
      const isValid = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
      if (!isValid || email === '') {
        return false;
      }
      return true;
    };
    const six = 6;
    if ((validateEmail()) && (password.length > six)) {
      return setEnable(true);
    }
    return setEnable(false);
  }, [password, email]);

  useEffect(() => {
    console.log(styles);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
    };

    localStorage.mealsToken = JSON.stringify(1);
    localStorage.cocktailsToken = JSON.stringify(1);
    localStorage.user = JSON.stringify(user);

    history.push('/comidas');
  };

  return (
    <div className={ styles.login_page }>
      <div className={ styles.main_login }>
        <div className={ styles.logo }>
          <img src={ cookPadLogo } alt="Logo CookPad" />
        </div>
        <form onSubmit={ (e) => handleSubmit(e) } className={ styles.form }>
          <input
            id="email"
            type="text"
            data-testid="email-input"
            placeholder="Email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
          <input
            id="password"
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ ({ target }) => setPassword(target.value) }
          />
          <p>Esqueceu a senha?</p>
          <button
            type="submit"
            data-testid="login-submit-btn"
            disabled={ !enable }
          >
            Entrar
            <img src={ nextArrow } alt="login-arrow" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
