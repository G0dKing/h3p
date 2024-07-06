// Home.jsx

import { } from 'react';
// Components
import Header from '@c/Header';
import Banner from '@c/Banner';
import Carousel from '@c/Carousel';
import MainArticle from '@c/MainArticle';
import Features from '@c/Features';
import Footer from '@c/Footer';
// Hooks
import useBreakpoints from '@h/useBreakpoints';
import useInitialAnimations from '@h/useInitialAnimations';
import useDropdowns from '@h/useDropdowns';
import useScroll from '@h/useScroll';
import useNavigationPanel from '@h/useNavigationPanel';
import useCarousels from '@h/useCarousels';

// Settings
const settings = {
    carousels: {
      speed: 4,
      fadeIn: true,
      fadeDelay: 250,
    },
  };

// Main Component
const Home = () => {
    // Call Hooks
    const breakpoint = useBreakpoints();
    useInitialAnimations();
    useDropdowns();
    useScroll();
    useNavigationPanel();
    useCarousels(settings);

// Render Page
  return (
    <div id="page-wrapper">
      <Header />
      <Banner />
      <Carousel />
      <MainArticle />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;