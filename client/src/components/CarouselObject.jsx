import { } from 'react';

const CarouselObject = ({ image, title }) => {
  return (
    <article>
      <a href="#" className="image featured"><img src={image} alt="" /></a>
      <header>
        <h3><a href="#">{title}</a></h3>
      </header>
      <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
    </article>
  );
};

export default CarouselObject;