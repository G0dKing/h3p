import { } from 'react';

const MainArticle = () => {
  return (
    <div className="wrapper style2">
      <article id="main" className="container special">
        <a href="#" className="image featured"><img src="@i/pic06.jpg" alt="" /></a>
        <header>
          <h2><a href="#">Sed massa imperdiet magnis</a></h2>
          <p>
            Sociis aenean eu aenean mollis mollis facilisis primis ornare penatibus aenean. Cursus ac enim
            pulvinar curabitur morbi convallis. Lectus malesuada sed fermentum dolore amet.
          </p>
        </header>
        <p>
          {/* Main article content */}
        </p>
        <footer>
          <a href="#" className="button">Continue Reading</a>
        </footer>
      </article>
    </div>
  );
};

export default MainArticle;