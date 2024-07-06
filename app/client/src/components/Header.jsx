import { } from 'react';
import Navigation from '@c/Navigation';

const Header = () => {
  return (
    <div id="header">
      <div className="inner">
        <header>
          <h1><a href="index.html" id="logo">Helios</a></h1>
          <hr />
          <p>Another fine freebie by HTML5 UP</p>
        </header>
        <footer>
          <a href="#banner" className="button circled scrolly">Start</a>
        </footer>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;