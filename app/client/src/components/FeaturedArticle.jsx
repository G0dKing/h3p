import { } from 'react';

const FeaturedArticle = ({ image, title }) => {
  return (
    <article className="col-4 col-12-mobile special">
      <a href="#" className="image featured"><img src={image} alt="" /></a>
      <header>
        <h3><a href="#">{title}</a></h3>
      </header>
      <p>
        Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
        porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
      </p>
    </article>
  );
};

export default FeaturedArticle;