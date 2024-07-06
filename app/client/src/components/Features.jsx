import { } from 'react';
import FeaturedArticle from '@c/FeaturedArticle';

const featuresData = [
  { image: '@i/pic07.jpg', title: 'Gravida aliquam penatibus' },
  { image: '@i/pic08.jpg', title: 'Sed quis rhoncus placerat' },
  { image: '@i/pic09.jpg', title: 'Magna laoreet et aliquam' },
];

const Features = () => {
  return (
    <div className="wrapper style1">
      <section id="features" className="container special">
        <header>
          <h2>Morbi ullamcorper et varius leo lacus</h2>
          <p>Ipsum volutpat consectetur orci metus consequat imperdiet duis integer semper magna.</p>
        </header>
        <div className="row">
          {featuresData.map((feature, index) => (
            <FeaturedArticle key={index} image={feature.image} title={feature.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;