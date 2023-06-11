'use client';
// import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './welcome';
import NotFound from './404';
// import NotFound from 'pages/404';
// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import classes from './style.module.scss';
// const WelcomePage = lazy(() => import('./welcome'));

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
