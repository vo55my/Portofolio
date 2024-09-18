import { useEffect } from 'react';
import Slide from './Slide';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import fullpage from 'fullpage.js';

const Main = () => {
  useEffect(() => {
    new fullpage('#fullpage', {
      autoScrolling: true,
      anchors: ['page'],
      controlArrows: false,
    });
  }, []);

  return (
    <div id="fullpage">
      <div className="section">
        <Slide id="slide1" anchor="slide1">
          <Slide1 />
        </Slide>
        <Slide id="about" anchor="slide2">
          <Slide2 />
        </Slide>
        <Slide id="contact" anchor="slide3">
          <Slide3 />
        </Slide>
      </div>
    </div>
  );
}

export default Main;
