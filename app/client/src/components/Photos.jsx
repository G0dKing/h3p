import { } from 'react';

const Photo = ({ src }) => (
  <div className="col-6">
    <a href="#" className="image fit"><img src={src} alt="" /></a>
  </div>
);

const Photos = () => {
  const photos = [
    '@i/pic10.jpg', '@i/pic11.jpg', '@i/pic12.jpg',
    '@i/pic13.jpg', '@i/pic14.jpg', '@i/pic15.jpg'
  ];

  return (
    <section className="col-4 col-12-mobile">
      <header>
        <h2 className="icon solid fa-camera circled"><span className="label">Photos</span></h2>
      </header>
      <div className="row gtr-25">
        {photos.map((photo, index) => (
          <Photo key={index} src={photo} />
        ))}
      </div>
    </section>
  );
};

export default Photos;