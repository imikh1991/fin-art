import classes from './style.module.scss';
import icon from 'assets/svg/logo.svg';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useEffect, useState } from 'react';

export default function Header({}) {
    const { t } = useTranslation();
    const [activeLang, setActiveLang] = useState(i18n.language);

    // работаем с локализацией 
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
  };

  const [scrollTop, setScrollTop] = useState(0);

  const useScroll = (fn: () => void) => {
    useEffect(() => {
      window.addEventListener('scroll', fn);
      return () => window.removeEventListener('scroll', fn);
    }, [fn]);
  };

  useScroll(() => setScrollTop(window.scrollY));
  return (

    <div className={classes.set}></div>
  )
}  