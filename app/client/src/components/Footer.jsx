import { } from 'react';
import Tweets from './Tweets';
import Posts from './Posts';
import Photos from './Photos';
import Contact from './Contact';
import Copyright from './Copyright';

const Footer = () => (
  <div id="footer">
    <div className="container">
      <div className="row">
        <Tweets />
        <Posts />
        <Photos />
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <Contact />
          <Copyright />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;