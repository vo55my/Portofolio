import Profile from '../assets/Hilmy.png';

const Slide1 = () => (
  <div className="container mb-5 pb-4">
    <div className="row d-flex align-items-center text-light">
      <div className="col-lg-6 text-lg-end text-center">
        <img src={Profile} className="img-thumbnail img-fluid rounded" alt="Hilmy" width="200" />
      </div>
      <div className="col-lg-6 text-lg-start text-center">
        <p className="fs-1 fw-bolder">Dhaifullah Hilmy</p>
        <p className="fs-3">Software Engineer</p>
        <a href="#page/slide2" className="fs-5 text-decoration-none text-light">Swipe <i className="bi bi-chevron-double-right"></i></a>
      </div>
    </div>
  </div>
);

export default Slide1;
