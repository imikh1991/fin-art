import { AiFillGithub } from 'react-icons/ai';
import school from '../../assets/svg/logo-rs.svg';
import classes from './style.module.scss';
import { useTranslation } from 'react-i18next';

// добавить локализацию 
export default function Footer({}) {
    const { t } = useTranslation();
    return (
      <footer className={`${classes.footer} container`}>
      </footer>
    );
  }
  