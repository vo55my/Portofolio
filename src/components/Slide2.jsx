import Profile2 from '../assets/Hilmy-2.jpg';
import Skill from './Skill';

const Slide2 = () => (
  <div className="container text-light mb-5 pb-5">
    <div className="row">
      <div className="col-lg-3 text-lg-start text-center">
        <img src={Profile2} className="bg-light rounded" alt="Hilmy" width="250" />
      </div>
      <div className="col-lg-9">
        <p className="display-4 fw-bolder text-lg-start text-center">About Me</p>
        <p className="fs-5">Saya adalah fresh graduate yang berkomitmen untuk meniti karir sebagai Software Developer dengan minat khusus pada pengembangan web, khususnya front-end. Menguasai HTML, CSS, dan JavaScript, saya memiliki pengalaman menciptakan antarmuka responsif dan berorientasi pada pengguna. Saya memiliki kemampuan komunikasi yang baik, mudah beradaptasi, serta senang bekerja dalam tim. Saya siap berkontribusi dengan ide-ide kreatif dan solusi inovatif di dunia digital.</p>
        <h4 className="mt-2 fw-bold">My Skill</h4>
        <div>
          <Skill />
        </div>
      </div>
    </div>
  </div>
);

export default Slide2;
