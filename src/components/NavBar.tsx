import { NavLink } from 'react-router-dom';
// import styles from './NavBar.css';
import '../pages/style.css'
export const NavBar = () => {
  return (
    <header className="main-header">
      <nav className="main-navigation">
        <a className="main-header-logo">
          <img src="src/assets/svg-6.svg" alt="Logo"/>
        </a>

        <div className="main-navigation-wrapper">
          <div className="container">
              <ul className="site-navigation">
                <li><a href="#"> <img src="src/assets/react.svg" alt="Logo"/></a></li>
                <li><a href="info.html">О нас</a></li>
                <li><a href="news.html">Наша команда</a></li>
                <li><a href="price.html">Наш продукт</a></li>
                <li><a href="catalog.html">Инструменты</a></li>
                <li><a href="contacts.html">Результат</a></li>
                <li><a href="contacts.html">Обучающие видео</a></li>
              </ul>
              <ul className="user-navigation">
                <li><a className="login-link" href="login.html">Вход </a></li>
              </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
