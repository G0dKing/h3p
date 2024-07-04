import { } from 'react';
import CarouselObject from '@c/CarouselObject';

const carouselData = [
  { image: '@i/pic01.jpg', title: 'Pulvinar sagittis congue' },
  { image: '@i/pic02.jpg', title: 'Fermentum sagittis proin' },

];

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="reel">
        {carouselData.map((Object, index) => (
          <CarouselObject key={index} image={Object.image} title={Object.title} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;