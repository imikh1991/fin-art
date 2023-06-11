// import { useState } from 'react'
import About from 'entities/footer';
import Header from 'entities/header';
import MainHeroImage from 'entities/mainHeroImage';
import MainHero from 'entities/mainHero';
import HeroSection from 'entities/heroSection';
function Welcome() {
  return (
    <>
      <div className={`bg-background grid gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <Header />
              <MainHero />
            </div>
          </div>
          <MainHeroImage />
        </div>
        <HeroSection />
        <About />
      </div>
    </>
  );
}

export default Welcome;
