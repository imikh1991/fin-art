// import React from 'react';
import Footer from 'entities/footer';
import Header from 'entities/header';
import MainHeroImage from 'entities/mainHeroImage';
import MainHero from 'entities/mainHero';
// import NotFound from 'pages/404';
// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import classes from './style.module.scss';

// const WelcomePage = lazy(() => import('./welcome'));

export default function Routing() {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
            <MainHeroImage />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};


