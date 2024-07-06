import { } from 'react';
import Header from '@c/Header';
import Banner from '@c/Banner';
import Carousel from '@c/Carousel';
import MainArticle from '@c/MainArticle';
import Features from '@c/Features';
import Footer from '@c/Footer';

const Home = () => {
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